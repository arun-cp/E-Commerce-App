import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './components/Login';

const router = createBrowserRouter([
  { path : '/Home', element: <Home /> },
  { path : '/E-Commerce-App', element: <Login /> }
])

function App() {

  return (
    <RouterProvider router={router} />
    );
}

export default App;
