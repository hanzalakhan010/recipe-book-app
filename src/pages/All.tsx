import { useSelector } from "react-redux"
import type { RootState } from "../app/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router"

export const AllRecipe = () => {
    const allRecipes = useSelector((state: RootState) => state.recipes)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {allRecipes.recipes.map((recipe) => (
                <Card
                    key={recipe.id}
                    className="shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200"
                >
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">
                            {recipe.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 text-sm">{recipe.description}</p>
                    </CardContent>
                    <Link
                        to={`/edit/${recipe.id}`}
                        className="m-4 inline-block bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors text-center"
                    >
                        Edit
                    </Link>


                </Card>
            ))}
        </div>
    )
}
