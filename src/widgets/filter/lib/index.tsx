import { IFilterState } from 'entities/filter/model/types';

export const createCatalogRoute = (obj: IFilterState) => {
  let result = '/catalog?';
  for (const [key, el] of Object.entries(obj.main)) {
    if (el) result += `${key}=${el}&`;
  };
  if (obj.checkboxes.length) {
    obj.checkboxes.forEach(el => (result += `${el}=true&`));
  }

  return result.slice(0, -1);
};
