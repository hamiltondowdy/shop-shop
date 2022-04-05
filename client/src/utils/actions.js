export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";   
import React, { useEffect } from 'react';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

const [state, dispatch] = useStoreContext();

const { categories } = state;

const { data: categoryData } = useQuery(QUERY_CATEGORIES);

useEffect(() => {
  // if categoryData exists or has changed from the response of useQuery, then run dispatch()
  if (categoryData) {
    // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
    dispatch({
      type: UPDATE_CATEGORIES,
      categories: categoryData.categories
    });
  }
}, 
[categoryData, dispatch]);

const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };