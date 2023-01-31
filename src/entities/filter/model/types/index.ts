export interface IMain {
  city: string
  room: string
  minPrice: string
  maxPrice: string
  beds: string
  district: string
  metro: string
}

export interface IFilterState {
  main: IMain
  checkboxes: string[]
}
