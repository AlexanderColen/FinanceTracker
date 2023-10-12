import { FC } from "react";
import { formatClasses } from "../helpers";
import { BankIcon } from "../icons/bank";
import { CashCoinIcon } from "../icons/cashCoin";
import { GraphUpIcon } from "../icons/graphUp";
import { TableIcon } from "../icons/table";
import { IBaseProps } from "../types";
import "./dashboard.scss";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Dashboard: FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  document.title = "Home | Finance Tracker";

  return (
    <Container
      className={formatClasses(["dashboard", props.extraClassName])}
      onClick={props.onClick}
    >
      <div>
        <div className="dashboard-block" onClick={() => navigate("/overview")}>
          <GraphUpIcon size="3rem" />
          <p>Overview</p>
        </div>
        <div
          className="dashboard-block"
          onClick={() => navigate("/expenditures")}
        >
          <TableIcon size="3rem" />
          <p>Expenditures</p>
        </div>
      </div>
      <div>
        <div className="dashboard-block" onClick={() => navigate("/debts")}>
          <BankIcon size="3rem" />
          <p>Debt</p>
        </div>
        <div className="dashboard-block" onClick={() => navigate("/income")}>
          <CashCoinIcon size="3rem" />
          <p>Income</p>
        </div>
      </div>
    </Container>
  );
};
