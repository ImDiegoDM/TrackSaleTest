import { fetchStocks } from "./StocksActions";
import axios from "axios";
import env from "../env";

describe('Stocks actions unit tests',()=>{
  it('Souhd make a call with axios',()=>{

    const spy = jest.spyOn(axios,"get").mockImplementation(()=>{return null});

    fetchStocks();

    expect(spy).toBeCalledWith(env.url+'tops/last');
  })
});