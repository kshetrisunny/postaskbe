const express = require('express');
const router = express.Router();

router.post('/category', async (req, res) => {
  const category = new Category({name: req.body.name})
try {
  let newCategory = await category.save();
  res.status(201).send({ response: `Category ${newCategory._id}` });
} catch (err) {
  res.status(500).send(err);
}
});


module.exports = router;
