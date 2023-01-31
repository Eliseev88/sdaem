export interface ISidebarElement {
  id: number
  value: string
  city: string
  path: string
  amount: number
}

export interface ISidebar {
  cars: ISidebarElement[]
  flats: ISidebarElement[]
  mansion: ISidebarElement[]
  sauna: ISidebarElement[]
}
