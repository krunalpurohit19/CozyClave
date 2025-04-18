const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const {
  renderSignupForm,
  signup,
  renderLoginForm,
  login,
  logout,
} = require("../controller/user.js");

router.route("/signup").get(renderSignupForm).post(wrapAsync(signup));

router
  .route("/login")
  .get(renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      //using passport login process done automatically
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(login)
  );

router.get("/logout", logout);

module.exports = router;
