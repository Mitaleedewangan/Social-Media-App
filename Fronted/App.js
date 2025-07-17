import logo from './logo.svg';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import './App.css';
import{createBrowserRouter, RouterProvider,Route, Outlet, Navigate,} from "react-router-dom";
import Navbar from './component/navBar/Navbar';
import Leftbar from './component/leftBar/LeftBar';
import Rightbar from './component/rightBar/RightBar';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import "./style.scss";
import { AuthContext } from './context/authContext';



function App(){



  const {currentUser} = useContext(AuthContext);
  const {darkMode}=useContext(DarkModeContext);

  function handleClick(e){
    e.preventDefault();
  }

console.log("Current User:", currentUser);
  console.log(darkMode);

        const Layout =()=>{
          return(
            <div className={`theme-${darkMode?"dark":"light"}`}>
              <Navbar/>
              <div style ={{display:"flex"}}>
            <Leftbar/>
            <div style={{flex:6}} >
            <Outlet/>
            </div>
            <Rightbar/>
              </div>
              
            </div>
          )
        }
      

const ProtectedRoute =({children})=>{
  if(!currentUser){
    return<Navigate to="/login"/>
  }
  return children
}

const router = createBrowserRouter([
{
  path:"/",
  element:<ProtectedRoute><Layout/></ProtectedRoute>,
  children:[
    {
      path:"/",
        element:<Home/>
    },
    {
      path:"profile/:id",
      element:<Profile/>
    },
  ]
},
  {
    path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
        element:<Register/>
      },
      {
        path:"/profile",
          element:<Profile/>
        },
        {
          path:"/home",
            element:<Home/>
          },
          
    ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
