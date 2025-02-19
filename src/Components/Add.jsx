// import { Modal } from 'bootstrap'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../Services/allApi';

export const Add = ({setVideoResp}) => {

    const [error,setError]=useState(false)
    const [video,setVideo]=useState({
        caption:"",
        url:"",
        videoURL:""
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const seperateUrl=(value)=>{
      console.log(value);
      
        if(value.includes('.be/')) {
            console.log(value);
            const videoId=value.split(".be/")[1]
            setVideo({...video,videoURL:videoId})

            
        }else{
            setError(true);
            console.error("invalid entry")
        }

       
        
    }




    const handleSave= async()=>{
        if(video.caption&&video.url&& video.videoURL){
            // console.log(video);
            
            // console.log("Success");
            try{
            let response=await uploadVideo(video);
            console.log(response);
            setVideoResp(response)
            
                    if(response.status>=200 && response.status<=300){
                        alert("Successfully added your video");
                        setShow(false);
                        setVideo({
                            caption:"",
                            url:"",
                            videoURL:""
                        });
                    }else{
                        alert("An Error Occured ");
                    }
            } catch{
                alert("Error Oc  cured")
            }
            
        }else{
            alert("Please fill the form...");
        }
}

    return (
        <>
            <div>
                <h2>Upload New Video <button onClick={handleShow} className='rounded-circle border-0 bg-warning'><i className="fa-solid fa-plus "></i></button></h2>
            </div>

            <Modal show={show} onHide={handleClose} size='md'>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="video caption"
                        className="mb-2"
                    >
                        <Form.Control onChange={(e)=>{setVideo({...video,caption:e.target.value})}} type="text" placeholder="Video" />
                    </FloatingLabel>
                    <FloatingLabel className="mb-2" controlId="floatingInput" label="video Image URL">
                        <Form.Control onChange={(e)=>{setVideo({...video,url:e.target.value})}} type="text" placeholder="Video image URL" />
                    </FloatingLabel>
                    <FloatingLabel className="mb-2" controlId="floatingInput" label="video Youtube URL">
                        <Form.Control onChange={(e)=>seperateUrl(e.target.value)} type="text" placeholder="Video Video URL" />
                    </FloatingLabel>
                   { error?
                    <div >
                            <p className='text-danger'>Enter valid Youtube Link</p>     
                    </div>:""}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='rounded' variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='rounded' variant="primary" onClick={handleSave}>
                       ADD
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
