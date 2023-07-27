import { Recipe, RecipeMutationResponse, RecipeType } from "./__generated__/resolvers-types.js";

const RecipesDB: Omit<Required<Recipe>, "__typename">[] = [
    {
        id: "112312",
        name:"Steakhouse Sirloin and Chive Aioli",
        type: RecipeType.Bake,
        isActive: true,
        ingredients:[
            {
                category:"Meats",
                name:"Sirloin Steaks",
                amount:12,
                unit:"oz."
            },
            {
                category:"Veggies",
                name:"Chive Sprigs",
                amount:6,
                unit:"sprigs"
            },
            {
                category:"Seasonings",
                name:"Garlic Pepper",
                amount:2,
                unit:"tsp."
            },
            {
                category:"Seasonings",
                name:"Garlic Aioli",
                amount:2,
                unit:"fl. oz."
            },
            {
                category:"Veggies",
                name:"Diced Red Potatoes",
                amount:12,
                unit:"oz."
            }
        ]
    }
];

export class RecipesDataSource {
  getRecipes(): Recipe[] {
    return RecipesDB;
  }

  async toggleActiveStatus(id: String): Promise<RecipeMutationResponse>{
    const recipeToUpdate = RecipesDB.find(recipe => recipe.id === id);

    if (!recipeToUpdate) {
      return {
        code: "400",
        success: false,
        message: `Invalid id: ${id}`,
        recipe: null,
      };    
    }

    // Toggle the isActive property
    recipeToUpdate.isActive = !recipeToUpdate.isActive;

    return {
        code: "200",
        success: true,
        message: "Status Updated",
        recipe: recipeToUpdate
    };
  }
}
  // We are using a static data set for this small example, but normally
  // this Mutation would *mutate* our underlying data using a database
  // or a REST API.
//   async toggle(book: Book): Promise<RecipeMutationResponse> {
//     if (book.title && book.author) {
//       BooksDB.push({ title: book.title, author: book.author });

//       return {
//         code: "200",
//         success: true,
//         message: "New book added!",
//         book,
//       };
//     } else {
//       return {
//         code: "400",
//         success: false,
//         message: "Invalid input",
//         book: null,
//       };
//     }
//   }
// }
