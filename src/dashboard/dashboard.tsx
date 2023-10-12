import { FC } from "react";
import { formatClasses } from "../helpers";
import { BankIcon } from "../icons/bank";
import { CashCoinIcon } from "../icons/cashCoin";
import { GraphUpIcon } from "../icons/graphUp";
import { TableIcon } from "../icons/table";
import { IBaseProps } from "../types";
import "./dashboard.scss";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Dashboard: FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div
      className={formatClasses([
        "dashboard",
        "container",
        props.extraClassName,
      ])}
      onClick={props.onClick}
    >
      <div>
        <div className="dashboard-block" onClick={() => navigate("/overview")}>
          <GraphUpIcon />
          <p>Overview</p>
        </div>
        <div
          className="dashboard-block"
          onClick={() => navigate("/expenditures")}
        >
          <TableIcon />
          <p>Expenditures</p>
        </div>
      </div>
      <div>
        <div className="dashboard-block" onClick={() => navigate("/debts")}>
          <BankIcon />
          <p>Debt</p>
        </div>
        <div className="dashboard-block" onClick={() => navigate("/income")}>
          <CashCoinIcon />
          <p>Income</p>
        </div>
      </div>
    </div>
  );
};
