import React from 'react';
import "./rightBar.scss"
// import Person from "../../assets/person.jpeg";

const  RightBar =() =>{
    return(
        <div className='rightBar'>
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            <span>John Verma</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            <span>John Verma</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>

                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            <p>
                            <span>John Verma</span> Changed their cover picture
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            <p>
                            <span>Collins Fischer</span> Changed their cover picture
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            <p>
                            <span>Emery farley</span> Changed their cover picture
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            <p>
                            <span>Alice wells</span> Changed their cover picture
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            
                            <div className="online"/>
                            <span>Andrea</span>
                          
                        </div>

                        
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            
                            <div className="online"/>
                            <span>Lealand walker</span>
                          
                        </div>

                        
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            
                            <div className="online"/>
                            <span>Drew Willomson</span>
                          
                        </div>

                        
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            
                            <div className="online"/>
                            <span>John Verma</span>
                          
                        </div>

                        
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="/assets/download.jpeg" alt="Person" />
                            
                            <div className="online"/>
                            <span>John Verma</span>
                          
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default RightBar;