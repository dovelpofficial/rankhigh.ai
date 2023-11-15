import React from 'react'
import data from "../data/index.json"

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const CardHome = () => {
    return (
        <>

            {/* <section className="parent-card-containor"> */}
<div className='px-10 overflow-hidden'>
                <div className="card-containor   grid   gap-4  overflow-hidden  md:grid-cols-2  sm:grid-cols-1   lg:grid-cols-4        ">
                    {data?.card?.map((item, index) => (
                        <div key={index} className="card overflow-hidden">

                            <Card className="  ">

                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {item.title}
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
    );
};

export default CardHome









