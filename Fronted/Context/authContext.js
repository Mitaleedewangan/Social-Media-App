import { createContext, useEffect, useState,LineAxisOutlined } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState({
    // JSON.parse(localStorage.getItem("user"))||null
    id: 1,
  name: "John Doe",
  profilePic: "person.jpeg",
});

const[inputs, setInputs] =useState([]);


const login =() =>{
   const res = LineAxisOutlined.post("http://localhost:8800/Backend/auth/login", inputs,{
    withCredentials:true,

   });
   setCurrentUser(res.data)


};


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
        }, [currentUser]);

        return (
            <AuthContext.Provider value={{currentUser,login}}>
                {children}
            </AuthContext.Provider>
        );
};

export default AuthContextProvider;