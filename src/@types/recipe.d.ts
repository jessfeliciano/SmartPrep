export interface Ingredient {
    category: string;
    name: string;
    amount: number;
    unit: string;
}

export interface Recipe {
    id: string;
    name: string;
    type: string;
    isActive: boolean;
    ingredients: Ingredient[]
}

export type RecipeContextType = {
    recipes: Recipe[];
    dispatch: React.Dispatch<any>;
}