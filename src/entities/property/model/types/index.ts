export interface IProperty {
  id: number
  name: string
}

export type IFetchAllProperty = () => IProperty[][];
