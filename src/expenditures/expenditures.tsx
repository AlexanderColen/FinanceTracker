import { cloneDeep } from 'lodash-es';
import { DateTime } from 'luxon';
import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { formatClasses } from '../utils/helpers';
import { IBaseModel, IBaseProps, IExpenditure } from '../types';
import { PlusIcon } from '../utils/icons/plus';
import './expenditures.scss';
import { ExpenditureRow } from './row/expenditureRow';

export const Expenditures: FC<IBaseProps> = (
  props: IBaseProps
): JSX.Element => {
  const [expenditures, setExpenditures] = useState<IExpenditure[]>([]);

  document.title = 'Expenditures | Finance Tracker';

  return (
    <Container
      className={formatClasses(['expenditures', props.extraClassName])}
      onClick={props.onClick}
    >
      <Row className='column-headers'>
        <Col>Week</Col>
        <Col>Date</Col>
        <Col>Amount</Col>
        <Col>Vendor</Col>
        <Col>Category</Col>
        <Col>Actions</Col>
      </Row>

      {expenditures.map((expenditure: IExpenditure) => (
        <ExpenditureRow
          deleteExpenditure={() => deleteExpenditure(expenditure.id)}
          expenditure={expenditure}
          key={expenditure.id}
          updateExpenditure={updateExpenditure}
        />
      ))}

      <Button
        id='btn-add-expenditure'
        onClick={addNewExpenditure}
        variant='info'
      >
        <PlusIcon />
        Add row
      </Button>
    </Container>
  );

  /**
   * Add a new Expenditure to fill in.
   */
  function addNewExpenditure(): void {
    const clonedExpenditures: IExpenditure[] = cloneDeep(expenditures);

    const highestId: number =
      clonedExpenditures.length === 0
        ? 0
        : Math.max(...clonedExpenditures.map((model: IBaseModel) => model.id));

    clonedExpenditures.push({
      amount: undefined,
      category: '?',
      date: DateTime.now(),
      id: highestId + 1,
      vendor: '?',
    });

    setExpenditures(clonedExpenditures);
  }

  /**
   * Delete an Expenditure from the collection.
   * @param id The ID of the Expenditure to delete.
   */
  function deleteExpenditure(id: number): void {
    const clonedExpenditures: IExpenditure[] = cloneDeep(expenditures);

    const foundIndex: number = clonedExpenditures.findIndex(
      (model: IBaseModel) => model.id === id
    );

    if (foundIndex !== -1) {
      clonedExpenditures.splice(foundIndex, 1);
    }

    setExpenditures(clonedExpenditures);
  }

  /**
   * Update an Expenditure.
   * @param expenditure The Expenditure with values to update.
   */
  function updateExpenditure(expenditure: IExpenditure): void {
    const clonedExpenditures: IExpenditure[] = cloneDeep(expenditures);

    const foundIndex: number = clonedExpenditures.findIndex(
      (model: IBaseModel) => model.id === expenditure.id
    );

    if (foundIndex !== -1) {
      clonedExpenditures[foundIndex] = expenditure;
    }

    setExpenditures(clonedExpenditures);
  }
};
