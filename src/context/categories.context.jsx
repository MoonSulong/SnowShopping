import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import { SHOP_DATA } from "../shop-data.js";
// import PRDUCTS from "../shop-data.json";

export const CategoriesContext = createContext({
  categoriesMap:{},
});

export const CategoriesProvider = ({children}) => {
  
  // useEffect(() => {
  //   addCollectionAndDocuments('collections', SHOP_DATA);
  // }, []);
  
  const [categoriesMap, setCategoriesMap] = useState({});
  
  useEffect(() => {
    const getCategoryMap = async () =>  {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    }
    getCategoryMap();
  }, []);
  
  const value = {categoriesMap};
  return (
    <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
  )
}