import  { createContext } from 'react';

export const AuthContext = createContext({user: null, setUser: null, categoryName: null,setCategoryName: null, email:null, setEmail:null});

const contextValue = {
  user:null,
  setUser: null,
  categoryName: null,
  setCategoryName: null,
  email:null,
  setEmail:null,
};
 