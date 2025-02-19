import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { addHistory, allVideoDelete, getVideo } from "../Services/allApi";
const Allvideos = ({videoResp}) => {
  const [selectVideo, setSelectedVideo] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = async (dataItem) => {
    // try{

    let currentDate= new Date()
    let timeStamp=currentDate.toLocaleString('en-IN',{timeZoneName:'short'});
    const{caption,videoURL}=dataItem
    const payload={caption,videoURL,timeStamp}
    try{
      let apiResponse=await addHistory(payload);

    }catch(error){
          console.log(error);
          
    }

    // }
    // console.log(dataItem);
    
    setSelectedVideo(dataItem);
    setShow(true);
  };
  useEffect(() => {
    getAllVideo();
  }, [videoResp]);
  const getAllVideo = async () => {
    try {
      let response = await getVideo();
      if (response.status >= 200 && response.status <= 300) {
        // console.log(response);

        setData(response.data);
      } else {
        console.error(response.statusText);
      }
    } catch {
      console.error("Error Occured");
    }
  };
  const deleteVideo =async(id)=>{
    try{
            await allVideoDelete(id);
            getAllVideo();
    }catch(error)
    {
      console.log(error);
      
    }
  }
  return (
    <>
      <div>
        <h2>All Videos</h2>
        <div className="container">
          <div className="row">
            {data.map((dataItem, index) => (
              <div key={index} className="col-md-4 mb-3 align-items-stretch">
                {" "}
                {/* 3 cards per row on medium+ screens */}
                <Card
                  draggable={true}
                  onDragStart={(e)=>onVideoDrag(e,dataItem.id)}
                  style={{ width: "100%", backgroundColor: "#f0f5f5" }}
                  className="h-100 rounded border-0 shadow"
                  
                >
                  <Card.Img
                    style={{ objectFit: "cover" }}
                    variant="top"
                    height={"150px"}
                    src={dataItem.url}
                    className="rounded"
                    onClick={()=>handleShow(dataItem)}
                  />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title onClick={()=>handleShow(dataItem)}>{dataItem.caption}</Card.Title>
                      <button className="btn rounded border-0" onClick={()=>deleteVideo(dataItem.id)}>
                        <i className="fa-solid fa-trash text-danger"></i>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>  
        {selectVideo && (
          <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectVideo.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="text-center">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${selectVideo.videoURL}&autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Allvideos;
