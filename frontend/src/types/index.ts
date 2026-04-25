export interface User {
  id: number
  email: string
  name: string
}

export interface Sale {
  id: number
  amount: number
  memo: string
  date: string
  createdAt: string
}

export interface Inventory {
  id: number
  name: string
  quantity: number
  unit: string
  minStock: number
  updatedAt: string
}

export interface Expense {
  id: number
  category: string
  amount: number
  memo: string
  date: string
}

export interface Customer {
  id: number
  name: string
  phone: string
  memo: string
  visitCount: number
  lastVisit: string
}

export interface ApiResponse<T> {
  data: T
  message: string
}
