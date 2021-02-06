import React,{useEffect,useState} from "react";
import YaziFormu from "./YaziFormu";
import { api } from "../../api";
const YaziDuzenle=(props)=>{
    const [post,setPost]=useState({});
    const {id} = props.match.params;
    useEffect(()=>{
        api().get(`/posts/${id}`)
        .then(res=>{
            setPost({title:res.data.title,content:res.data.content});
        })
    },[])
    return(
        <div>
            <h2>Yazı Düzenleme Formu</h2>
            <YaziFormu post={post}/>
             </div>
    )
}
export default YaziDuzenle;