import  { createContext } from 'react';

export const AuthContext = createContext({user: null, setUser: null, categoryName: null,setCategoryName: null, email:null, setEmail:null, upload:null, setUpload:null, token:null, setToken:null,imagesUpload:null, setImagesUpload:null});

// const contextValue = {
//   user:null,
//   setUser: null,
//   categoryName: null,
//   setCategoryName: null,
//   email:null,
//   setEmail:null,
//   token:null,
//   setToken:null,
//   imagesUpload:null,
//   setImagesUpload:null
// };
 