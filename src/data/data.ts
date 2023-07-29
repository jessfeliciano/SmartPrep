import { Recipe } from "../@types/recipe";

const initialData: Recipe[] = [
    {
        id: "643b298e0ee565a48bc1d08d",
        name: "Dynamite Shrimp Rice Bowl",
        type: "Bake",
        isActive: true,
        ingredients: [
            {
                category: "Sauces",
                name: "Boom Boom Sauce",
                amount: 2,
                unit: "fl. oz."
            },
            {
                category: "Grains",
                name: "Rice",
                amount: 2.88,
                unit: "oz."
            },
            {
                category: "Seasonings",
                name: "Cilantro Lime Pepper Salt",
                amount: 0.5,
                unit: "tsp."
            },
            {
                category: "Veggies",
                name: "Edamame",
                amount: 3,
                unit: "oz."
            },
            {
                category: "Sauces",
                name: "Soy Sauce",
                amount: 0.203,
                unit: "fl. oz."
            },
            {
                category: "Sauces",
                name: "Seasoned Rice Vinegar",
                amount: 0.5,
                unit: "fl. oz."
            },
            {
                category: "Meats",
                name: "Shrimp",
                amount: 8,
                unit: "oz."
            }
        ],
    },
    {
        id: "643b298e0ee565a48bc1d089",
        name: "Everything Bagel Chicken",
        type: "Stovetop",
        isActive: false,
        ingredients: [
            {
                category: "Veggies",
                name: "Broccoli Florets",
                amount: 12,
                unit: "oz."
            },
            {
                category: "Seasonings",
                name: "Everything Bagel Seasoning",
                amount: 1,
                unit: "tsp."
            },
            {
                category: "Seasonings",
                name: "Garlic Pepper",
                amount: 0.5,
                unit: "tsp."
            },
            {
                category: "Veggies",
                name: "Green Onions",
                amount: 2,
                unit: "onions"
            },
            {
                category: "Toppings",
                name: "Crispy Fried Onions",
                amount: 0.5,
                unit: "oz."
            },
            {
                category: "Meats",
                name: "Any Protein",
                amount: 12,
                unit: "oz."
            }
        ],
    },
    {
        id: "643b298e0ee565a48bc1d086",
        name: "Pork Medallions with Chimichurri Butter",
        type: "Bake",
        isActive: false,
        ingredients: [
            {
                category: "Meats",
                name: "Pork Tenderloin Medallions",
                amount: 12,
                unit: "oz."
            },
            {
                category: "Seasonings",
                name: "Chimicurri",
                amount: 1,
                unit: "tsp."
            },
            {
                category: "Sauces",
                name: "Creme Fraiche",
                amount: 1,
                unit: "oz."
            },
            {
                category: "Sauces",
                name: "Balsamic Glaze",
                amount: 0.75,
                unit: "fl. oz."
            },
            {
                category: "Veggies",
                name: "Green Onions",
                amount: 2,
                unit: "onions"
            },
            {
                category: "Veggies",
                name: "Fingerling Potatoes",
                amount: 10,
                unit: "oz."
            },
            {
                category: "Oils & Fats",
                name: "Butter",
                amount: 0.6,
                unit: "oz."
            },
            {
                category: "Seasonings",
                name: "Pepper and Onion Mix",
                amount: 4,
                unit: "oz."
            },
            {
                category: "Seasonings",
                name: "Garlic Pepper",
                amount: 1,
                unit: "tsp."
            }
        ],
    },
    {
        id: "643b298e0ee565a48bc1d088",
        name: "Salsa Verde Steak Strips",
        type: "Stovetop",
        isActive: true,
        ingredients: [
            {
                category: "Sauces",
                name: "Fire Roasted Salsa Verde",
                amount: 4,
                unit: "oz."
            },
            {
                category: "Sauces",
                name: "Beef Flavor Demi-Glace Concentrate",
                amount: 4,
                unit: "tsp."
            },
            {
                category: "Veggies",
                name: "Poblano Pepper",
                amount: 1,
                unit: "Pepper"
            },
            {
                category: "Seasonings",
                name: "Fajita Seasoning",
                amount: 1,
                unit: "tsp."
            },
            {
                category: "Grains",
                name: "Rice",
                amount: 8,
                unit: "oz."
            },
            {
                category: "Meats",
                name: "Steak Strips",
                amount: 10,
                unit: "oz."
            }
        ],
    },
    {
        id: "643b298e0ee565a48bc1d087",
        name: "Sirloin and Sherry Sauce",
        type: "Stovetop",
        isActive: false,
        ingredients: [
            {
                category: "Veggies",
                name: "Russet Potatoes",
                amount: 2,
                unit: "potatoes"
            },
            {
                category: "Veggies",
                name: "Chive Sprigs",
                amount: 6,
                unit: "sprigs"
            },
            {
                category: "Sauces",
                name: "Chicken Demi-Glaze Concentrate",
                amount: 2,
                unit: "tsp."
            },
            {
                category: "Seasonings",
                name: "Garlic Pepper",
                amount: 1,
                unit: "tsp."
            },
            {
                category: "Toppings",
                name: "Carmelized Onion Jam",
                amount: 0.5,
                unit: "oz."
            },
            {
                category: "Sauces",
                name: "Sherry Wine",
                amount: 2,
                unit: "fl. oz."
            },
            {
                category: "Oils & Fats",
                name: "Butter",
                amount: 0.6,
                unit: "oz."
            },
            {
                category: "Meats",
                name: "Sirloin Steaks",
                amount: 12,
                unit: "oz."
            }
        ],
    },
    {
        id: "643b298e0ee565a48bc1d08b",
        name: "Steakhouse Sirloin and Chive Aioli",
        type: "Bake",
        isActive: false,
        ingredients: [
            {
                category: "Meats",
                name: "Sirloin Steaks",
                amount: 12,
                unit: "oz."
            },
            {
                category: "Veggies",
                name: "Chive Sprigs",
                amount: 6,
                unit: "sprigs"
            },
            {
                category: "Seasonings",
                name: "Garlic Pepper",
                amount: 2,
                unit: "tsp."
            },
            {
                category: "Seasonings",
                name: "Garlic Aioli",
                amount: 2,
                unit: "fl. oz."
            },
            {
                category: "Veggies",
                name: "Diced Red Potatoes",
                amount: 12,
                unit: "oz."
            }
        ],
    },
    {
        id: "643b298e0ee565a48bc1d08c",
        name: "Teriyaki Salmon Rice Bowl",
        type: "Stovetop",
        isActive: true,
        ingredients: [
            {
                category: "Grains",
                name: "Rice",
                amount: 3.75,
                unit: "oz."
            },
            {
                category: "Seasonings",
                name: "Garlic Salt",
                amount: 0.5,
                unit: "tsp."
            },
            {
                category: "Seasonings",
                name: "Asian Garlic, Ginger and Chile Seasoning",
                amount: 1,
                unit: "tsp."
            },
            {
                category: "Toppings",
                name: "Sesame Seeds",
                amount: 1,
                unit: "tsp."
            },
            {
                category: "Veggies",
                name: "Green Onions",
                amount: 2,
                unit: "onions"
            },
            {
                category: "Sauces",
                name: "Teriyaki Glaze",
                amount: 2,
                unit: "fl. oz."
            },
            {
                category: "Veggies",
                name: "Edamame",
                amount: 3,
                unit: "oz."
            },
            {
                category: "Meats",
                name: "Any Protein",
                amount: 12,
                unit: "oz."
            }
        ],
    },
    {
        id: "643b298e0ee565a48bc1d08a",
        name: "Zucchini and Jalapeño Crusted Chicken",
        type: "Bake",
        isActive: true,
        ingredients: [
            {
                category: "Veggies",
                name: "Sliced Zucchini",
                amount: 8,
                unit: "oz."
            },
            {
                category: "Toppings",
                name: "Crispy Jalapeños",
                amount: 0.5,
                unit: "oz."
            },
            {
                category: "Oils & Fats",
                name: "Butter",
                amount: 1,
                unit: "oz."
            },
            {
                category: "Seasonings",
                name: "Cajun Seasoning",
                amount: 1,
                unit: "tsp."
            },
            {
                category: "Meats",
                name: "Chicken Thighs",
                amount: 12,
                unit: "oz."
            }
        ],
    }
]

export default initialData;