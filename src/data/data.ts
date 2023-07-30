import { Recipe } from "../@types/recipe";

const initialData: Recipe[] = [
    {
        id: "643b298e0ee565a48bc1d08d",
        name: "Dynamite Shrimp Rice Bowl",
        type: "Bake",
        isActive: true,
        ingredients: [
            {
                id: "1a8718fb-a3af-4412-8a23-b207c689ca99",
                category: "Sauces",
                name: "Boom Boom Sauce",
                amount: 2,
                unit: "fl. oz."
            },
            {
                id: "6eccbbfe-4b84-42b4-8f46-feae9453bccf",
                category: "Grains",
                name: "Rice",
                amount: 2.88,
                unit: "oz."
            },
            {
                id: "bc66e595-83f3-45cb-8f6c-949b6ddd8c57",
                category: "Seasonings",
                name: "Cilantro Lime Pepper Salt",
                amount: 0.5,
                unit: "tsp."
            },
            {
                id: "34e90f6a-ef2d-4d78-8b8f-2861a5b341b6",
                category: "Veggies",
                name: "Edamame",
                amount: 3,
                unit: "oz."
            },
            {
                id: "16d9f376-7aa0-4d06-b317-02d386029ed1",
                category: "Sauces",
                name: "Soy Sauce",
                amount: 0.203,
                unit: "fl. oz."
            },
            {
                id: "6af457f1-d1fb-4949-937a-1466a07d2335",
                category: "Sauces",
                name: "Seasoned Rice Vinegar",
                amount: 0.5,
                unit: "fl. oz."
            },
            {
                id: "27d02d79-2016-428b-9394-6d7be5fc18b4",
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
                id: "aeaa64a0-3d93-487b-aa3e-d653fc2e9c23",
                category: "Veggies",
                name: "Broccoli Florets",
                amount: 12,
                unit: "oz."
            },
            {
                id: "a9fb597d-4ad2-4b0b-b70d-4eda3429d719",
                category: "Seasonings",
                name: "Everything Bagel Seasoning",
                amount: 1,
                unit: "tsp."
            },
            {
                id: "d61a637f-b313-4ab2-9000-1ada520d8c68",
                category: "Seasonings",
                name: "Garlic Pepper",
                amount: 0.5,
                unit: "tsp."
            },
            {
                id: "c8c126f6-dd3e-44d6-b7e7-44a4731c5392",
                category: "Veggies",
                name: "Green Onions",
                amount: 2,
                unit: "onions"
            },
            {
                id: "28a92130-44f6-48ca-b535-0c5c5c2ddbde",
                category: "Toppings",
                name: "Crispy Fried Onions",
                amount: 0.5,
                unit: "oz."
            },
            {
                id: "8eef2a25-5d2f-4205-8d16-599de4333793",
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
                id: "cdeaa523-9622-48ae-9991-d445d0ab4fbd",
                category: "Meats",
                name: "Pork Tenderloin Medallions",
                amount: 12,
                unit: "oz."
            },
            {
                id: "3d8ccc57-b7c2-452c-81f2-4f72d4023547",
                category: "Seasonings",
                name: "Chimicurri",
                amount: 1,
                unit: "tsp."
            },
            {
                id: "4102de8e-5bd7-46ad-84d6-35a6e8de2d55",
                category: "Sauces",
                name: "Creme Fraiche",
                amount: 1,
                unit: "oz."
            },
            {
                id: "a2118071-e8e1-4257-aae7-39e698d65412",
                category: "Sauces",
                name: "Balsamic Glaze",
                amount: 0.75,
                unit: "fl. oz."
            },
            {
                id: "ca90ef58-c707-4055-a74b-f617e56c6a91",
                category: "Veggies",
                name: "Green Onions",
                amount: 2,
                unit: "onions"
            },
            {
                id: "ff039a23-b760-4931-9e40-9dd8312a773a",
                category: "Veggies",
                name: "Fingerling Potatoes",
                amount: 10,
                unit: "oz."
            },
            {
                id: "df8ffca1-e36b-47e3-9ffb-b5b822e7bd71",
                category: "Oils & Fats",
                name: "Butter",
                amount: 0.6,
                unit: "oz."
            },
            {
                id: "f2a8d785-40cb-4eff-a493-45ad42a99024",
                category: "Seasonings",
                name: "Pepper and Onion Mix",
                amount: 4,
                unit: "oz."
            },
            {
                id: "8bbd10c1-1891-4bb9-b4af-4773147d032e",
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
                id: "5e21f17c-67b9-44d3-af08-5933d640a398",
                category: "Sauces",
                name: "Fire Roasted Salsa Verde",
                amount: 4,
                unit: "oz."
            },
            {
                id: "39397ca7-d533-434c-86ad-819071021d3b",
                category: "Sauces",
                name: "Beef Flavor Demi-Glace Concentrate",
                amount: 4,
                unit: "tsp."
            },
            {
                id: "d9fe8a2b-54a1-4e42-986c-6819cd170745",
                category: "Veggies",
                name: "Poblano Pepper",
                amount: 1,
                unit: "Pepper"
            },
            {
                id: "0b1bfec5-cc02-4dc1-9349-50bf60a69e86",
                category: "Seasonings",
                name: "Fajita Seasoning",
                amount: 1,
                unit: "tsp."
            },
            {
                id: "98b31c3c-1d11-4eea-bc61-8f373a77ddea",
                category: "Grains",
                name: "Rice",
                amount: 8,
                unit: "oz."
            },
            {
                id: "a1196a05-b388-4d46-b269-093b6c966347",
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
                id: "2d5c134b-f01b-44d7-80d5-4f301385aeb5",
                category: "Veggies",
                name: "Russet Potatoes",
                amount: 2,
                unit: "potatoes"
            },
            {
                id: "222a923f-b1c9-4ed8-b707-c4f7b27ad7c3",
                category: "Veggies",
                name: "Chive Sprigs",
                amount: 6,
                unit: "sprigs"
            },
            {
                id: "85e910fa-bea5-4a3b-82b0-04036dfcc86a",
                category: "Sauces",
                name: "Chicken Demi-Glaze Concentrate",
                amount: 2,
                unit: "tsp."
            },
            {
                id: "db906447-b8d7-4cbb-85ff-f8d0c01e9b8c",
                category: "Seasonings",
                name: "Garlic Pepper",
                amount: 1,
                unit: "tsp."
            },
            {
                id: "008067f0-4c46-49cd-b6a3-af72467508cd",
                category: "Toppings",
                name: "Carmelized Onion Jam",
                amount: 0.5,
                unit: "oz."
            },
            {
                id: "3107c3bc-7152-429a-aa20-8368733335bb",
                category: "Sauces",
                name: "Sherry Wine",
                amount: 2,
                unit: "fl. oz."
            },
            {
                id: "ce42e5ab-ad5b-4f04-a5b4-eee117a23306",
                category: "Oils & Fats",
                name: "Butter",
                amount: 0.6,
                unit: "oz."
            },
            {
                id: "1601c4c8-9ccf-4458-b1fa-695b5652ec81",
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
                id: "05972fa5-1ff7-4090-ac39-dbb315487ad8",
                category: "Meats",
                name: "Sirloin Steaks",
                amount: 12,
                unit: "oz."
            },
            {
                id: "2ed95eaf-3274-4e23-b7d6-4c25e23542c3",
                category: "Veggies",
                name: "Chive Sprigs",
                amount: 6,
                unit: "sprigs"
            },
            {
                id: "6e634e64-6ae9-4071-894c-b85dc0eaf5c4",
                category: "Seasonings",
                name: "Garlic Pepper",
                amount: 2,
                unit: "tsp."
            },
            {
                id: "368bb77e-c46a-445d-9dda-4036a353c8e1",
                category: "Seasonings",
                name: "Garlic Aioli",
                amount: 2,
                unit: "fl. oz."
            },
            {
                id: "74d8d44b-7e27-4e6f-8b04-6b5f54a1149b",
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
                id: "03d97aee-f01c-4a3f-b619-3de7be11c81f",
                category: "Grains",
                name: "Rice",
                amount: 3.75,
                unit: "oz."
            },
            {
                id: "05989495-b077-4537-b19b-e034e1efc37a",
                category: "Seasonings",
                name: "Garlic Salt",
                amount: 0.5,
                unit: "tsp."
            },
            {
                id: "d54487af-8549-425c-99f2-e8347afb0941",
                category: "Seasonings",
                name: "Asian Garlic, Ginger and Chile Seasoning",
                amount: 1,
                unit: "tsp."
            },
            {
                id: "c282669e-7033-4ff5-afab-867844e69bbf",
                category: "Toppings",
                name: "Sesame Seeds",
                amount: 1,
                unit: "tsp."
            },
            {
                id: "62e9f055-9eb2-49a2-bfb9-94760640c4c6",
                category: "Veggies",
                name: "Green Onions",
                amount: 2,
                unit: "onions"
            },
            {
                id: "d294c521-874a-4e53-9cdc-83b65d497845",
                category: "Sauces",
                name: "Teriyaki Glaze",
                amount: 2,
                unit: "fl. oz."
            },
            {
                id: "85aa7f36-997c-4bca-83e5-dbe1a0cfe70c",
                category: "Veggies",
                name: "Edamame",
                amount: 3,
                unit: "oz."
            },
            {
                id: "9a8f430f-45cf-4331-a8b1-e1cec81ae7c5",
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
                id: "8df166ef-8931-408c-990e-2a4bae57c599",
                category: "Veggies",
                name: "Sliced Zucchini",
                amount: 8,
                unit: "oz."
            },
            {
                id: "ee6e678f-356f-40c4-a077-d1a9232f4c9e",
                category: "Toppings",
                name: "Crispy Jalapeños",
                amount: 0.5,
                unit: "oz."
            },
            {
                id: "15e234fd-1236-4a07-a2bc-82993e375cd8",
                category: "Oils & Fats",
                name: "Butter",
                amount: 1,
                unit: "oz."
            },
            {
                id: "1f0bbf61-19f6-4623-81cf-aee0b2ccf654",
                category: "Seasonings",
                name: "Cajun Seasoning",
                amount: 1,
                unit: "tsp."
            },
            {
                id: "06e355fc-fcb5-4ed9-b491-b2973368450d",
                category: "Meats",
                name: "Chicken Thighs",
                amount: 12,
                unit: "oz."
            }
        ],
    }
]

export default initialData;