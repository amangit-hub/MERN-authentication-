import express from "express";
const router = express.Router();

router.get("/sign", (req, res) => {
  res.send("sign up form");
});
router.get("/login", (req, res) => {
  res.send("login form");
});
router.get("/logout", (req, res) => {
  res.send("logout");
});
export default router;
