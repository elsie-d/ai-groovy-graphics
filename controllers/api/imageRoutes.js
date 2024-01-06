const router = require('express').Router();
const { Image } = require('../../models');



router.post('/saveImage', async (req, res) => {
    try {
      const imgData = await Image.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = imgData.id;
        req.session.logged_in = true;
  
        res.status(200).json(imgData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;