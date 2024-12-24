import { MetaTypes } from "./global.types"

export interface ExchangeTypes {
  _index: string
  _type: string
  _id: string
  _score: number
  _source: Source
}

export interface Source {
  symbol: string
  ticker: string
  code: string
  isin: string
  type: string
  wpkn: string
  name: string
  nameLong: string
  region: string
  country: string
  currency: string
  figi: string
  cik: string
  lei: string
  source: string
  operatingMIC: string
  codeExchange: string
  virtualExchange: string
  nameExchange: string
  isArtificialExchange: boolean
  segmentExchange: string
  segmentNameExchange: string
}


export interface ExchangeResponseTypes{
  meta:MetaTypes,
  data:ExchangeTypes[]
  ok:boolean,
  message:string
}