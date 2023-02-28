import { createContext, useReducer } from "react";

const store = createContext("store");

const storeState = {
  user: { name: null, phone: null },
  delivered: [],
  orders: {},
};

const storeReducer = function (state, action) {
  return state;
};

export function Provider(props) {
  const [state, dispatch] = useReducer(storeReducer, storeState);

  return (
    <store.Provider value={{ state, dispatch }}>
      {props.children}
    </store.Provider>
  );
}

export default store;
