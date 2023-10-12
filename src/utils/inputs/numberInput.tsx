import { ChangeEvent, FC } from "react";
import { IBaseProps } from "../../types";

/**
 * Interface use to define the properties for the NumberInput component.
 * @extends IBaseProps
 */
export interface INumberInputProps extends IBaseProps {
  /**
   * Indicator whether the input should be disabled.
   */
  disabled?: boolean;
  /**
   * The maximum allowed value for the value.
   */
  maximunValue?: number;
  /**
   * The minimum allowed value for the value.
   */
  minimunValue?: number;
  /**
   * Callback to update the value in the parent component.
   * @param value The new value to set.
   */
  setValue: (value: number | undefined) => void;
  /**
   * The value of the input.
   */
  value: number | undefined;
}

export const NumberInput: FC<INumberInputProps> = (
  props: INumberInputProps
): JSX.Element => {
  return (
    <input
      aria-label={props.ariaLabel}
      className={props.extraClassName}
      disabled={props.disabled}
      id={props.id}
      max={props.maximunValue}
      min={props.minimunValue}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        props.setValue(Number(event.target.value))
      }
      type="number"
      value={props.value}
    />
  );
};
