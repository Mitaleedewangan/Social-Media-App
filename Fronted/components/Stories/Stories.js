import "./stories.scss";
import {useContext} from 'react';
import { AuthContext } from '../../context/authContext';
import { Navigate } from "react-router-dom";
// import personImg from '../../assets/person.jpeg';


const Stories =()=>{

    const {currentUser} = useContext(AuthContext);

const stories =[
        {id:1,name:"John Verma",image:"myImage.jpg",},
        {id:2,name:"John Verma",image:"memories.webp",},
        {id:3,name:"John Verma",image:"friendship.webp",},
        {id:4,name:"John Verma",image:"Events.webp",},
     
    ];

      if (!currentUser) {
        return <Navigate to ="/login"/>;
   }

    return(
        <div className='stories'>
             {/* Current user story */}
            <div className="story" >
                <img src={`/assets/${currentUser.profilePic}`} alt= {currentUser.name} />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>

                 {/* Other stories */}
            {stories.map((story)=>(
                <div className="story" key={story.id}>
                    <img src={`/assets/${story.image}`} alt={story.name} />
                    <span>{story.name}</span>
                </div>
        ))}
        </div>
         
       
    )
}   

export default Stories;