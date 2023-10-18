import { FC } from 'react';
import { formatClasses } from '../helpers';
import { BankIcon } from '../utils/icons/bank';
import { CashCoinIcon } from '../utils/icons/cashCoin';
import { GraphUpIcon } from '../utils/icons/graphUp';
import { TableIcon } from '../utils/icons/table';
import { IBaseProps } from '../types';
import './dashboard.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
