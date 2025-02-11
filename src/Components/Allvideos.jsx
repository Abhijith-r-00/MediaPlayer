import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Allvideos = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (

  <>
    <div>
        <h2>Allvideos</h2>
        <Card style={{ width: '12rem',backgroundColor:"##f0f5f5" }} className='rounded border-0 shadow'  onClick={handleShow}>
      <Card.Img variant="top" height={"150px"} src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/leo-box-report-1699501215.jpg" />
      <Card.Body>
        <div className='d-flex justify-content-between'>    
                <Card.Title>Leo</Card.Title>
                 <button className='btn rounded border-0'><i className="fa-solid fa-trash text-danger"></i></button>
        </div>

      </Card.Body>
    </Card>
    </div>


    <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='text-center'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=X_0Kq2hr7DJ_KT7o&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Allvideos