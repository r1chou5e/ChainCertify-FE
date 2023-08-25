import React, { useState } from "react";
import {
  Card,
  Typography,
  Input,
  Button,
  Textarea,
  Checkbox,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";

const IssueCertificates = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [gasFee, setGasFee] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadFile = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const openModal = () => {
    if (gasFee === 0) {
      setIsLoading(true); // Hiển thị spinner

      setTimeout(() => {
        setIsLoading(false); // Ẩn spinner
        setGasFee(
          selectedFile
            ? ((selectedFile.size / (1024 * 1024)) * 0.01).toFixed(5)
            : 0
        );
        setShowModal(true);
      }, 3000);
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

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
            <div
              className="flex flex-col items-center justify-center h-full border-dashed border-2 border-blue-gray-300 p-4 mt-4 rounded-lg cursor-pointer"
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "application/pdf"; // Optionally set accepted file types
                input.onchange = handleUploadFile;
                input.click();
              }}
            >
              <i
                className={`fas fa-${
                  selectedFile ? "check" : "file-upload"
                } text-3xl text-blue-gray-400 mb-2`}
              />
              <Typography color="gray" className="font-medium">
                {selectedFile ? selectedFile.name : "Upload file"}
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
            <Button color="blue" className="m-2" onClick={openModal}>
              {isLoading ? <Spinner className="h-4 w-4" /> : "Execute"}
            </Button>
          </Card>
        </div>
      </div>
      <Dialog open={showModal} handler={closeModal}>
        <DialogHeader>Your attention is required!</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col items-center mb-3">
            <i className="fab fa-ethereum text-[60px] text-blue-gray-800 mr-2"></i>
            <Typography color="black" variant="h5" className="py-3">
              Your certificate file costs{" "}
              <span className="text-red-500">{gasFee} ETH</span> to store !
            </Typography>
            <p className="text-gray-600">
              This cost depends on your file size, current gas fee and another
              conditions. If you confirm to issue this certificate, the cost
              will be deducted directly from your wallet.
            </p>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={closeModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" onClick={closeModal}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default IssueCertificates;
