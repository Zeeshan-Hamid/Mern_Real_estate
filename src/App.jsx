import './layout.scss'
import HomePage from './routes/HomePage/HomePage';
import ListPage from './routes/ListPage/ListPage';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: (<HomePage/>)
      },
      {
        path: '/list',
        element: (<ListPage/>)
      }
    ]
  )

  return (
   
    <RouterProvider router={router}/>
  );
}

export default App