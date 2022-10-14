import React from "react";
import Image from "./Image";
import Base from "./Base";

const ShowSongs = (props) => {

    return (
        <>
        <div className="card">
        <a href={props.srclink} >
          <Image imglink = {props.imglink}/>
          <Base songname = {props.songname}
          />
        </a>  
         </div> 
        </>

    );
}

export default ShowSongs;