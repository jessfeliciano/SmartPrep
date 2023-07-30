import React from "react";
import { Recipe } from "../../@types/recipe";
import RecipesPanel from "./RecipePanel";

interface Props {
    recipes: Recipe[]
    title: string
    containerType: boolean,
    onStatusChange:(id: string, newStatus:boolean) => void
}

const RecipesContainer = ({recipes, title, containerType, onStatusChange}: Props) => {
    return (
        <div className="col-span-2">
            <div className="flex align-baseline justify-between py-2">
                <h1 className="font-bold text-xl py-2 col-span-2">{title}</h1>
        </div>   
   
        <RecipesPanel 
            recipes={recipes}
            isActive={containerType}
            onStatusChange={onStatusChange}
        />
        </div>
    )
}

export default RecipesContainer;
