/**
 * Interface defining base properties that every component extends.
 */
export interface IBaseProps {
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
