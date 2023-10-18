import { API_URL } from './env';
import { ApiSlugEnum } from './types';

/**
 * Helper method for formatting HTML class names.
 * @param classes The classes to format.
 */
export function formatClasses(classes: (string | undefined)[]): string {
  return classes.filter((cssClass: string | undefined) => cssClass).join(' ');
}

/**
 * Format a number to a currency string.
 * @param amount The amount to format.
 * @param locale The locale to use.
 * @param currency The currency to use.
 *
 * Defaults to CAD.
 * @returns The formatted currency.
 */
export function formatCurrency(
  amount: number | undefined | null,
  locale?: string | string[],
  currency: string = 'CAD'
): string {
  return Intl.NumberFormat(locale, {
    currency: currency,
    style: 'currency',
  }).format(amount || 0);
}

/**
 * Helper method for fetching a resource from the API.
 * @param args The arguments to use for the request.
 */
export async function fetchResource(args: {
  apiSlug: ApiSlugEnum;
  body?: object;
  id?: number | string;
  method?: 'DELETE' | 'GET' | 'PATCH' | 'POST';
}): Promise<object> {
  try {
    const url: string = `${API_URL}${args.apiSlug}${args.id || ''}`;
    let body: BodyInit | null | undefined;

    if (args.body) {
      body = JSON.stringify(args.body);
    }

    const response: Response = await fetch(url, {
      body: body,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: args.method,
      mode: 'cors',
    });

    return response.json();
  } catch (error: any) {
    return {
      error: error,
    };
  }
}
