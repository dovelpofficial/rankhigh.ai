import React from 'react'
import data from "../data/index.json";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";




const Blog = () => {
  return (

    <>


      {/* <section className="parent-card-containor"> */}
      <div className='px-10 overflow-hidden'>
        <div className="card-containor   grid   gap-4  overflow-hidden  md:grid-cols-2  sm:grid-cols-1   lg:grid-cols-3        ">
          {data?.blog2?.map((item, index) => (
            <div key={index} className="card overflow-hidden">

              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={item.src}
                    alt="card-image2"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                  </Typography>
                  <Typography>
                    {item.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>{item.button}</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        {/* </section> */}
      </div>

    </>



  )
}

export default Blog
