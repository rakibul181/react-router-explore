
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Hello Rakib</div> },
    { path: '/home', element: <div>This is home</div> },
    { path: '/about', element: <div>Hello, This is about</div> },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
