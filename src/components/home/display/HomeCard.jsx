import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

function HomeCard (props) {
    return (
        <div className="flex justify-center">
            <Card className="mt-6 w-3/4">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {props.title}
                    </Typography>
                    <Typography>
                        {props.description}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>{props.button}</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default HomeCard;