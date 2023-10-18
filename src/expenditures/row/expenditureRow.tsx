import { DateTime } from 'luxon';
import { ChangeEvent, FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { formatClasses, formatCurrency } from '../../helpers';
import { IBaseProps, IExpenditure } from '../../types';
import { ArrowCounterClockwiseIcon } from '../../utils/icons/arrowCounterClockwise';
import { FloppyIcon } from '../../utils/icons/floppy';
import { PencilSquareIcon } from '../../utils/icons/pencilSquare';
import { TrashIcon } from '../../utils/icons/trash';
import { NumberInput } from '../../utils/inputs/numberInput';
import { TextInput } from '../../utils/inputs/textInput';
import './expenditureRow.scss';

/**
 * Interface use to define the properties for the ExpenditureRow component.
 * @extends IBaseProps
 */
export interface IExpenditureRowProps extends IBaseProps {
  /**
   * Callback used to delete the expenditure in the parent component.
   */
  deleteExpenditure: () => void;
  /**
   * The existing Expenditure to load in.
   */
  expenditure: IExpenditure;
}

export const ExpenditureRow: FC<IExpenditureRowProps> = (
  props: IExpenditureRowProps
): JSX.Element => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [expenditureSnapshot, setExpenditureSnapshot] = useState<IExpenditure>(
    props.expenditure
  );
  const [date, setDate] = useState<DateTime>(props.expenditure.date);
  const [amount, setAmount] = useState<number | undefined>(
    props.expenditure.amount
  );
  const [vendor, setVendor] = useState<string | undefined>(
    props.expenditure.vendor
  );
  const [category, setCategory] = useState<string | undefined>(
    props.expenditure.category
  );

  return (
    <Row
      className={formatClasses(['expenditure-row', props.extraClassName])}
      id={props.id}
      onClick={props.onClick}
    >
      <Col>{date.weekNumber}</Col>
      <Col>
        {isEditing ? (
          <input
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setDate(DateTime.fromJSDate(new Date(event.target.value)))
            }
            type='date'
            value={date.toJSDate().toLocaleDateString()}
          />
        ) : (
          date.toJSDate().toLocaleDateString()
        )}
      </Col>
      <Col>
        {isEditing ? (
          <NumberInput minimunValue={0} setValue={setAmount} value={amount} />
        ) : (
          formatCurrency(amount)
        )}
      </Col>
      <Col>
        {isEditing ? <TextInput setValue={setVendor} value={vendor} /> : vendor}
      </Col>
      <Col>
        {isEditing ? (
          <TextInput setValue={setCategory} value={category} />
        ) : (
          category
        )}
      </Col>
      <Col className='actions'>
        {isEditing ? (
          <Button
            className='btn-action'
            onClick={() => {
              setExpenditureSnapshot({
                ...expenditureSnapshot,
                amount,
                category,
                date,
                vendor,
              });
              setIsEditing(!isEditing);
            }}
            variant='success'
          >
            <FloppyIcon />
            Save
          </Button>
        ) : (
          <Button
            className='btn-action'
            onClick={() => setIsEditing(!isEditing)}
            variant='warning'
          >
            <PencilSquareIcon />
            Edit
          </Button>
        )}

        {isEditing ? (
          <Button
            className='btn-action'
            onClick={() => {
              setAmount(expenditureSnapshot.amount);
              setCategory(expenditureSnapshot.category);
              setDate(expenditureSnapshot.date);
              setVendor(expenditureSnapshot.vendor);
              setIsEditing(!isEditing);
            }}
            variant='danger'
          >
            <ArrowCounterClockwiseIcon />
            Cancel
          </Button>
        ) : (
          <Button
            className='btn-action'
            onClick={props.deleteExpenditure}
            variant='danger'
          >
            <TrashIcon />
            Delete
          </Button>
        )}
      </Col>
    </Row>
  );
};
