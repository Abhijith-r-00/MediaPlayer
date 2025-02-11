import React from 'react'
import { Link } from 'react-router-dom'
import musicimg from '../assets/Image/maingif.gif'
import music1 from '../assets/Image/music1.png'
import music2 from '../assets/Image/music2.webp'
import music3 from '../assets/Image/music4.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home = () => {
  return (
    <>
      <section className='first container' style={{}} >
        <div className='row d-flex justify-content-center align-items-center' >
          <div className="col-5">
            <h1>Welcome To <span style={{ color: "Blue" }}>Media Player</span></h1>
            <p style={{ textAlign: "justify" }}>Our media player is a powerful and user-friendly solution for high-quality audio and video playback. It supports a wide range of formats, offers advanced features like customizable playlists and an equalizer, and delivers smooth performance with minimal system impact. Designed for both casual users and media enthusiasts, it provides an immersive and seamless entertainment experience.</p>
            <Link to="/content" className='btn btn-info rounded'>Get Started</Link>
          </div>
          <div className="col-1">

          </div>
          <div className="col-6 ">
            <img src={musicimg} alt="" />
          </div>
        </div>
      </section>
      <section>
        <h2 style={{ textAlign: "center" }}>Features</h2>
        <div className='d-flex justify-content-center align-items-center gap-5'>

          <div>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={music1} style={{height:"300px"}}/>
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>

                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={music2} style={{height:"300px"}}/>
              <Card.Body>
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>

                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={music3} style={{height:"300px"}}/>
              <Card.Body>
                <Card.Title>Manage History</Card.Title>
                <Card.Text>

                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <div className='p-5 border m-5 d-flex justify-content-center' >
          <div className='col-5'>       
               <h2 style={{color:"orange"}}>Simple, Fast , Powerfull</h2>
               <p style={{ textAlign: "justify" }}><span className='fs-5 fw-bold'>Play Everything </span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa veniam, eum possimus praesentium, doloremque nesciunt doloru</p>
               <p style={{ textAlign: "justify" }}><span className='fs-5 fw-bold'>Categorize Video </span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa veniam, eum possimus praesentium, doloremque nesciunt doloru</p>
               <p style={{ textAlign: "justify" }}><span className=' fw-bold fs-5'>Managing History</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa veniam, eum possimus praesentium, doloremque nesciunt doloru</p>
          </div>
          <div className="col-1"></div>
          <div className='me-1 col-6'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZdMZ40GSVmc?si=BW43aaKpwiuogQ7D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home