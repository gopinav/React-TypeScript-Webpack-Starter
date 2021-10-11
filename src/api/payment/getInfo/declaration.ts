export type TInfoListReq = { orgId: number }

type TInfoItem = {
  id: string,
  title: string,
}

export type TInfoListRes = {
  errorCode: number,
  errorMessage?: string,
  info?: Array<TInfoItem>
}
