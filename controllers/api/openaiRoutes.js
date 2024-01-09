const express = require('express');
const { OpenAI } = require("openai");
const router = express.Router();
require("dotenv").config();


const openai = new OpenAI({
    apiKey: "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",
  }); 


const generateImage = async (prompt) => {
    const response = await openai.images.generate ({
      model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: "1024x1024",       
    });
  const image = response.data[0].url
  return image; 
    
    
}



router.post('/generateImage', async (req, res) => {
const image = await generateImage(req.body.prompt);
    res.json({image});
});



module.exports = router;
