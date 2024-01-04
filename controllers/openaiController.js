// const { response } = require("express");
const { OpenAI } = require("openai");
const dotenv = require('dotenv').config();
const {Image,User} = require('../models');



const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateImage = async () =>{
const response = await openai.images.generate({
  model: "dall-e-2",
  prompt: "photoText",
  n: 1,
  size: "1024x1024",
});
  const imageUrl= response.data
  const imageUrlList=imageUrl.map(image=>image.url)
  console.log(imageUrlList)
};


generateImage();

module.exports = { generateImage };

// const generateImage = async () =>{
//   const response= await openai.images.generate({
//     model:'dall-e-2',
//     prompt: 'dog with cat eyes',
//     n:1,
//     size: "1024x1024"
//   })
  
//   const imageUrl= response.data
//   const imageUrlList=imageUrl.map(image=>image.url)
//   console.log(imageUrlList)
// }
// module.exports = { generateImage };



// const { Configuration, OpenAIApi } = require('openai');

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const generateImage = async (req, res) => {
//   const { prompt, size } = req.body;

//   const imageSize =
//     size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

//   try {
//     const response = await openai.createImage({
//       prompt,
//       n: 1,
//       size: imageSize,
//     });

//     const imageUrl = response.data.data[0].url;

//     res.status(200).json({
//       success: true,
//       data: imageUrl,
//     });
//   } catch (error) {
//     if (error.response) {
//       console.log(error.response.status);
//       console.log(error.response.data);
//     } else {
//       console.log(error.message);
//     }

//     res.status(400).json({
//       success: false,
//       error: 'The image could not be generated',
//     });
//   }
// };
