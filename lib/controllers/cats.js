const { Router } = require('express');
// const { cats } = require('../../data/cats');
const CartoonCat = require('../models/CartoonCat');
const router = Router();

router
  .get('/:id', async (req, res) => {
    const cartoonCat = await CartoonCat.getCartoonCatById(req.params.id);
    res.json(cartoonCat);
  })
  .get('/', async (req, res) => {
    const cartoonCat = await CartoonCat.getAllCartoonCats();
    const cats = cartoonCat.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(cats);
  });


module.exports = router;
