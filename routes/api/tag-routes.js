const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const singleTagData = Tag.findByPk(req.params.id , {
      include: [{ model: Product }]
    });
    if (!singleTagData) {
      res.status(404).json({ message: "No tag was found with this ID"});
      return;
    }
    res.status(200).json(singleTagData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  try {
    const singleTagData = Tag.destroy({
      where:{
        id: req.params.id
      }
    });
    if (!singleTagData) {
      res.status(404).json({ message: " No tag found with with ID!"});
      return;
    }
    res.status(200).json(singleTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
