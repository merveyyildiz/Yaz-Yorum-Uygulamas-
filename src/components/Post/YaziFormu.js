import {api} from "../../api";
import React,{useState} from "react";
import {withRouter} from "react-router-dom";
const YaziFormu=(props)=>{
    const [text,setText]=useState({title:"",content:""})
    const [hata,setHata]=useState()
    const onHandleChange=e=>{
        setText({...text,[e.target.name]:e.target.value})
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
        api().post(`/posts`,text)
        .then(res=>{
            goHome();
        })
        .catch(err=>{setHata(err.response.data.errorMessage)})
    }
    const goHome=()=>{
        props.history.push("./");
    }
    return(
        <div className="form-group ">
            <h4 className="text-center my-3">Yazı Ekleme Formu</h4>
            {hata &&<div className="alert alert-danger">{hata}</div>}
            <div className="form-floating mt-1">
                <input className="form-control " id="title" name="title" value={text.title} onChange={e=>onHandleChange(e)} placeholder="Yazı Başlığı"/>
                <label htmlFor="title">Başlık</label>
            </div>
            <div className="form-floating mt-3">
                <textarea className="form-control "  style={{height:"100%"}} id="content" name="content" placeholder="içerik" onChange={e=>onHandleChange(e)} value={text.content} />
                <label htmlFor="content">İçerik</label>
            </div>
            <div className="float-end mt-2">
                <button className="btn btn-secondary " style={{marginRight:"10px"}} onClick={goHome}>İptal</button> 
                <button className="btn btn-success" onClick={e=>onFormSubmit(e)} >Gönder</button>
            </div>
        </div>
    )
}
export default withRouter(YaziFormu);