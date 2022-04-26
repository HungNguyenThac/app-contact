export interface IAsideMenu {
  name: string
  isActive?: boolean
  url: string
  title: string
}

export interface IContact {
  contactName: string
  address: string
  phoneNumber: string
  title?: string
  coordinate?: string
}
