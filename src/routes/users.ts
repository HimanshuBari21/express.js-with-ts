import { Router } from "express";

const router = Router();

// all users
router.get("/", (req, res) => {
  res.send([{}]);
});

// specific user
router.get("/:id", (req, res) => {
  res.send(req.params);
});

export default router;
