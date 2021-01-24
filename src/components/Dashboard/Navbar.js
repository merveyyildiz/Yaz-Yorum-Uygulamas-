import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';
const Navbar=()=>{
    useEffect(()=>{
            setTimeout(function () {
                $('.letter').addClass('loaded');
            }, 1000)
        },[])
    
    return(
        <nav className="navbar navbar-expand-md border-bottom">
            <div className="container-fluid">
            <NavbarBrand/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                    <div className="navbar-nav">
                        <Link to="/yaziekle">Yazı Ekle</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
function NavbarBrand(){
    return(
        <Link to="/" className="navbar-brand text-white" >
        <span className="letter">Y</span>
        <span className="letter">a</span>
        <span className="letter">z</span>
        <span className="letter">ı</span>
        <span  className="letter">l</span>
        <span className="letter">ı</span>
        <span className="letter">m</span>
        <span className="letter">  </span>
        <span className="letter">P</span>
        <span  className="letter">l</span>
        <span className="letter">a</span>
        <span className="letter">n</span>
       </Link>
    )
}