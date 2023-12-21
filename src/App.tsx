import './styles/global.scss';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import SingleProduct from './pages/products/singleProduct/SingleProduct';
import Users from './pages/users/Users';
import Comments from './pages/comments/Comments';
import Posts from './pages/posts/Posts';
import Quotes from './pages/quotes/Quotes';
import Todos from './pages/todos/Todos';
import Carts from './pages/carts/Carts';
import Profile from './pages/profile/Profile';
import SingleUser from './pages/users/singleUser/SingleUser';
import SinglePosts from './pages/posts/singlePosts/SinglePosts';
import SingleQuotes from './pages/quotes/singleQuotes/SingleQuotes';
import SingleComments from './pages/comments/singleComments/SingleComments';
import SingleCarts from './pages/carts/singlePosts/SingleCarts';
import SingleTodos from './pages/todos/singleTodos/SingleTodos';




const Layout = () => {
  return (
    <div  className='main'>
      <Navbar />

      <div className='container'>
        <div className='side-menu-container'>
          <Menu />
        </div>

        <div className='content-container'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <SingleUser />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/comments/:id",
        element: <SingleComments />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <SinglePosts />,
      },
      {
        path: "/quotes",
        element: <Quotes />,
      },
      {
        path: "/quotes/:id",
        element: <SingleQuotes />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/todos/:id",
        element: <SingleTodos />,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/carts/:id",
        element: <SingleCarts />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ]
  },
  // {
  //   path:'/login',
  //   element:<Login />
  // }

])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
