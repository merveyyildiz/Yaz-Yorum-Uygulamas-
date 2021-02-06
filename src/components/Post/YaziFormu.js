import {api} from "../../api";
import React,{useState,useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
const YaziFormu=(props)=>{
    const [post,setPost]=useState( {title: "",content: ""})
    const [hata,setHata]=useState()
    const {id}=useParams();
    const history=useHistory();
    useEffect(()=>{
        if(props.post?.title && props.post?.content){/*eğer post yoksa devamına bakma */
            setPost(props.post)
        }
    },[props.post])

    const onHandleChange=e=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
        if(props.post?.title){//edit
            api().put(`/posts/${id}`,post)
            .then(res=>{history.push(`/post/${id}`)})
              
        }else{//create
            api().post(`/posts`,post)
            .then(res=>{ goHome()})
            .catch(err=>{setHata(err.response.data.errorMessage)})
        }
    }
    const goHome=()=>{
        history.push("/");
    }
    return(
        <div className="form-group ">
            {hata &&<div className="alert alert-danger">{hata}</div>}
            <div className="form-floating mt-1">
                <input className="form-control " id="title" name="title" value={post.title} onChange={e=>onHandleChange(e)} placeholder="Yazı Başlığı"/>
                <label htmlFor="title">Başlık</label>
            </div>
            <div className="form-floating mt-3">
                <textarea className="form-control " value={post} style={{height:"100%"}} id="content" name="content" placeholder="içerik" onChange={e=>onHandleChange(e)} value={post.content} />
                <label htmlFor="content">İçerik</label>
            </div>
            <div className="float-end mt-2">
                <button className="btn btn-secondary " style={{marginRight:"10px"}} onClick={goHome}>İptal</button> 
                <button className="btn btn-success" onClick={e=>onFormSubmit(e)} >Gönder</button>
            </div>
        </div>
    )
}
export default YaziFormu;