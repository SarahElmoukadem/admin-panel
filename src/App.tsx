import './styles/global.scss';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import SingleProduct from './pages/singleProduct/SingleProduct';




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
      }
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
