var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function (username, password, done) {
    if (username === "jose" && password === "Pa123") {
      return done(null, {
        name: "jose",
        mail: "j@f.r",
      });
    } else {
      return done(null, false, { message: "wrong user name or password" });
    }
  })
);

passport.serializeUser(function (req, user, done) {
  if (user.name !== "jose") {
    return done("Invalid user", null);
  } else if (!req) {
    return done("Missing request", null);
  }
  done(null, user);
});

passport.deserializeUser(function (req, user, done) {
  if (user.name !== "jose") {
    return done("Invalid user", null);
  } else if (!req) {
    return done("Missing request", null);
  }
  done(null, user);
});
