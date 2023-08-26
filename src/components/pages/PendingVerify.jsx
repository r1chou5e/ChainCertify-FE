import React, { useState } from "react";
import {
  Typography,
  Card,
  Input,
  Select,
  Option,
  Textarea,
  Button,
  Spinner,
  Alert,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const PendingVerify = () => {
  const [curInst, setCurInst] = useState("uit");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [certPubKey, setCertPubKey] = useState("");
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
  });
  const [certChecked, setCertChecked] = useState(false);
  const validKey = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
  const [icon, setIcon] = useState({
    title: "key",
    color: "gray",
  });
  const gasFee = 0.001;
  const certificateTypes = [
    {
      institution: "uit",
      name: "UIT - University Of Information Technology",
      types: [
        "Associate's Degree",
        "Bachelor's Degree",
        "Master's Degree",
        "Doctoral Degree",
        "Professional Degrees",
      ],
    },
    {
      institution: "iig",
      name: "IIG Vietnam",
      types: [
        "TOEIC Listening & Reading",
        "TOEIC Speaking & Writing",
        "TOEIC Bridge",
      ],
    },
  ];

  const closeModal = () => setShowModal(false);

  const handleSelectInstitution = (event) => {
    setCurInst(event);
  };

  const checkValid = (pubKey) => {
    return pubKey === validKey;
  };

  const handleCheck = () => {
    setIsLoading(true); // Hiển thị spinner

    setTimeout(() => {
      if (checkValid(certPubKey)) {
        setIcon({
          title: "check",
          color: "green",
        });
      } else {
        setIcon({
          title: "xmark",
          color: "red",
        });
      }
      setCertChecked(true);
      setIsLoading(false); // Ẩn spinner
    }, 3000);
  };

  const handleExecute = () => {
    if (!certChecked) {
      setShowAlert({
        show: true,
        message: "Certificate public key has not been checked !",
      });
      setTimeout(() => {
        setShowAlert({
          ...showAlert,
          show: false,
        });
      }, 3000);
    } else {
      if (!checkValid(certPubKey)) {
        setShowAlert({
          show: true,
          message: "Certificate public key is not valid !",
        });
        setTimeout(() => {
          setShowAlert({
            ...showAlert,
            show: false,
          });
        }, 3000);
      } else {
        setShowModal(true);
      }
    }
  };

  return (
    <div className="flex-col w-full h-full">
      <div className="flex flex-col text-center py-20 pb-1">
        <i class="text-9xl fa-solid fa-clock mb-2"></i>
        <Typography variant="h1">
          Your certificate is pending verification !
        </Typography>
        <Typography variant="lead">
          The verification process may take approximately 1 to 2 hours.
          <br />
          Please wait until the certificate is confirmed and fully stored on the
          blockchain.
        </Typography>
      </div>
    </div>
  );
};

export default PendingVerify;
