const express = require('express');
const { OpenAI } = require("openai");
//const cors = require("cors");
//const { generateImage } = require('../openaiController');
const router = express.Router();
require("dotenv").config();
//const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }); 
//router.post('/generateimage', generateImage,) 


const generateImage = async (prompt) => {
    const response = await openai.images.generate ({
        prompt: prompt,
        n: 1,
        size: "256x256",
        
    });
    console.log(response)
    /* const image = response.data;
    return image; */
    
    
}



router.post('/generateImage', async (req, res) => {
    const image = await generateImage(req.body.prompt);
    res.send({image});
});



module.exports = router;