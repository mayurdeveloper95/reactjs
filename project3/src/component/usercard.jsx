import React from "react";

const Card=(props)=>{
    return(
        <React.Fragment>
          {
          props.data.map(data=>{
              return(
<div className="col-md-4" key={data.id}>
              <div className="ui card">
               <div className="image">
                <img src={data.previewURL} alt={data.tags}/>
               </div>
               <div className="content">
              <a className="header">User Name:{data.user}</a>
              <div className="description">Likes:{data.likes}</div>
              </div>
              </div>
              </div>
              )
          })
        }   
            </React.Fragment>
    )
}
export default Card;