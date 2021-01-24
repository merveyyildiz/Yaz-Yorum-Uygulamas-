import React from "react";
const YorumListesi=(props)=>{
return (
    <div>
            <h5>Yorumlar</h5>
                {props.comments && props.comments.map(comment=>{
                    return(
                        <div key={comment.id} className="border-bottom p-2 m-1">
                            <h6>{comment.display_name}</h6>
                            <span>{comment.created_at}</span>
                            <p>{comment.body}</p>
                        </div>
                    )
                })}
    </div>
)
}
export default YorumListesi;