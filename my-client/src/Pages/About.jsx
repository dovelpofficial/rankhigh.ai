import React from 'react'

import vid from "../assests/vid.mp4"



const About = () => {
    return (


        <div className="App">
            <p>hello</p>
            <video autoPlay loop muted >
                <source src={vid} />
            </video>
        </div>


    )
}


export default About
