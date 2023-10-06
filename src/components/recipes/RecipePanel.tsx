import React from 'react';
import { Recipe } from '../../@types/recipe';
import CardButton from './CardButton';

interface Props {
    recipes: Recipe[],
    isActive: boolean,
    onStatusChange:(id: string, newStatus:boolean) => void
}

const RecipesPanel = ({recipes, isActive, onStatusChange}: Props) => {
    const gridClass = () => {
        if(isActive === true){
            return "grid grid-cols-1 gap-6"
        }
        return "grid grid-cols-2 gap-6";
    }

    return (
        <ul role="list" className={gridClass()}>
            {recipes.sort().map((recipe: Recipe) => (
                <li key={recipe.name} className="col-span-1 flex flex-col justify-end divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full h-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                                {recipe.type === "Bake" && <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    {recipe.type}
                                </span>}
                                {recipe.type === "Stovetop" && <span className="inline-block flex-shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                                    {recipe.type}
                                </span>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <CardButton 
                                    recipe={recipe}
                                    onStatusChange={onStatusChange}
                                />
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default RecipesPanel;