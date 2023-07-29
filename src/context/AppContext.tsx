import React, { createContext, useReducer, useState } from 'react';
import initialData  from '../data/data';
import { RecipeContextType } from '../@types/recipe';

const AppContext = createContext<RecipeContextType | null>(null);

const appReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_RECIPE_STATUS':
      const updatedRecipes = state.map((recipe) =>
        recipe.id === action.payload
          ? { ...recipe, isActive: !recipe.isActive }
          : recipe
      );
      return updatedRecipes;    
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(appReducer, initialData);
  
  return (
    <AppContext.Provider 
      value={{ recipes, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
