import React ,{useEffect,useState} from 'react'
import {Link } from "react-router-dom";
import {api} from "../../api";
export default function YaziListesi() {
    const [data,setData]=useState();
  useEffect(()=>{
    api().get("/posts")
    .then(res=>{
      setData(res.data);
    })
  },[])
    return (
        <div className=" list-group   ">
            {data && data.map(dt=>{
                return (
                    <div className="my-1 " key={dt.id}>
                        <Link to={"post/"+dt.id}>
                            <li className="list-group-item list-group-item-action list-group-item-dark d-flex align-items-center justify-content-between">
                                <h5 className="mb-1">{dt.title}</h5>
                                <small>{dt.created_at}</small>
                            </li>
                            </Link>
                    </div>
                )
            })} 
        </div>
    )
}
