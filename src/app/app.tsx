import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../dashboard/dashboard';
import { Expenditures } from '../expenditures/expenditures';
import { Header } from '../header/header';
import { IBaseProps } from '../types';
import { WIP } from '../wip/wip';

export const App: FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  return (
    <div className={props.extraClassName} id={props.id} onClick={props.onClick}>
      <Header />

      <Routes>
        <Route path='/'>
          <Route index element={<Dashboard />} />

          <Route path='debts' element={<WIP pageTitle='Debts' />} />

          <Route path='expenditures' element={<Expenditures />} />

          <Route path='income' element={<WIP pageTitle='Income' />} />

          <Route path='overview' element={<WIP pageTitle='Overview' />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

