import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { deleteHistory, getHistory } from "../Services/allApi";
import Modal from "react-bootstrap/Modal";
const History = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
   const [selectVideo, setSelectedVideo] = useState([]);
  const handleShow=(video)=>{
    setShow(true)
    setSelectedVideo(video)
    
  }
  const [historyData, setHistoryData] = useState([]);
  useEffect(() => {
    getAllHistory();
  }, []);
  const getAllHistory = async () => {
    try {
      let apiResponse = await getHistory();
      setHistoryData(apiResponse.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  const onClickDeleteHistory=async(id)=>{
    try{
          await deleteHistory(id);
          getAllHistory()
    }catch(error){
          console.log(error);
          
    }
  }
  return (
    <>
      <div className=" container">
        <div className="d-flex justify-content-between py-5">
          <h2>Watch History </h2>
          <Link to={"/"}>Back To Home</Link>
        </div>
        <div>
          <Table striped bordered hover style={{marginBottom:"150px"}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>Link</th>
                <th>Time Stamp</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {historyData.length>0? historyData.map((data,index) => (

                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{data.caption}</td>
                  <td><Link onClick={()=>handleShow(data)} >{`https://youtu.be/${data.videoURL}`}</Link></td>
                  <td>{data.timeStamp}</td>
                  <td>
                    {" "}
                    <button className="btn rounded border-0" onClick={()=>onClickDeleteHistory(data.id)}>
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              )):<tr ><td colSpan={5}><div style={{marginLeft:"500px",color:"red"}}>No History Data</div></td></tr>}
            </tbody>
          </Table>
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

export default History;
