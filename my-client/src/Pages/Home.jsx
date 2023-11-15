import React from 'react'
import CardHome from '../components/CardHome';
import Footer from '../components/Footer';
import vid from "../assests/vid.mp4"

const Home = () => {
  return (
    <div className='main-hero'>




      <div className="container-fluid hero-container top-10 ">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="font-weight-bold">Welcome to Best SEO Tools.</h1>
            <p>We at rankhigh.ai are committed to assisting you in improving the functionality of your website and positioning it higher in search engine results. No matter who you are—a person, a business owner, or a developer—our robust array of SEO Studio tools is here to help you at every turn.




            </p>

            {/* <div className="row"><button class="btn btn-success hero-call-to-action ">lets get started</button></div> */}
          </div>








          {/* kowkd */}
          < div className="App  col-md-6 img-hero">

            <video autoPlay loop muted >
              <source src={vid} />
            </video>
          </div>
      
   {/* kowkd */}




        </div>
      </div>


      {/* this is the card section  */}

      <CardHome />
      <Footer />
    </div>

  )
}



export default Home
