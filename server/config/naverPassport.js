const passport = require("passport");
const NaverStrategy = require("passport-naver").Strategy;

passport.use(
  new NaverStrategy(
    {
      clientID: "omznwi_wBQ4F48d6SAq5",
      clientSecret: "AI5ks57hhI",
      callbackURL: "/users/login/naver/callback",
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
