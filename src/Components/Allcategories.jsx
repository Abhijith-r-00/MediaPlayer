import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  allVideoDelete,
  createCatagory,
  deleteCatagory,
  getCatagory,
  getSingleVideo,
  updateCatagoryVideo,
} from "../Services/allApi";

const Allcategories = ({ setAllvideoDeletedresponse,categoryvideoDeletedresponse}) => {
  const [catagory, setCatagory] = useState("");
  const [data, setData] = useState("");
  const [videoData, setVideoData] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showVideo, setShowVideo] = useState(false);
  const handleCloseVideo = () => setShowVideo(false);

   const [selectVideo, setSelectedVideo] = useState([]);

  useEffect(() => {
    getNewCatagory();
  }, [categoryvideoDeletedresponse]);
  const getNewCatagory = async () => {
    try {
      let resp = await getCatagory();
      setData(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createNewCatagory = async () => {
    if (catagory) {
      try {
        let catagoryname = { catagory, allvideos: [] };
        await createCatagory(catagoryname);
        setShow(false);
        alert("Successfully Added New Catagory");
        getNewCatagory();
        setCatagory("");
      } catch (error) {
        console.error(error);
      }
    }
  };
  const onDeleteClick = async (id) => {
    try {
      await deleteCatagory(id);
      getNewCatagory();
    } catch (error) {
      console.error(error);
    }
  };

  const onDragFinished = (e) => {
    e.preventDefault();
  };
  const onDroped = async (e, catagory) => {
    let vid = e.dataTransfer.getData("videoid");
    // console.log(v);
    try {
      let response = await getSingleVideo(vid);
      setVideoData(response);

      if (response.status >= 200 && response.status <= 300) {
        catagory.allvideos.push(response.data);
        await updateCatagoryVideo(catagory.id, catagory);
        getNewCatagory();
        let resp = await allVideoDelete(vid);
        setAllvideoDeletedresponse(resp);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleShowVideo = (dataItem) => {
    // console.log(dataItem);
    
    setSelectedVideo(dataItem);
    setShowVideo(true);
  };
  const handleCategoryDrag=(e,categoryId,video)=>{
    let data={
      categoryId,video
    }
    e.dataTransfer.setData("categoryVideo",JSON.stringify(data))
    
    
  }

  return (
    <>
      <div>
        <h2>
          All Categories
          <button
            onClick={handleShow}
            className="ms-5 rounded-circle border-0 bg-warning"
          >
            <i className="fa-solid fa-plus "></i>
          </button>
        </h2>
      </div>
      {data.length > 0 ? (
        data.map((val, index) => (
          <div
            onDrop={(e) => onDroped(e, val)}
            onDragOver={(e) => onDragFinished(e)}
            key={index}
            style={{ minHeight: "300px", minWidth: "500px" }}
            className=" container-fluid border border-2 rounded mt-3"
          >
            <div className="d-flex justify-content-between">
              <h4>{val.catagory}</h4>
              <button
                onClick={() => onDeleteClick(val.id)}
                className="btn rounded border-0"
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
            <div className="row">
              {val.allvideos.map((a, index) => (
                <div draggable={true}  onDragStart={(e)=>handleCategoryDrag(e,val.id,a)} key={index} className="col-6">
                  <Card
                    
                    onDragStart={(e) => handleCategoryDrag(e,val.id,a)}
                    style={{
                      minHeight: "200px",
                      width: "80%",
                      backgroundColor: "#f0f5f5",
                    }}
                    className="  mb-2 rounded border-0 shadow"
                  >
                    <Card.Img
                      style={{ objectFit: "cover" }}
                      variant="top"
                      height={"150px"}
                      src={a.url}
                      className="rounded"
                      
                      onClick={()=>handleShowVideo(a)}
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title onClick={handleShowVideo}>{a.caption}</Card.Title>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-danger">No Catagory Found</h1>
      )}

      <Modal show={show} onHide={handleClose} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Details"
            className="mb-2"
          >
            <Form.Control
              onChange={(e) => setCatagory(e.target.value)}
              type="text"
              placeholder="Category Details"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button className="rounded" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="rounded"
            variant="primary"
            onClick={createNewCatagory}
          >
            ADD
          </Button>
        </Modal.Footer>
      </Modal>

      {selectVideo && (
        <Modal show={showVideo} onHide={handleCloseVideo} centered size="lg">
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
    </>
  );
};

export default Allcategories;
