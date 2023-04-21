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
                path: '/categories/:id',
                element: <Category></Category>,
                loader: (props) => {
                    const { params } = props;
                    const { id } = params;
                    // console.log(id)
                    return fetch(`http://localhost:5000/categories/${id}`)
                }
            }
        ]
    },
    {
        path: 'news',
        element: <News></News>,
        children: [
            {
                path: '/news/:id',
                element: <NewsDetail></NewsDetail>,
                loader: (props) => {
                    const { params } = props;
                    const { id } = params;
                    return fetch(`http://localhost:5000/news/${id}`)
                }
            }
        ]
    }
])


export default router;