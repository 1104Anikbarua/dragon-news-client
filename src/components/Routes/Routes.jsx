import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import Category from "../Home/Category/Category";
import News from "../Layouts/News";
import NewsDetail from "../Home/NewsDetail/NewsDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'categories/:id',
                element: <Category></Category>
            }
        ]
    },
    {
        path: 'news',
        element: <News></News>,
        children: [
            {
                path: ':id',
                element: <NewsDetail></NewsDetail>
            }
        ]
    }
])


export default router;