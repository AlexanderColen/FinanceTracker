import { DateTime } from "luxon";

/**
 * Interface defining base properties that every component extends.
 */
export interface IBaseProps {
  /**
   * The aria label to assign the the component.
   */
  ariaLabel?: string;
  /**
   * The id to assign to the component's outermost element.
   */
  id?: string | undefined;
  /**
   * The extra class name to add to the component's outermost element.
   */
  extraClassName?: string | undefined;
  /**
   * The callback to execute when clicking on the element.
   */
  onClick?: () => void;
}

/**
 * Enum defining the API slugs that are available.
 */
export enum ApiSlugEnum {
  LOGIN = "api-auth/login/",
  USERS = "users/",
}

/**
 * Interface defining the base structure of an API Model.
 */
export interface IBaseModel {
  /**
   * The database ID.
   */
  id: number;
}

/**
 * Interface defining the structure of an API Expenditure.
 */
export interface IExpenditure extends IBaseModel {
  /**
   * The amount that was spent.
   */
  amount: number | undefined;
  /**
   * The category to group it under.
   */
  category: string | undefined;
  /**
   * The date the transaction happened.
   */
  date: DateTime;
  /**
   * The vendor of the receiving amount.
   */
  vendor: string | undefined;
}
