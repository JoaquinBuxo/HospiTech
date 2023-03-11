import { CheckCircle, CloseRounded, Report } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import * as ApiService from "../../utils/api";
import "./CreateEquipment.css";
import {
  Sheet,
  FormControl,
  FormLabel,
  Input,
  Button,
  Typography,
} from "@mui/joy";

import {
  Sheet,
  FormControl,
  FormLabel,
  Input,
  Button,
  Typography,
} from "@mui/joy";
const CreateEquipmentForm = function () {
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [lastRevision, setLastRevision] = useState("");
  const [alertError, setAlertError] = useState(false);
  const [user, setUser] = useState({});

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleSerialNumberChange = (event) => {
    setSerialNumber(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImagesChange = async (event) => {
    const imagesSelected = event.target.files;
    previewImages(imagesSelected);
  };

  const getUser = async () => {
    const users = await ApiService.getAllUsers();
    const user = users.find((el) => el.email === Auth.user.email);
    setUser(user);
  };

  const previewImages = (imagesSelected) => {
    const imgAsURL = Array.from(imagesSelected).map((image) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        if (!Array.from(images).includes(reader.result)) {
          setImages((prevState) => [...prevState, reader.result]);
        } else {
          console.log("This image its already!");
        }
      };
    });
  };

  const handleLastRevisionChange = (event) => {
    setLastRevision(event.target.value);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (event) => {
    // const user = await getUser();
    console.log(user);
    try {
      const equipmentData = {
        model,
        serialNumber,
        type,
        condition,
        images,
        description,
        ownerId: user.hospitalId,
        userId: user.id,
        lastRevision: new Date(lastRevision),
      };
      ApiService.createEquipment(equipmentData);
      setAlertSuccess(true);
    } catch (error) {
      setAlertError(true);
      console.log(error);
    }
  };

  return (
    <>
      <main>
        <Sheet
          sx={{
            width: "50%",
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
          }}
          variant="outlined"
        >
          <form onSubmit={handleSubmit} action="/equipments">
            <div>
              <Typography
                data-testid="addEquipment"
                level="h4"
                component="h1"
                sx={{ mb: 2 }}
              >
                <b>Add New Equipment</b>
              </Typography>
            </div>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Model</FormLabel>
              <Input
                name="model"
                value={model}
                onChange={handleModelChange}
                placeholder="Da Vinci Surgical System"
                required
              />
            </FormControl>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Serial Number</FormLabel>
              <Input
                name="serialNumber"
                value={serialNumber}
                onChange={handleSerialNumberChange}
                placeholder="IS23456787654"
                required
              />
            </FormControl>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Type</FormLabel>
              <Input
                name="type"
                value={type}
                onChange={handleTypeChange}
                placeholder="surgical"
                required
              />
            </FormControl>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Condition</FormLabel>
              <Input
                name="condition"
                value={condition}
                onChange={handleConditionChange}
                placeholder="good"
                required
              />
            </FormControl>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Images</FormLabel>
              <Button className="button" component="label">
                UPLOAD
                <input
                  name="images"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleImagesChange}
                />
              </Button>
              <div className="images-container">
                {images &&
                  images.length > 0 &&
                  images.map((image) => (
                    <img
                      className="img-upload"
                      key={image}
                      src={image}
                      alt="Chosen Image"
                      style={{ height: "70px", objectFit: "contain" }}
                    />
                  ))}
              </div>
            </FormControl>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Description</FormLabel>
              <Input
                name="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="The Da Vinci System consists of a surgeon's console that is typically in the same room as the patient, and a patient-side cart with three to four interactive robotic arms (depending on the model) controlled from the console. The arms hold objects, and can act as scalpels, scissors, bovies, or graspers. The final arm controls the 3D cameras.[6] The surgeon uses the controls of the console to manoeuvre the patient-side cart's robotic arms. The system always requires a human operator."
                required
              />
            </FormControl>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Last Revision</FormLabel>
              <Input
                name="lastRevision"
                value={lastRevision}
                onChange={handleLastRevisionChange}
                type="date"
                placeholder="MM/DD/YYYY"
                required
              />
            </FormControl>

            <Button
              className="button"
              type="submit"
              sx={{ mt: 1, width: "100%" }}
            >
              ADD EQUIPMENT
            </Button>
          </form>
        </Sheet>
      </main>
    </>
  );
};
export default CreateEquipmentForm;