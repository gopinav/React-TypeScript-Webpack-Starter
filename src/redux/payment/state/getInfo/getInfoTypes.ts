import { TInfoListRes } from '@src/api/payment/getInfo/declaration'

export type TInfoListState = {
  loading: boolean
  error: boolean
  data: TInfoListRes
}
