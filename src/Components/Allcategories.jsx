import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { createCatagory, deleteCatagory, getCatagory } from "../Services/allApi";

const Allcategories = () => {
  const [catagory, setCatagory] = useState("");
  const [data, setData] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getNewCatagory();
  }, []);
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
  }
  const onDeleteClick=async(id)=>{
    try {
      await deleteCatagory(id)
      getNewCatagory();
    } catch (error) {
      console.error(error);
      
    }
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

          <div key={index} className=" container-fluid border border-2 rounded mt-3">
            <div className="d-flex justify-content-between">
              <h4>{val.catagory}</h4>
              <button onClick={() => onDeleteClick(val.id)} className="btn rounded border-0">
                <i className="fa-solid fa-trash text-danger" ></i>
              </button>
            </div>

          </div>
        ))
      ):<h1 className="text-danger">No Catagory Found</h1>}

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
          <Button
            className="rounded"
            variant="secondary"
            onClick={handleClose}
          >
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
    </>
  );
};

export default Allcategories;
