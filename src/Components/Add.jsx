// import { Modal } from 'bootstrap'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const Add = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <Form.Control type="text" placeholder="Video" />
                    </FloatingLabel>
                    <FloatingLabel className="mb-2" controlId="floatingInput" label="video Image URL">
                        <Form.Control type="text" placeholder="Video image URL" />
                    </FloatingLabel>
                    <FloatingLabel className="mb-2" controlId="floatingInput" label="video Youtube URL">
                        <Form.Control type="text" placeholder="Video Video URL" />
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
