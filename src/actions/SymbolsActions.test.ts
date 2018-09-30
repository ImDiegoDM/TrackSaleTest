import { fetchSymbols } from "./SymbolsActions";
import axios from "axios";
import env from "../env";

describe('Stocks actions unit tests',()=>{
  it('Souhd make a call with axios with the correct endpoint',()=>{

    const spy = jest.spyOn(axios,"get").mockImplementation(()=>{return null});

    fetchSymbols();

    expect(spy).toBeCalledWith(env.url+'ref-data/symbols');
  })
});