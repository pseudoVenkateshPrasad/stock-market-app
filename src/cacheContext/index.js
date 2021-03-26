import React, {useContext, useReducer, useState, useEffect} from 'react';
import axios from 'axios';

const initialCache = {}

function cacheReducer(state, action) {
  const { companyData, type } = action;
  const instance = state[companyData.name] || { status: "none", data: null };

  if (instance.status === "none" && type === "SAVE") {
    return {
      ...state,
      [companyData.name]: {
        status: "loading",
        data: null
      }
    };
  }

  if (instance.status === "loading" && type === "DONE") {
    return {
      ...state,
      [companyData.name]: {
        status: "saved",
        data: action.payload
      }
    };
  }

  if (instance.status === "loading" && type === "ERROR") {
    return {
      ...state,
      [companyData.name]: {
        status: "error",
        data: action.payload
      }
    };
  }

  return state;
}

export function useCache() {
  const [state, dispatch] = useReducer(cacheReducer, initialCache);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    if (companyData === null) {
      return;
    }
    dispatch({ type: "SAVE", companyData });
    axios.post('http://localhost:8082/api/books', companyData)
      .then((resp) => dispatch({ type: "DONE", companyData, payload: resp }))
      .catch((err) => dispatch({ type: "ERROR", companyData, payload: err }));
    setCompanyData(null);
  }, [companyData]);

  return { cache: state, saveData: setCompanyData };
}

const CacheContext = React.createContext();

export function CacheProvider({ children }) {
  const cache = useCache()
  return (
    <CacheContext.Provider value={cache}>
      {children}
    </CacheContext.Provider>
  );
}

export function useCompany() {
  const cache = useContext(CacheContext);
  if (cache === undefined) {
    throw Error("You can use useCompany only under CacheProvider");
  }
  return cache;
}
