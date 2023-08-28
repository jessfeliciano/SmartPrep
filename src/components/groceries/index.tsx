import React, { useContext } from 'react';
import PageHeader from '../layout/pageHeader';
import { AppContext } from '../../context/AppContext';
import { Ingredient, Recipe } from '../../@types/recipe';

const getIngredients= (recipes: Recipe[]) => {
  const activeRecipes = recipes.filter((recipe) => recipe.isActive);
  const ingredients = activeRecipes.flatMap((recipe) => recipe.ingredients);

  ingredients.sort((a, b) => a.category.localeCompare(b.category));

  return ingredients;
}

const GroceriesPage = () => {
  const contextValue = useContext(AppContext);

  if (!contextValue || !contextValue.recipes) {
    return <div>Loading...</div>;
  }
  const { recipes } = contextValue;

  const ingredients: Ingredient[] = getIngredients(recipes);
  
  return (
    <main>
      <div className='bg-gray-100 py-8'>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <PageHeader pageTitle={"Meal Planning"} />

          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-800">
              <tr>
                <th scope="col" className="py-3.5 !pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-0">
                  Ingredient
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">
                  Category
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 sm:table-cell">
                  Amount
                </th>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-0">
                  <span className="sr-only">Purchased</span>
                  Purchased
                </th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-200 bg-white">
              {ingredients && ingredients.map((ingredient) => (
                <tr key={ingredient.id}>
                  <td className="w-full max-w-0 py-4 !pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    {ingredient.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {ingredient.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {ingredient.amount} {ingredient.unit}
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 sm:pr-6">
                      <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default GroceriesPage;