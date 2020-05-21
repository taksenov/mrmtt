import { stringify } from 'qs';

/**
 * Сериализует объект в параметрическую строку URL
 *
 * @param {*} params -- { a: ['b', 'c'] }
 * @returns string -- a[]=b&a[]=c
 */
const paramsSerializer = params =>
  stringify(params, {
    skipNulls: true,
    arrayFormat: 'brackets',
  });

export default paramsSerializer;
