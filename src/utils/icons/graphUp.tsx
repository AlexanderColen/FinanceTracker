import { FC } from 'react';
import { IIconProps, Icon } from './icon';

export const GraphUpIcon: FC<IIconProps> = (props: IIconProps): JSX.Element => {
  return (
    <Icon
      {...props}
      ariaLabel='Graph up icon'
      children={
        <path
          fillRule='evenodd'
          d='M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z'
        />
      }
    />
  );
};

