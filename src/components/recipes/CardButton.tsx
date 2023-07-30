import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Recipe } from "../../@types/recipe";
import React from "react";

const CardButton = ({recipe, onStatusChange}: {
        recipe: Recipe, 
        onStatusChange:(id: string, newStatus:boolean
    ) => void}) => {
    return (
        <div
        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
        >
            <button 
                className="flex"
                onClick={() => {
                    recipe.isActive === true ? 
                    onStatusChange(recipe.id, false) :
                    onStatusChange(recipe.id, true);
                }}
            >
                {recipe.isActive === true ? <TrashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> 
                    : <PlusCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>}
                {recipe.isActive === true ? "Remove" : "Add"}
            </button>
        </div>
    )
}

export default CardButton;