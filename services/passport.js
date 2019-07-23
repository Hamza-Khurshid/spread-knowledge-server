var LocalStrategy = require('passport-local');
var tutorCollection = require('../models/tutorSchema');
var studentCollection = require('../models/studentSchema');

module.exports = (passport,app,dbname)=>{

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    if(dbname=='/tutor/login'){
      tutorCollection.findById(id, function(err, user) {
      done(err, user);
    });
  }
  else if(dname=='/signup/login'){
    studentCollection.findById(id, function(err, user) {
      done(err, user);
    });

  }
  });


    passport.use(new LocalStrategy({usernameField:'email'},
        function(email, password, done) {
        if(dbname==='/tutor/login'){
          tutorCollection.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
      } else if(dbname === '/student/login') {
        studentCollection.findOne({ email: email }, function (err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }
    }
      ));

      

      app.post('/tutor/login',  passport.authenticate('local'), function(req, res) {
        
      });

      app.get('/student/getuser',(req,res)=>{
        res.send(req.user)
      })

}