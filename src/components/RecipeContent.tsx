import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { Recipe } from "@/features/Recipe";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "@/features/Recipe";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
    const dispatch = useDispatch()
    function handleDel() {
        dispatch(deleteRecipe(recipe.id))
    }
    return (

        <Card
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
                className="mr-10 ml-10 inline-block bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors text-center"
            >
                Edit
            </Link>
            <Button className="mr-10 ml-10" onClick={handleDel}>Delete</Button>
        </Card>
    )
}

export default RecipeCard;