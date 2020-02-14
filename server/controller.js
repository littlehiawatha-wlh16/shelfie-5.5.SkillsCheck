
module.exports = {
   getInventory: /*async*/ (req, res) => {
      const db = req.app.get('db');
      let inventory = /*await*/ db.get_inventory().catch(err => res.status(500).send(err))
      // inventory.forEach((e,i) => inventory[i]._________)
      res.status(200).send(inventory)
   },

   createNewProducts: /*sync*/ (req, res) => {
      const {} = req.body
// insert something in the object above
      const db = req.app.get('db');

      db.create_new_products(new Products (), price).then(() =>res.sendStatus(200))
      .catch(err => res.status(500).send(err))

   }
};

