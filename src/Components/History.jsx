import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
const History = () => {
  return (
   <><div className=' container'>
      <div className='d-flex justify-content-between py-5'>
            <h2>Watch History </h2>
            <Link to={'/'}>Back To Home</Link>
      </div>
      <div>
      <Table striped bordered hover>
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td> <button className='btn rounded border-0'><i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
      
      </tbody>
    </Table>
      </div>
      </div>
   </>
  )
}

export default History