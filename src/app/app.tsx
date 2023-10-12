import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard/dashboard";
import { formatClasses } from "../helpers";
import { IBaseProps } from "../types";
import "./app.scss";

export const App: FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  return (
    <div
      className={formatClasses(["finance-tracker-app", props.extraClassName])}
      onClick={props.onClick}
    >
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />

          <Route path="debts" element={"DEBTS are HERE"} />

          <Route path="expenditures" element={"EXPENDITURES ARE HERE"} />

          <Route path="income" element={"INCOME IS HERE"} />

          <Route path="overview" element={"OVERVIEW IS HERE"} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
