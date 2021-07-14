// Models
import { IExampleState } from 'storage/example/models'

export interface IAction {
  type: string
  payload?: unknown
}

export interface IBaseState {
  error?: string
  loading?: boolean
  refreshing?: boolean
}

export default interface IStore {
  example: IExampleState
}
