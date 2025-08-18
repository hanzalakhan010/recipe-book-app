import Layout from "./components/Layout";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { AllRecipe } from "./pages/All";
import { RecipeForm } from "./pages/RecipeForm";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<AllRecipe />} />
        <Route path='add' element={<RecipeForm />} />
        <Route path="edit/:id" element={<RecipeForm />} />
    </Route>))