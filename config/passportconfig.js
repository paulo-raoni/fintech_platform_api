const LocalStrategy =require('passport-local').Strategy;
const User = require('../app/models/user');

const configure = (passport) => {
    const strategyFunction = (username, password, done) => {
        User.authenticate(username, password, (err, user) => {
            if(err) {
                console.error('LocalStrategy - Error trying to authenticate');
                done(err);
            } else if (user) {
                console.log('LocalStrategy - Successfully authenticated');
                done(null, user)
            } else {
                console.log('LocalStrategy - Failed to authenticate');
                done(null, false);
            }
        })
    }

    passport.use(new LocalStrategy(strategyFunction));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

}

module.exports = {
    configure
}