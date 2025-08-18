import { addRecipe, editRecipe, type Recipe } from "@/features/Recipe"
import type { RootState } from "../app/store"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
export const RecipeForm = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const recipes = useSelector((state: RootState) => state.recipes.recipes)

    let recipe = id ? recipes.find(r => r.id == id) : undefined

    const [recipeEdit, setRecipeEdit] = useState<Recipe>(
        recipe ? recipe : {
            id: crypto.randomUUID(),
            description: "",
            title: "",
            ingredients: [],
            instructions: [],
        }

    )

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target
        setRecipeEdit((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    function handleArrChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const { value, name } = e.target
        setRecipeEdit((prev) => ({ ...prev, [name]: value.split(",") }))
    }
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (recipe) {
            dispatch(editRecipe(recipeEdit))
            navigate('/')
            return
        }
        dispatch(addRecipe(recipeEdit))
        navigate('/')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full mx-auto mt-10 bg-white shadow-md rounded-2xl p-8">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    {recipe ? "Edit Recipe" : "➕ Add Recipe"}
                </h1>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    {/* Title */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Title</label>
                        <input
                            value={recipeEdit.title}
                            placeholder="e.g. Spaghetti Carbonara"
                            onChange={handleChange}
                            name="title"
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Description</label>
                        <input
                            value={recipeEdit.description}
                            placeholder="Short description of the recipe"
                            onChange={handleChange}
                            name="description"
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Ingredients <span className="text-sm text-gray-500">(comma separated)</span>
                        </label>
                        <textarea
                            name="ingredients"
                            onChange={handleArrChange}
                            value={recipeEdit.ingredients.join(",")}
                            placeholder="e.g. spaghetti, pancetta, eggs, parmesan, black pepper"
                            className="w-full border rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Instructions */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Instructions <span className="text-sm text-gray-500">(comma separated)</span>
                        </label>
                        <textarea
                            name="instructions"
                            onChange={handleArrChange}
                            value={recipeEdit.instructions.join(",")}
                            placeholder="e.g. Cook pasta, Fry pancetta, Mix with eggs, Serve hot"
                            className="w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        {recipe ? "Update Recipe" : "Save Recipe"}
                    </button>
                </form>
            </div>
        </div>


    )
}
