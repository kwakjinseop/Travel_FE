const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

passport.use(
  new KakaoStrategy(
    {
      clientID: "40f49416515cac34fc348fdea7bc9411",
      // clientSecret: "AI5ks57hhI",
      callbackURL: "/users/login/kakao/callback",
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
