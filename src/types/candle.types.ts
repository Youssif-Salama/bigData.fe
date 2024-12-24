import { MetaTypes } from "./global.types"

export interface CandleTypes {
  _index: string
  _type: string
  _id: string
  _score: number
  _source: Source
}

export interface Source {
  symbol: string
  dateTime: string
  startPrice: number
  highestPrice: number
  lowestPrice: number
  endPrice: number
  volume: number
  source: string
  candleType: string
  currency: string
}

export interface CandleResponseTypes{
  meta:MetaTypes,
  data:CandleTypes[]
  ok:boolean,
  message:string
}
