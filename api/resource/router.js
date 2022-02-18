// build your `/api/resources` router here
const router = require("express").Router();
const {
  checkResourceId,
  checkResourcePayload,
  checkResourceUnique,
} = require("./middleware");
const Resources = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.getResources();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkResourceId, (req, res) => {
  res.json(req.resource);
});

router.post(
  "/",
  checkResourcePayload,
  checkResourceUnique,
  async (req, res, next) => {
    try {
      const newResource = await Resources.createResource(req.body);
      res.status(201).json(newResource);
    } catch (err) {
      next(err);
    }
  }
);
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage: "Something inside the recipes router went wrong",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;