import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import RecipesContainer from './RecipesContainer';
import { Recipe } from '../../@types/recipe';
import PageHeader from '../layout/pageHeader';

export const getSelectedRecipes = (recipes: Recipe[]) => {
  return recipes.filter((recipe) => {
    return recipe.isActive === true
  })
}

const getUnselectedRecipes = (recipes:Recipe[]) => {
  return recipes.filter((recipe) => {
    return recipe.isActive === false
  })
}

const RecipesPage = () => {
  const contextValue = useContext(AppContext);

  if (!contextValue || !contextValue.recipes) {
    return <div>Loading...</div>;
  }
  const { recipes } = contextValue;

  const handleToggleRecipeStatus = (recipeId) => {
    contextValue.dispatch({ 
      type: 'TOGGLE_RECIPE_STATUS', 
      payload: recipeId 
    });
  };

  return (
    <main>
      <div className='bg-gray-100 py-8'>
          <div className="mx-auto max-w-7xl p-6 sm:px-6 lg:px-8">
            <PageHeader pageTitle={"Meal Planning"} />
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
              <div className='col-span-1 shadow p-4'>
                <RecipesContainer 
                  recipes={getSelectedRecipes(recipes)}
                  title="This Week's Meal Plan:"
                  containerType={true}
                  onStatusChange={handleToggleRecipeStatus}
                />
              </div>

              <div className='col-span-2 shadow p-4'>
                <RecipesContainer 
                  recipes={getUnselectedRecipes(recipes)}
                  title="Available recipes:"
                  containerType={false}
                  onStatusChange={handleToggleRecipeStatus}
                />
              </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default RecipesPage;
