import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Allcategories = () => {
   const [show, setShow] = useState(false);
  
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
     <div><h2>All Categories<button onClick={handleShow}  className='ms-5 rounded-circle border-0 bg-warning'><i className="fa-solid fa-plus "></i></button></h2></div>
     <Modal show={show} onHide={handleClose} size='md' centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Category Details"
                        className="mb-2"
                    >
                        <Form.Control type="text" placeholder="Category Details" />
                    </FloatingLabel>
                   
                </Modal.Body>
                <Modal.Footer>
                    <Button className='rounded' variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='rounded' variant="primary" onClick={handleClose}>
                       ADD
                    </Button>
                </Modal.Footer>
            </Modal>

        
     </>
  )
}

export default Allcategories