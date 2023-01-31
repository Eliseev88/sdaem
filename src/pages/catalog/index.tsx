import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

export const CatalogPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  interface IParams {
    [key: string]: string
  }

  const params: IParams = {};

  searchParams.forEach((key: string, value: string) => {
    params[key] = value;
  });

  console.log(params);
  return (
    <div>catalog</div>
  );
};

export default CatalogPage;
