import { FC, ReactNode } from 'react';
import { formatClasses } from '../../helpers';
import { IBaseProps } from '../../types';

/**
 * Interface use to define the properties for the Icon component.
 * @extends IBaseProps
 */
export interface IIconProps extends IBaseProps {
  /**
   * The SVG path children to render within the icon.
   */
  children?: ReactNode;
  /**
   * The size to make the icon. Defaults to 16pt;
   */
  size?: string;
}

export const Icon: FC<IIconProps> = (props: IIconProps): JSX.Element => {
  return (
    <svg
      aria-label={props.ariaLabel}
      className={formatClasses(['icon', props.extraClassName])}
      fill='currentColor'
      height={props.size || '16pt'}
      id={props.id}
      onClick={props.onClick}
      viewBox='0 0 16 16'
      width={props.size || '16pt'}
      xmlns='http://www.w3.org/2000/svg'
    >
      {props.children}
    </svg>
  );
};
