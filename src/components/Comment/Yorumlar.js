import React from "react";
import YorumFormu from "./YorumFormu";
import YorumListesi from "./YorumListesi";

const Yorumlar=(props)=>{
    return(
        <div>
            <YorumListesi comments={props.comments}/>
            <YorumFormu  handleCommentSubmit={props.handleCommentSubmit}/>
        </div>
    )
}
export default Yorumlar;