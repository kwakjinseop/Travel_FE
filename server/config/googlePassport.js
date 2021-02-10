const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: "83123808127-tmh1ukc5rep2rh00e7q7ig0tbgprg9me.apps.googleusercontent.com",
      clientSecret: "DI_aWHBo_hwqbjvXBuN1U72U",
      callbackURL: "/users/login/google/callback",
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      console.log("profile: ", profile);
      var user = profile;
      done(null, user);
    }
  )
);

module.exports = passport;
