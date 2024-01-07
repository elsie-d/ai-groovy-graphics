const router = require('express').Router();
const { Image } = require('../../models');



/* router.post('/saveImage', async (req, res) => {
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
 */



  router.post('/saveImage', async (req, res) => {
    try{
      const storeImg = await Image.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(storeImg);

    }catch(error){
      res.status(400).json(error)
    }
  });



  router.delete('/:id', async (req, res) => {
    try {
      const imgData = await Image.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!imgData) {
        res.status(404).json({ message: 'No image found with this id!' });
        return;
      }
  
      res.status(200).json(imgData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;