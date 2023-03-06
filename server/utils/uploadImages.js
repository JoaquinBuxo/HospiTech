import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImages = async (images) => {
  try {
    const uploadedResponse = await cloudinary.uploader.upload(images, {
      upload_preset: 'hospitech',
    });
    return uploadedResponse.secure_url;
  } catch (error) {
    console.error(error);
  }
};

export default uploadImages;
