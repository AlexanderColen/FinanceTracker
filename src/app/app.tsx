import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard/dashboard";
import { formatClasses } from "../helpers";
import { IBaseProps } from "../types";
import "./app.scss";
import { WIP } from "../wip/wip";
import { Header } from "../header/header";

export const App: FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  return (
    <div
      className={formatClasses(["finance-tracker-app", props.extraClassName])}
      onClick={props.onClick}
    >
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />

          <Route path="debts" element={<WIP />} />

          <Route path="expenditures" element={<WIP />} />

          <Route path="income" element={<WIP />} />

          <Route path="overview" element={<WIP />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;