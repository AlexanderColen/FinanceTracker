import { FC } from "react";
import { formatClasses } from "../helpers";
import { IBaseProps } from "../types";
import "./wip.scss";
import { ConeStripedIcon } from "../icons/coneStriped";
import Container from "react-bootstrap/Container";

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
        "work-in-progress",
        "container",
        props.extraClassName,
      ])}
      onClick={props.onClick}
    >
      <ConeStripedIcon size="10rem" />
      <div className="description">
        <p>The '{props.pageTitle}' page is still under construction.</p>
        <p>Please come back later.</p>
      </div>
    </Container>
  );
};
