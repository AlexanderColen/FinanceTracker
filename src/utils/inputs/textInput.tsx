import { ChangeEvent, FC } from "react";
import { IBaseProps } from "../../types";

/**
 * Interface use to define the properties for the TextInput component.
 * @extends IBaseProps
 */
export interface ITextInputProps extends IBaseProps {
  /**
   * Indicator whether the input should be disabled.
   */
  disabled?: boolean;
  /**
   * The maximum allowed length for the value.
   */
  maximumLength?: number;
  /**
   * The minimum allowed length for the value.
   */
  minimumLength?: number;

  /**
   * Callback to update the value in the parent component.
   * @param value The new value to set.
   */
  setValue: (value: string | undefined) => void;
  /**
   * The value of the input.
   */
  value: string | undefined;
}

export const TextInput: FC<ITextInputProps> = (
  props: ITextInputProps
): JSX.Element => {
  return (
    <input
      aria-label={props.ariaLabel}
      className={props.extraClassName}
      disabled={props.disabled}
      id={props.id}
      maxLength={props.maximumLength}
      minLength={props.minimumLength}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        props.setValue(event.target.value)
      }
      type="text"
      value={props.value}
    />
  );
};
