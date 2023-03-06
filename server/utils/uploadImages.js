import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImages = async (images) => {
  try {
    const imagesURL = [];
    for (let i = 0; i < images.length; i++) {
      const uploadedResponse = await cloudinary.uploader.upload(images[i], {
        upload_preset: 'hospitech',
      });
      imagesURL.push(uploadedResponse.secure_url);
    }
    return imagesURL;
  } catch (error) {
    console.error(error);
  }
};

export default uploadImages;
