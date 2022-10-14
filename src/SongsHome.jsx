import React from "react";
import moviesData from "./songsData";
import ShowSongs from "./ShowSongs";

const songshome = () => {
    return (
        <>
            <div className = 'songspace'>
             { moviesData.map((val,index) => {
                  return(<ShowSongs srclink = {val.srclink}
                              songname = {val.songname}
                              imglink = {val.imglink}
                   /> 
                  );
                })}
                
            </div>
        </>
    );
}
export default songshome;