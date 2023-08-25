import React from "react";
import {
  Card,
  Typography,
  Input,
  Button,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";

const IssueCertificates = () => {
  return (
    <div className="flex-col w-full">
      <div className="flex flex-col text-center py-10 pb-1">
        <Typography variant="h1">Issue new certificate !</Typography>
        <Typography variant="lead">
          Send your certificates to issuer to verify and commit it to
          blockchain.
        </Typography>
      </div>
      <div>
        <div className="flex justify-center gap-10">
          <Card
            className="h-auto w-[30%] mt-10 overflow-hidden p-8"
            color="white"
          >
            <div>
              <Typography variant="h4" color="blue-gray">
                Certificate Information
              </Typography>
              <Typography color="gray" className="font-normal">
                Fulfill all information below
              </Typography>
            </div>
            <div className="flex flex-col gap-5 pt-5">
              <Input
                label="Owner Name"
                icon={<i className="fas fa-user text-xs" />}
              />
              <Textarea label="Purpose" />
              <Input
                label="Certificate Type"
                icon={<i className="fas fa-file text-xs" />}
              />
            </div>
          </Card>
          <Card
            className="h-auto w-[30%] mt-10 overflow-hidden p-8"
            color="white"
          >
            <div>
              <Typography variant="h4" color="blue-gray">
                Certificate Upload
              </Typography>
              <Typography color="gray" className="font-normal">
                Choose a pdf file from your device
              </Typography>
            </div>
            <div className="flex flex-col items-center justify-center h-full border-dashed border-2 border-blue-gray-300 p-4 mt-4 rounded-lg cursor-pointer">
              <i className="fas fa-file-upload text-4xl text-blue-gray-400 mb-2" />
              <Typography color="gray" className="font-medium">
                Upload file
              </Typography>
            </div>
          </Card>
        </div>
        <div className="mt-5 w-full flex justify-center">
          <Card className="p-2 w-[63%] flex flex-row justify-between">
            <Checkbox
              label={
                <Typography color="blue-gray" className="flex font-medium">
                  I agree with the
                  <Typography
                    as="a"
                    href="#"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  >
                    &nbsp;terms and conditions
                  </Typography>
                  .
                </Typography>
              }
            />
            <Button color="blue" className="m-2">Confirm</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IssueCertificates;
