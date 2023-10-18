import { FC, useState } from 'react';
import { formatClasses } from '../helpers';
import { IBaseModel, IBaseProps, IExpenditure } from '../types';
import './expenditures.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ExpenditureRow } from './row/expenditureRow';
import { cloneDeep } from 'lodash-es';
import { DateTime } from 'luxon';
import { PlusIcon } from '../utils/icons/plus';
import Button from 'react-bootstrap/Button';

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

    console.log(highestId);

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
   * Delete an expenditure from the collection.
   * @param id The ID of the expenditure to delete.
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
};
