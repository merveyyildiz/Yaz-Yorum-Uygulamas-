import React ,{useEffect,useState} from 'react'
import Yorumlar from '../Comment/Yorumlar';
import { api } from '../../api';
import axios from 'axios';
import {Link} from "react-router-dom";
import SilModal from './SilModal';
export default function YaziDetay(props) {
    const {id}=props.match.params;
    const [data,setData]=useState();
    const [comments,setComments]=useState([]);
   
    const [hata,setHata]=useState();
    const handleCommentSubmit=(e,comment)=>{
        e.preventDefault();
        api().post(`/posts/${id}/comments`, comment)
        .then(res=>{
            setComments([...comments,res.data])
            
        })
        .catch(err=>{console.log(err)})
    }
    useEffect(()=>{
        axios.all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
        .then(responses=>{
            setData(responses[0].data);
            setComments(responses[1].data);
        })
        .catch(err=>{setHata("Hata! Lütfen tekrar deneyiniz.");console.log(err)})
    },[])
  
    return (
        
        <div className="card">
            {data &&
            <> 
                <div className="d-flex justify-content-around mx-2">
                    <h3>{data.title}</h3>
                    <span style={{fontSize:"12px",marginTop:"15px"}}>{data.created_at}</span>
                  
                </div>
                <div className="btn-group btn-group-sm w-25" role="group">
                    <SilModal post={data} push={props.history.push}/>
                    <Link to={`/post/${data.id}/edit`} className="btn btn-primary">Düzenle</Link>
                </div>
                <p>{data.content}</p>
              <Yorumlar comments={comments}  handleCommentSubmit={handleCommentSubmit}/>

            </>
            }
            {hata && <div>{hata}</div>}
            
        </div>
            
    )
}
