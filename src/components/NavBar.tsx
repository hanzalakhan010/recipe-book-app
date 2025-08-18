import { NavLink } from "react-router"

export const NavBar = () => {
    return <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4">
        <div className="text-xl font-bold text-gray-800 tracking-wide">
            🍳 RecipeBook
        </div>
        <div className="flex gap-6">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `transition-colors duration-200 font-medium ${isActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-700 hover:text-green-600"
                    }`
                }
            >
                All Recipes
            </NavLink>
            <NavLink
                to="/add"
                className={({ isActive }) =>
                    `transition-colors duration-200 font-medium ${isActive ? "text-green-600 border-b-2 border-green-600" : "text-gray-700 hover:text-green-600"
                    }`
                }
            >
                Add Recipe
            </NavLink>
        </div>
    </nav>
}