import Stocks from "./Stocks";

describe('Stock Reducers unit test',()=>{
  it('should be return fetching true on pending event',()=>{
    let response = Stocks(undefined,{type:"FETCH_STOCKS_PENDING"});

    expect(response.fetching).toBeTruthy();
  })

  it('should be return correctly on fulfilled event',()=>{
    let response = Stocks(undefined,{
      type:"FETCH_STOCKS_FULFILLED",
      payload:{data:['stock1','stock2']}
    });

    expect(response.fetching).toBeFalsy();
    expect(response.data).toEqual(['stock1','stock2']);
  })

  it('should be return correctly on rejected event',()=>{
    let response = Stocks(undefined,{
      type:"FETCH_STOCKS_REJECTED",
      payload:{message:"Network error"}
    });

    expect(response.fetching).toBeFalsy();
    expect(response.error).toEqual("Network error");
  })
})