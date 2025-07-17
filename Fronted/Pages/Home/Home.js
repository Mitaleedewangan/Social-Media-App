import "./Home.scss";
import React from 'react';
import Stories from "../../component/stories/Stories";
import Posts from "../../component/posts/Posts";

const Home =()=>{

    function handleClick(e){
       e.preventDefault();
    }

    return(
        <div className='home'>
          <Stories/>
          <Posts/>

          </div>
    )
}

export default Home;