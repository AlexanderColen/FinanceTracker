import { FC } from "react";
import { formatClasses } from "../helpers";
import { IBaseProps } from "../types";
import "./wip.scss";
import { ConeStripedIcon } from "../icons/coneStriped";

export const WIP: FC<IBaseProps> = (props: IBaseProps): JSX.Element => {
  return (
    <div
      className={formatClasses([
        "work-in-progress",
        "container",
        props.extraClassName,
      ])}
      onClick={props.onClick}
    >
      <ConeStripedIcon size="3rem" />
      <p>This page is under construction. Please come back later.</p>
    </div>
  );
};
