import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Home/Category/Category";
import News from "../Layouts/News";
import NewsDetail from "../Home/NewsDetail/NewsDetail";
import Login from "../Shared/Auth/Login/Login";
import SignUp from "../Shared/Auth/SignUp/SignUp";
import Auth from "../Layouts/Auth/Auth";
import RequireAuth from "../RequireAuth/RequireAuth";
import TermsCondition from "../TermsConditions/TermsCondition";
import UpdateProfile from "../UpdateProfile/UpdateProfile";

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
            },
            {
                path: '/terms',
                element: <TermsCondition></TermsCondition>
            },
            {
                path: '/profile',
                element: <RequireAuth>
                    <UpdateProfile></UpdateProfile>
                </RequireAuth>
            }
        ]
    },

    {
        path: 'categories',
        element: <Main></Main>,
        loader: () => {
            return fetch(`https://batch-7-milestone-10-m-5-dragon-news-server.vercel.app/news`)
        },
        children: [
            {
                path: '/categories/:id',
                element: <Category></Category>,
                loader: (props) => {
                    const { params } = props;
                    const { id } = params;
                    // console.log(id)
                    return fetch(`https://batch-7-milestone-10-m-5-dragon-news-server.vercel.app/categories/${id}`)
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
                element: <RequireAuth>
                    <NewsDetail></NewsDetail>
                </RequireAuth>,
                loader: (props) => {
                    const { params } = props;
                    const { id } = params;
                    return fetch(`https://batch-7-milestone-10-m-5-dragon-news-server.vercel.app/news/${id}`)
                }
            }
        ]
    },

])


export default router;