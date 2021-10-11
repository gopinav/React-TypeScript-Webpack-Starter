type TInfoItem = {
  id: string,
  title: string,
}

export type TInfoListReq = { orgId: number }

export type TInfoListRes = {
  errorCode: number,
  errorMessage?: string,
  info?: Array<TInfoItem>
}
