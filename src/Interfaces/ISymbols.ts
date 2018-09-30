import { IServerData } from "./IServerData";
export interface ISymbols extends IServerData{
  searchResult:any[],
  searchValue:string
}