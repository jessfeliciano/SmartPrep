import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import RecipesContainer from './RecipesContainer';
import { Recipe } from '../../@types/recipe';

const getSelectedRecipes = (recipes: Recipe[]) => {
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

  // Check if the contextValue is null or undefined
  if (!contextValue || !contextValue.recipes) {
    // Return a fallback UI or loading indicator, or null if preferred
    return <div>Loading...</div>;
  }

  const { recipes } = contextValue;

  const handleToggleRecipeStatus = (recipeId) => {
    contextValue.dispatch({ type: 'TOGGLE_RECIPE_STATUS', payload: recipeId });
  };

  return (
    <main>
      <div className='bg-gray-100 py-8'>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Meal Planning</h1>
                </div>
            </header>
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
