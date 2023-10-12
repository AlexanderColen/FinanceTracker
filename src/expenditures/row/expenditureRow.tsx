import { ChangeEvent, FC, useState } from "react";
import { formatClasses, formatCurrency } from "../../helpers";
import { IBaseProps, IExpenditure } from "../../types";
import "./expenditureRow.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { DateTime } from "luxon";
import Button from "react-bootstrap/Button";
import { TextInput } from "../../utils/inputs/textInput";
import { NumberInput } from "../../utils/inputs/numberInput";
import { TrashIcon } from "../../utils/icons/trash";
import { FloppyIcon } from "../../utils/icons/floppy";
import { PencilSquareIcon } from "../../utils/icons/pencilSquare";
import { Collapse } from "react-bootstrap";

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
      className={formatClasses(["expenditure-row", props.extraClassName])}
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
            type="date"
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
      <Col className="actions">
        {isEditing ? (
          <Button
            className="btn-action"
            onClick={() => setIsEditing(!isEditing)}
            variant="success"
          >
            <FloppyIcon />
            Save
          </Button>
        ) : (
          <Button
            className="btn-action"
            onClick={() => setIsEditing(!isEditing)}
            variant="warning"
          >
            <PencilSquareIcon />
            Edit
          </Button>
        )}

        <Button
          className="btn-action"
          onClick={props.deleteExpenditure}
          variant="danger"
        >
          <TrashIcon />
          Delete
        </Button>
      </Col>
    </Row>
  );
};
