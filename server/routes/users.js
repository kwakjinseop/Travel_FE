const express = require("express");
const router = express.Router();
const googlePassport = require("../config/googlePassport.js");
const naverPassport = require("../config/naverPassport.js");
const kakaoPassport = require("../config/kakaoPassport.js");

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/login/google", googlePassport.authenticate("google", { scope: ["profile"] }));
router.get("/login/google/callback", googlePassport.authenticate("google"), authSuccess);

router.get("/login/naver", naverPassport.authenticate("naver", { scope: ["profile"] }));
router.get("/login/naver/callback", naverPassport.authenticate("naver"), authSuccess);

router.get("/login/kakao", kakaoPassport.authenticate("kakao", { scope: ["profile"] }));
router.get("/login/kakao/callback", kakaoPassport.authenticate("kakao"), authSuccess);

function authSuccess(req, res) {
  res.redirect("/");
}

module.exports = router;
