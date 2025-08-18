import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
}

export interface RecipeState {
    recipes: Recipe[];
}

export const initialState: RecipeState = {
    recipes: [
        {
            id: "1",
            title: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
            ingredients: [
                "200g spaghetti",
                "100g pancetta",
                "2 large eggs",
                "50g grated Parmesan",
                "2 cloves garlic",
                "Salt and black pepper"
            ],
            instructions: [
                "Cook spaghetti until al dente.",
                "Fry pancetta and garlic until crisp.",
                "Whisk eggs with Parmesan and pepper.",
                "Combine pasta, pancetta, and egg mixture.",
                "Serve immediately with extra Parmesan."
            ]
        },
        {
            id: "2",
            title: "Chicken Biryani",
            description: "A fragrant rice dish layered with spiced chicken and caramelized onions.",
            ingredients: [
                "2 cups basmati rice",
                "500g chicken thighs",
                "2 onions, thinly sliced",
                "3 tomatoes, chopped",
                "1 cup yogurt",
                "Spices: turmeric, cumin, coriander, garam masala",
                "Fresh cilantro and mint"
            ],
            instructions: [
                "Marinate chicken in yogurt and spices.",
                "Cook onions until golden brown.",
                "Add tomatoes and cook until soft.",
                "Layer rice and chicken in a pot.",
                "Steam until rice is fully cooked.",
                "Garnish with cilantro and mint."
            ]
        },
        {
            id: "3",
            title: "Vegetable Stir-Fry",
            description: "A quick and healthy stir-fry with fresh vegetables and soy sauce.",
            ingredients: [
                "1 broccoli head",
                "1 red bell pepper",
                "1 carrot",
                "100g snow peas",
                "2 tbsp soy sauce",
                "1 tbsp sesame oil",
                "2 cloves garlic"
            ],
            instructions: [
                "Chop all vegetables evenly.",
                "Heat sesame oil in a wok.",
                "Add garlic and sauté briefly.",
                "Toss in vegetables and stir-fry for 5 minutes.",
                "Add soy sauce and cook another 2 minutes.",
                "Serve hot with rice or noodles."
            ]
        },
        {
            id: "4",
            title: "Beef Tacos",
            description: "Mexican-style beef tacos with fresh toppings.",
            ingredients: [
                "500g ground beef",
                "8 taco shells",
                "1 onion, chopped",
                "2 tomatoes, diced",
                "1 cup shredded lettuce",
                "1/2 cup cheddar cheese",
                "2 tbsp taco seasoning"
            ],
            instructions: [
                "Cook beef with onion until browned.",
                "Add taco seasoning and simmer.",
                "Warm taco shells.",
                "Assemble tacos with beef, lettuce, tomato, and cheese.",
                "Serve with salsa or sour cream."
            ]
        },
        {
            id: "5",
            title: "Pancakes",
            description: "Fluffy breakfast pancakes served with syrup or fruit.",
            ingredients: [
                "1 cup flour",
                "1 tbsp sugar",
                "1 tsp baking powder",
                "1 egg",
                "1 cup milk",
                "2 tbsp butter, melted",
                "Pinch of salt"
            ],
            instructions: [
                "Mix flour, sugar, baking powder, and salt.",
                "Whisk in milk, egg, and melted butter.",
                "Heat a skillet and pour batter in circles.",
                "Cook until bubbles form, then flip.",
                "Serve warm with syrup, fruit, or butter."
            ]
        }
    ],
};

export const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<Recipe>) => {
            state.recipes.push(action.payload)
        },
        editRecipe: (state, action: PayloadAction<Recipe>) => {
            const recipeIndex = state.recipes.findIndex((r) => r.id == action.payload.id)
            state.recipes[recipeIndex] = action.payload
        },
        deleteRecipe: (state, action: PayloadAction<string>) => {
            state.recipes = state.recipes.filter(r => r.id != action.payload)
        }
    }
});


export const { addRecipe,editRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;