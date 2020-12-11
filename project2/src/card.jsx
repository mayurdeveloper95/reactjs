import React from "react";

const Card=({data})=>{
    return(
        <React.Fragment>
            <div className="col-md-4" key={data.id}>
                                <div className="card text-left">
                                  <img className="card-img-top" src={data.previewURL} alt={data.tags}/>
                                  <div className="card-body text-center">
                        <h4 className="card-title">User Name:{data.user}</h4>
                        <p className="card-text">Downloads:{data.downloads}</p>
                        <p className="card-text">Likes:{data.likes}</p>
                                  </div>
                                </div>
                                </div>
            </React.Fragment>
    )
}
export default Card;