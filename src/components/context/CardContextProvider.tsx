import React, { createContext, useReducer } from "react";

const obj: any = {};
export const cardContext = createContext(obj);

export interface ICard {
  city: string;
  category: string;
  startDate: number;
  month: string;
  year: number;
  endDate: number;
  image: string;
  quantity: number;
  time: number;
  information: string;
  length: number;
  hotelStars: number;
  price: number;
}

export interface ICardState {
  umraTour: null | ICard[];
  category: null | ICard[];
}

const INIT_STATE: ICardState = {
  umraTour: null,
  category: null,
};
const reducer = (
  state = INIT_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "GET_CARD":
      return { ...state, umraTour: action.payload };
    case "GET_CATEGORIES":
      return { ...state };
    default:
      return state;
  }
};

const CardContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  let value = {};
  return <cardContext.Provider value={value}>{children}</cardContext.Provider>;
};

export default CardContextProvider;
