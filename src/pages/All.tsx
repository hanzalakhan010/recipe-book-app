import { useSelector } from "react-redux"
import type { RootState } from "../app/store"
import RecipeCard from "@/components/RecipeContent"

export const AllRecipe = () => {
    const allRecipes = useSelector((state: RootState) => state.recipes)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {allRecipes.recipes.map((recipe) => (
                <RecipeCard recipe={recipe}
                    key={recipe.id} />
            ))}
        </div>
    )
}
