var app = require('express').Router();
var tutorCollection = require('../models/tutorSchema');

app.post('/deleteTutor', (req, res) => {
  tutorCollection
      .findOneAndDelete({_id: req.body._id})
      .exec(function (err, response) {
          if (err) {
              return res.json({ err: err })
          }
          res.json({ tutor: response })
      });
})

app.post('/getTutor', (req, res) => {
  tutorCollection
      .findById(req.body._id)
      .exec(function (err, response) {
          if (err) {
              return res.json({ err: err })
          }
          res.json({ tutor: response })
      });
})

app.post('/updateTutor', (req, res) => {
  tutorCollection
      .findOneAndUpdate(
        {_id: req.body._id},
        {
          tName: req.body.tName,
          tEmail: req.body.tEmail,
          tPassword: req.body.tPassword,
          tPhone: req.body.tPhone,
          tGender: req.body.tGender,
          imgURL: req.body.imgURL,
          tCity: req.body.tCity,
          tAddress: req.body.tAddress,
          tAbout: req.body.tAbout,
          tDegreeL: req.body.tDegreeL,
          tDegreeT: req.body.tDegreeT,
          eDegreeL: req.body.eDegreeL,
          eDegreeT: req.body.eDegreeT,
          wttDegreeL: req.body.wttDegreeL,
          wttDegreeT: req.body.wttDegreeT,
          subject1: req.body.subject1,
          subject2: req.body.subject2,
          subject3: req.body.subject3,
          fFrom: req.body.fFrom,
          fTo: req.body.fTo
        })
      .exec(function (err, response) {
          if (err) {
              return res.json({ err: err })
          }
          res.json({ tutor: response })
      });
})

app.post("/addTutor", function(req, res) {
  let tutor = new tutorCollection({ 
    _id: req.body._id,
    tName: req.body.tName,
    tEmail: req.body.tEmail,
    tPassword: req.body.tPassword,
    tPhone: req.body.tPhone,
    tGender: req.body.tGender,
    imgURL: req.body.imgURL,
    tCity: req.body.tCity,
    tAddress: req.body.tAddress,
    tAbout: req.body.tAbout,
    tDegreeL: req.body.tDegreeL,
    tDegreeT: req.body.tDegreeT,
    eDegreeL: req.body.eDegreeL,
    eDegreeT: req.body.eDegreeT,
    wttDegreeL: req.body.wttDegreeL,
    wttDegreeT: req.body.wttDegreeT,
    subject1: req.body.subject1,
    subject2: req.body.subject2,
    subject3: req.body.subject3,
    fFrom: req.body.fFrom,
    fTo: req.body.fTo
  });
  
    tutor
    .save((err, user) => {
      if (err) {
        return res.json({ success: false, err: err })
      }
      res.json({ success: true, data: user })
    });
})


app.get("/getAllTutors", function(req, res) {
    tutorCollection
    .find()
    .exec((err, data) => {
        if (err) {
        res.json("error occored: ", err);
        } else {
        res.json(data);
        }
    });
  })  


module.exports = app;