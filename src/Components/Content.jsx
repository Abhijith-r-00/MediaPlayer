import React, { useState } from 'react'
import { Add } from './Add'
import { Link } from 'react-router-dom'
import Allvideos from './Allvideos'
import Allcategories from './Allcategories'
const Content = () => {
  const [videoresponse,setVideoResponse]=useState("")
  return (
    <div className='container'>
      <div className='d-flex justify-content-between py-5 '>
        <div>
          < Add setVideoResp={setVideoResponse}/>
        </div>
        <div>
          <Link to={'/history'}>Watch History</Link>
        </div>
      </div>
      <div className='d-flex justify-content-between py-5 '>
        <div>
          < Allvideos videoResp={videoresponse}/>
        </div>
        <div>
          <Allcategories/>
        </div>
      </div>
    </div>
  )
}

export default Content