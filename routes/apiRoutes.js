// const { Workout } = require('../models');
// const router = require("express").Router();

// // module.exports = (app) => {
//   router.get('/api/workouts', async (req, res) => {
//     const data = await Workout.find().sort({ _id: -1 }).limit(1);
//     console.log('data', data);
//     const lastWorkout = [
//       {
//         day: data[0].day,
//         _id: data[0]._id,
//         exercises: data[0].exercises,
//         totalDuration: 0
//       }
//     ];
//     data[0].exercises.forEach((exercise) => {
//       if (exercise.duration) {
//         lastWorkout[0].totalDuration += exercise.duration;
//       }
//     });
//     res.send(lastWorkout);
//   });

//   router.post('/api/workouts', (req, res) => {
//     const workout = new Workout({
//       ...req.body,
//       day: new Date().setDate(new Date().getDate())
//     });

//     Workout.create(workout)
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(501).send();
//       });
//   });

//   router.put('/api/workouts/:id', (req, res) => {
//     const id = req.params.id;
//     const exercise = req.body;
//     Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: exercise } })
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.sendStatus(501);
//       });
//   });

//   router.get('/api/workouts/range', (req, res) => {
//     Workout.find({}).then((data) => {
//       res.json(data);
//     });
//   });
// // };

// module.exports = router;

const router = require("express").Router();
const Workouts = require("../models");

router.get('api/workouts', ({body},res)=> {
    console.log("getting workouts")
    Workouts.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("api/workouts", ({body},res)=>{
  Workouts.create(body)
  .then(dbTransaction => {
    res.json(dbTransaction);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

router.put("api/workouts/:id", (req,res)=>{
    Workouts.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then(data=> res.json(data))
})

router.get('api/workouts/range', (req,res)=> {
    console.log("getting info")
    Workouts.find().then(data=> res.json(data)).catch(err=>console.log(err))
});


module.exports = router;