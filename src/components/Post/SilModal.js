import React,{useState} from "react";
import {Modal,Button} from "react-bootstrap";
import {api} from "../../api"
const SilModal=({post,push})=>{
    const [open,setOpen]=useState(false);
    const [hata,setHata]=useState(false);
    const show = () => setOpen(true)
    const close= () => setOpen(false)
    const handleDelete= (id) =>{
       api().delete(`/posts/${id}`)
        .then(()=>{
            setHata("");
            close();
            push("/");
        })
        .catch(()=>{
            setHata("Yazıyı silerken hata oluştu")
        })
    }
    return(
        <React.Fragment>
            <button className="btn btn-danger" onClick={show}>Sil</button>
            <Modal show={open} onHide={close}>
                <Modal.Header closeButton>
                <Modal.Title>Yazıyı Sil</Modal.Title>
                </Modal.Header>
                <Modal.Body><b>{post.title} </b>başlıklı yazıyı silmek istediğinizden emin misiniz?
                    {hata && <p>{hata}</p>}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    İptal Et
                </Button>
                <Button variant="danger" onClick={()=>handleDelete(post.id)} >
                    Sil
                </Button>
                </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}
export default SilModal;