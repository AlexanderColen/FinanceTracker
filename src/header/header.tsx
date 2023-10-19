import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { formatClasses } from '../utils/helpers';
import { IBaseProps } from '../types';
import './header.scss';

export const Header: FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Navbar
      aria-label={props.ariaLabel}
      className={formatClasses(['bg-body-dark', props.extraClassName])}
      expand='lg'
      onClick={props.onClick}
    >
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          Finance Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/overview')}>Overview</Nav.Link>
            <Nav.Link onClick={() => navigate('/expenditures')}>
              Expenditures
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/income')}>Income</Nav.Link>
            <Nav.Link onClick={() => navigate('/debts')}>Debts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
