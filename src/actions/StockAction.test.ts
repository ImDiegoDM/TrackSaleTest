import { fetchStock } from "./StockAction";
import axios from "axios";
import env from "../env";

describe('Stock actions unit tests',()=>{
  it('Souhd make a correct call with axios',()=>{

    const spy = jest.spyOn(axios,"get").mockImplementation(()=>{return null});

    fetchStock('aapl');

    expect(spy).toBeCalledWith(env.url+'/stock/aapl/batch?types=quote,news,company,chart&range=1m&last=1');
  })
});