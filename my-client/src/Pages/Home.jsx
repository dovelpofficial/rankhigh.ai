import React from 'react'
import CardHome from '../components/CardHome'

const Home = () => {
  return (
    <div className='main-hero'>




      <div className="container-fluid hero-container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="font-weight-bold">Welcome to Best SEO Tools.</h1>
            <p>We at rankhigh.ai are committed to assisting you in improving the functionality of your website and positioning it higher in search engine results. No matter who you are—a person, a business owner, or a developer—our robust array of SEO Studio tools is here to help you at every turn.




            </p>

            <div className="row"><button class="btn btn-success hero-call-to-action ">lets get started</button></div>
          </div>


          <div class="col-md-6 img-hero">
            <img src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid rounded-top-right " alt="YourImage" />
          </div>

        </div>
      </div>


      {/* this is the card section  */}

      <CardHome />
    </div>

  )
}



export default Home
