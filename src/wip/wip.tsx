import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import { formatClasses } from '../utils/helpers';
import { IBaseProps } from '../types';
import { ConeStripedIcon } from '../utils/icons/coneStriped';
import './wip.scss';

/**
 * Interface use to define the properties for the WIP component.
 * @extends IBaseProps
 */
export interface IWIPProps extends IBaseProps {
  /**
   * The page title to display as being under construction.
   */
  pageTitle: string;
}

export const WIP: FC<IWIPProps> = (props: IWIPProps): JSX.Element => {
  document.title = `${props.pageTitle} | Finance Tracker`;

  return (
    <Container
      className={formatClasses([
        'work-in-progress',
        'container',
        props.extraClassName,
      ])}
      id={props.id}
      onClick={props.onClick}
    >
      <ConeStripedIcon size='10rem' />
      <div className='description'>
        <p>The '{props.pageTitle}' page is still under construction.</p>
        <p>Please come back later.</p>
      </div>
    </Container>
  );
};
