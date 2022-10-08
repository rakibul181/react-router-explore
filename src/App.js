
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Product from './Product/Product';
import Main from './Layouts/Main';
import UserDatails from './component/UserDatiels/UserDatails';
import Posts from './component/Posts/Posts';
import Post from './component/Post/Post';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home',
        loader:async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        element: <Home></Home> },
        { path: 'about',
        loader:async()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element: <About></About> },
        {
          path:'/user/:userid',
          loader:async({params})=>{
              // console.log(params)
              return fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
          },
          element:<UserDatails></UserDatails>

        },
        {
          path:'/posts',
          loader:async()=>{
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element:<Posts></Posts>
        },
        {
          path:'/post/:postid',
          loader:async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
          },
          element:<Post></Post>
        }
      ]
    },

    { path: 'product',
    element: <Product></Product> },
    {path:'*', element:<div>This Route is not found</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
