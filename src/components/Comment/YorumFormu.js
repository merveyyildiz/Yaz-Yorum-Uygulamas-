import React,{useState}  from 'react'
const COMMENT_START={display_name:"",body:""};
const YorumFormu =(props)=>{
    const [comment,setComment]=useState(COMMENT_START);
    const handleChange=e=>{
        setComment({...comment,[e.target.name]:e.target.value});
    }
    return(
        <div>
            <h5 className="mt-3">Yorum Yaz</h5>
            <form onSubmit={(e)=>{props.handleCommentSubmit(e,comment);setComment(COMMENT_START);}}>
                <div className="form-floating">
                    <input className="form-control my-1" id="adiniz" name="display_name" placeholder="Adınız" onChange={e=>handleChange(e)} value={comment.display_name}/>
                    <label htmlFor="adiniz">Adınız</label>
               </div>
                <div className="form-floating">
                    <textarea className="form-control"placeholder="Leave a comment here" name="body" id="yorum" style={{height:"100px"}} onChange={e=>handleChange(e)} value={comment.body}> </textarea>
                    <label htmlFor="yorum">Yorumunuz</label>
                </div>
                
            <button className="btn btn-success  float-end mt-1">Gönder</button>
            </form>
        </div>
    )
}
export default YorumFormu;