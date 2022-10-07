
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Header from './component/Header/Header';
import Product from './Product/Product';
 

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div><Header></Header>Hello Rakib</div> },
    { path: 'home', element: <Home></Home> },
    { path: 'about', element: <About></About> },
    {path:'product', element:<Product></Product>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
