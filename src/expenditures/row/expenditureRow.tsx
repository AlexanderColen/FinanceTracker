import { DateTime } from 'luxon';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { formatClasses, formatCurrency } from '../../utils/helpers';
import { addIfNew } from '../../store/categories/categoriesSlice';
import { IBaseProps, IExpenditure } from '../../types';
import { useAppDispatch } from '../../utils/hooks';
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
   * Callback used to delete the Expenditure in the parent component.
   */
  deleteExpenditure: () => void;
  /**
   * The existing Expenditure to load in.
   */
  expenditure: IExpenditure;
  /**
   * Callback used to update an Expenditure in the parent component.
   * @param expenditure The Expenditure to update.
   */
  updateExpenditure: (expenditure: IExpenditure) => void;
}

export const ExpenditureRow: FC<IExpenditureRowProps> = (
  props: IExpenditureRowProps
): JSX.Element => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [expenditureSnapshot, setExpenditureSnapshot] = useState<IExpenditure>(
    props.expenditure
  );
  const [date, setDate] = useState<DateTime | null>(
    props.expenditure.date || null
  );
  const [amount, setAmount] = useState<number | undefined>(
    props.expenditure.amount
  );
  const [vendor, setVendor] = useState<string | undefined>(
    props.expenditure.vendor
  );
  const [category, setCategory] = useState<string | undefined>(
    props.expenditure.category
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    initializeData(props.expenditure);
  }, [props.expenditure]);

  useEffect(() => {
    if (expenditureSnapshot !== props.expenditure) {
      props.updateExpenditure(expenditureSnapshot);
    }
  }, [expenditureSnapshot]);

  return (
    <Row
      className={formatClasses(['expenditure-row', props.extraClassName])}
      id={props.id}
      onClick={props.onClick}
    >
      <Col>{date ? date.weekNumber : '-'}</Col>
      <Col>
        {isEditing ? (
          <input
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setDate(
                event.target.value
                  ? DateTime.fromJSDate(new Date(event.target.value))
                  : null
              )
            }
            type='date'
            value={date?.toJSDate().toLocaleDateString()}
          />
        ) : date ? (
          date.toJSDate().toLocaleDateString()
        ) : (
          'Unknown'
        )}
      </Col>
      <Col>
        {isEditing ? (
          <NumberInput minimumValue={0} setValue={setAmount} value={amount} />
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
                date: date || undefined,
                vendor,
              });
              setIsEditing(!isEditing);
              dispatch(addIfNew(category));
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
              initializeData(expenditureSnapshot);
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

  /**
   * Initialize the component's data.
   * @param expenditure The Expenditure to initialize data from.
   */
  function initializeData(expenditure: IExpenditure): void {
    setExpenditureSnapshot(expenditure);
    setAmount(expenditure.amount);
    setCategory(expenditure.category);
    setDate(expenditure.date || null);
    setVendor(expenditure.vendor);
  }
};
