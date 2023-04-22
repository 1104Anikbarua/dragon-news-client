import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import Category from "../Home/Category/Category";
import News from "../Layouts/News";
import NewsDetail from "../Home/NewsDetail/NewsDetail";
import Login from "../Shared/Auth/Login/Login";
import SignUp from "../Shared/Auth/SignUp/SignUp";
import Auth from "../Layouts/Auth/Auth";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth></Auth>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/categories/0'}></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            }
        ]
    },

    {
        path: 'categories',
        element: <Main></Main>,
        loader: () => {
            return fetch(`http://localhost:5000/news`)
        },
        children: [
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
    },

])


export default router;