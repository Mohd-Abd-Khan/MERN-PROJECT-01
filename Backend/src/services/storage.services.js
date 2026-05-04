const { ImageKit } = require("@imagekit/nodejs");

// Create ImageKit instance
const imageKitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// Function to upload image
async function uploadImage(fileBuffer) {
  // Convert buffer to base64
  const base64File = fileBuffer.toString("base64");

  // Upload file
  const response = await imageKitClient.files.upload({
    file: base64File,
    fileName: "uploaded-image.jpg"
  });

  return response;
}

module.exports = uploadImage;