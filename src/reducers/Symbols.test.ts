import Symbols from "./Symbols";
import { ISymbols } from "../Interfaces/ISymbols";

describe('Symbols Reducers unit test',()=>{
  it('should return correctly on pending event',()=>{
    let response = Symbols(undefined,{type:"FETCH_SYMBOLS_PENDING"});

    expect(response.fetching).toBeTruthy();
  })

  it('should return correctly on fulfilled event',()=>{
    let response = Symbols(undefined,{
      type:"FETCH_SYMBOLS_FULFILLED",
      payload:{
        data:[
          {
            symbol:"AADR",
            name:"AdvisorShares Dorsey Wright ADR",
            exclude:"this key will be excluded"
          },
          {
            symbol:"AAL",
            name:"American Airlines Group Inc.",
            exclude:"this key will be excluded"
          }
        ]
      }
    });

    expect(response.fetching).toBeFalsy();
    expect(response.data).toEqual([
      {
        symbol:"AADR",
        name:"AdvisorShares Dorsey Wright ADR"
      },
      {
        symbol:"AAL",
        name:"American Airlines Group Inc."
      }
    ]);
  })

  it('should return correctly on rejected event',()=>{
    let response = Symbols(undefined,{
      type:"FETCH_SYMBOLS_REJECTED",
      payload:{message:"Network error"}
    });

    expect(response.fetching).toBeFalsy();
    expect(response.error).toEqual("Network error");
  });

  it('should return correctly on search event',()=>{

    const defaultValue:ISymbols={
      fetching:false,
      fetched:false,
      error:undefined,
      data:[{
        symbol:"AADR",
        name:"AdvisorShares Dorsey Wright ADR"
      },
      {
        symbol:"AAL",
        name:"American Airlines Group Inc."
      }],
      searchResult:[],
      searchValue:'Advi'
    };

    let response = Symbols(defaultValue,{
      type:"SEARCH"
    });

    expect(response.searchResult).toEqual([
      {
        symbol:"AADR",
        name:"AdvisorShares Dorsey Wright ADR"
      }
    ])
  });

  it('should return a maximum 10 values on search event',()=>{

    const defaultValue:ISymbols={
      fetching:false,
      fetched:false,
      error:undefined,
      data:[
        {
          symbol:"AADR",
          name:"AdvisorShares Dorsey Wright ADR"
        },
        {
          symbol:"AAL",
          name:"American Airlines Group Inc."
        },
        {
          symbol:"AADR",
          name:"AdvisorShares Dorsey Wright ADR"
        },
        {
          symbol:"AAL",
          name:"American Airlines Group Inc."
        },
        {
          symbol:"AADR",
          name:"AdvisorShares Dorsey Wright ADR"
        },
        {
          symbol:"AAL",
          name:"American Airlines Group Inc."
        },
        {
          symbol:"AADR",
          name:"AdvisorShares Dorsey Wright ADR"
        },
        {
          symbol:"AAL",
          name:"American Airlines Group Inc."
        },
        {
          symbol:"AADR",
          name:"AdvisorShares Dorsey Wright ADR"
        },
        {
          symbol:"AAL",
          name:"American Airlines Group Inc."
        },
        {
          symbol:"AADR",
          name:"AdvisorShares Dorsey Wright ADR"
        },
        {
          symbol:"AAL",
          name:"American Airlines Group Inc."
        },
        {
          symbol:"AADR",
          name:"AdvisorShares Dorsey Wright ADR"
        },
        {
          symbol:"AAL",
          name:"American Airlines Group Inc."
        },
        {
          symbol:"AADR",
          name:"AdvisorShares Dorsey Wright ADR"
        },
        {
          symbol:"AAL",
          name:"American Airlines Group Inc."
        }
      ],
      searchResult:[],
      searchValue:'A'
    };

    let response = Symbols(defaultValue,{
      type:"SEARCH"
    });

    expect(response.searchResult.length).toEqual(10)
  });

  it('should clear search value on clear search event',()=>{

    const defaultValue:ISymbols={
      fetching:false,
      fetched:false,
      error:undefined,
      data:[{
        symbol:"AADR",
        name:"AdvisorShares Dorsey Wright ADR"
      },
      {
        symbol:"AAL",
        name:"American Airlines Group Inc."
      }],
      searchResult:[],
      searchValue:'Advi'
    };

    let response = Symbols(defaultValue,{
      type:"CANCEL_SEARCH"
    });

    expect(response.searchValue).toEqual('');
  })
})