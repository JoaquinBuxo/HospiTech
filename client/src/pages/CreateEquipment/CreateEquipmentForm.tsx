import React, { useState, useEffect } from 'react';
import * as ApiService from '../../utils/api';
import {
  Sheet,
  FormControl,
  FormLabel,
  Input,
  Button,
  Typography,
} from '@mui/joy';
import moment from 'moment';

import { Equipment, userData } from '../../Typescript-Interfaces/Types';

type Props = {
  email: string;
};

const CreateEquipmentForm = function ({ email }: Props) {
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [type, setType] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<(string | ArrayBuffer)[]>([]);
  const [lastRevision, setLastRevision] = useState('');
  const [alertError, setAlertError] = useState(false);
  const [user, setUser] = useState<userData | null>(null);
  const dateNow = moment().format('YYYY-MM-DD');

  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModel(event.target.value);
  };

  const handleSerialNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSerialNumber(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleConditionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCondition(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleImagesChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imagesSelected = event.target.files;
    previewImages(imagesSelected);
  };

  const getUser = async () => {
    const users = await ApiService.getAllUsers();
    const user = users.find((el: userData) => el.email === email);
    setUser(user);
  };

  const previewImages = (imagesSelected: FileList | null) => {
    console.log(previewImages);
    if (!FileList) return;

    Array.from(imagesSelected!).map((image) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === 'string') {
          const imageArr = Array.from(images);
          if (!imageArr.includes(reader.result)) {
            setImages((prevState) => [...prevState, reader.result!]);
          } else {
            console.log('This image already exists!');
          }
        }
      };
    });
  };

  const handleLastRevisionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastRevision(event.target.value);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      const equipmentData: Equipment = {
        model,
        serialNumber,
        type,
        condition,
        images,
        description,
        repairs: [],
        ownerId: user!.hospitalId!,
        userId: user!.id!,
        lastRevision: new Date(lastRevision),
        createdAt: new Date(),
      };
      ApiService.createEquipment(equipmentData);
      // setAlertSuccess(true);
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
            width: '50%',
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
          }}
          variant="outlined"
        >
          <form
            onSubmit={handleSubmit}
            action="/equipments"
          >
            <div>
              <Typography
                level="h4"
                component="h1"
                sx={{ mb: 2 }}
              >
                <span data-testid="title">Add New Equipment</span>
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
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
              />
            </FormControl>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Images</FormLabel>
              <Button
                className="button"
                component="label"
              >
                UPLOAD
                <input
                  data-testid="upload"
                  name="images"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={handleImagesChange}
                  autoComplete="off"
                />
              </Button>
              <div className="images-container">
                {images &&
                  images.length > 0 &&
                  images.map((image, i) => (
                    <img
                      className="img-upload"
                      key={i}
                      src={image.toString()}
                      alt="Chosen Image"
                      style={{ height: '70px', objectFit: 'contain' }}
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
                autoComplete="off"
              />
            </FormControl>
            <FormControl sx={{ mb: 1.5 }}>
              <FormLabel>Last Revision</FormLabel>
              <Input
                name="lastRevision"
                value={lastRevision}
                onChange={handleLastRevisionChange}
                type="date"
                placeholder="DD/MM/YYYY"
                autoComplete="off"
                slotProps={{
                  input: {
                    max: dateNow,
                  },
                }}
              />
            </FormControl>

            <Button
              className="button"
              type="submit"
              sx={{ mt: 1, width: '100%' }}
              data-testid="addEquipment"
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
