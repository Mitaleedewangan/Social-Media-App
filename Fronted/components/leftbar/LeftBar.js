import React from 'react';
import "./leftBar.scss"
import {useContext} from 'react';
import { AuthContext } from '../../context/authContext';
// import Course from "../../assets/course.jpeg";
// import Events from "../../assets/Events.webp";
// import Friendship from "../../assets/friendship.webp";
// import Fund from "../../assets/fund.jpeg";
// import Group from "../../assets/Group.jpeg";
// import Gaming from "../../assets/gaming.webp";
// import Market from "../../assets/market.jpeg";
// import Memories from "../../assets/memories.webp";
// import Messages from "../../assets/messages.jpg";
// import Tutorials from "../../assets/tutorials.webp";
// import Videos from "../../assets/videos.webp";
// import Watch from "../../assets/watch.jpg";
// import Gallery from "../../assets/gallery.webp";
// import Person from "../../assets/person.jpeg";




const LeftBar =() =>{

 const {currentUser}=useContext(AuthContext);

    return(
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="assets/person.jpeg" alt="profile"/>
                        <span>{currentUser.name}</span>
                    </div>

                    <div className="item">
                        <img src="/assets/friendship.webp" alt="" />
                        <span>Friends</span>
                    </div>

                    <div className="item">
                        <img src="/assets/Group.jpeg" alt="" />
                        <span>Groups</span>
                    </div>

                    <div className="item">
                        <img src="/assets/market.jpeg" alt="" />
                        <span>Marketplace</span>
                    </div>

                    <div className="item">
                        <img src="/assets/watch.jpg" alt="" />
                        <span>Watch</span>
                    </div>

                    <div className="item">
                        <img src="/assets/memories.webp" alt="" />
                        <span>Memories</span>
                    </div>
                    

                    <hr />

                    <div className="menu">
                        <span>Your shortcuts</span>
                    </div>

                    <div className="item">
                        <img src="/assets/Events.webp" alt="" />
                        <span>Events</span>
                    </div>

                    <div className="item">
                        <img src="/assets/gaming.webp" alt="" />
                        <span>Gaming</span>
                    </div>

                    <div className="item">
                        <img src="/assets/gallery.webp" alt="" />
                        <span>Gallery</span>
                    </div>

                    <div className="item">
                        <img src="/assets/videos.webp" alt="" />
                        <span>Videos</span>
                    </div>

                        <div className="item">
                            <img src="/assets/messages.jpg" alt="" />
                            <span>Messages</span>
                        </div>
               
                </div>
                <hr/>

                    <div className="menu">
                        <span>Others</span>
                        <div className="item">
                            <img src="/assets/fund.jpeg" alt="" />
                            <span>Fund</span>
                        </div>
                        <div className="item">
                            <img src="/assets/course.jpeg" alt="" />
                            <span>Course</span>
                        </div>
                        <div className="item">
                            <img src="/assets/tutorials.webp" alt="" />
                            <span>Tutorials</span>
                        </div>
                    </div>


            </div>
        </div>

       
    )
    
}

export default LeftBar;