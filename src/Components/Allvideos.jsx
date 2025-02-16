import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { getVideo } from '../Services/allApi';
const Allvideos = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getAllVideo()
  },[])
  const getAllVideo = async () => {
    try {
      let response = await getVideo()
      if (response.status >= 200 && response.status <= 300) {
        // console.log(response);

        setData(response.data)
      } else {
        console.error(response.statusText);
      }
    } catch {
      console.error("Error Occured");
    }
  }
  return (

    <>
      <div>
      <h2>Allvideos</h2>
      <div className='d-flex justify-content-between'>
        {data.map((dataItem)=>(   
          // console.log(dataItem);
                 
           
           <Card style={{ width: '12rem', backgroundColor: "##f0f5f5" }} className='ms-2 rounded border-0 shadow' onClick={handleShow}>
             <Card.Img variant="top" height={"150px"} src={dataItem.url}  className='rounded'/>
             <Card.Body>
               <div className='d-flex justify-content-between'>
                 <Card.Title>{dataItem.caption}</Card.Title>
                 <button className='btn rounded border-0'><i className="fa-solid fa-trash text-danger"></i></button>
               </div>
 
             </Card.Body>
           </Card>
         

        ))}
       </div>
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