import { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { formatClasses } from '../utils/helpers';
import { IBaseProps } from '../types';
import { BankIcon } from '../utils/icons/bank';
import { CashCoinIcon } from '../utils/icons/cashCoin';
import { GraphUpIcon } from '../utils/icons/graphUp';
import { TableIcon } from '../utils/icons/table';
import './dashboard.scss';

export const Dashboard: FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  document.title = 'Home | Finance Tracker';

  return (
    <Container
      className={formatClasses(['dashboard', props.extraClassName])}
      id={props.id}
      onClick={props.onClick}
    >
      <Row>
        <Col>
          <div
            className='dashboard-block'
            onClick={() => navigate('/overview')}
          >
            <GraphUpIcon size='3rem' />
            <p>Overview</p>
          </div>
        </Col>
        <Col>
          <div
            className='dashboard-block'
            onClick={() => navigate('/expenditures')}
          >
            <TableIcon size='3rem' />
            <p>Expenditures</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='dashboard-block' onClick={() => navigate('/debts')}>
            <BankIcon size='3rem' />
            <p>Debt</p>
          </div>
        </Col>
        <Col>
          <div className='dashboard-block' onClick={() => navigate('/income')}>
            <CashCoinIcon size='3rem' />
            <p>Income</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
