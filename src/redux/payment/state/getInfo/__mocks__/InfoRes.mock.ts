import { TInfoListRes } from '@src/api/payment/getInfo/declaration'

export const INFO_RES_MOCK: TInfoListRes = {
  errorCode: 0,
  errorMessage: 'All good',
  info: [
    {
      id: 'OFD_TAXCOM',
      title: 'ТАКСКОМ',
    },
    {
      id: 'OFD_CONTOUR',
      title: 'КОНТУР',
    },
    {
      id: 'OFD_UNKNOWN',
      title: 'Другие',
    },
  ],
}
