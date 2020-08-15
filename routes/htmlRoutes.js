// const path = require('path');

// html_routes = (app) => {
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
//     console.log(" route / works")
//   });

//   app.get('/exercise', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/exercise.html'));
//     console.log(" route /exercise works")
//   });

//   app.get('/stats', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/stats.html'));
//     console.log(" route /stats works")
//   });
// };

// module.exports = html_routes;

const router = require("express").Router();
const path = require('path');

router.get('/', (req,res)=> res.sendFile(path.join(__dirname, "../public/index.html")));
router.get('/exercise', (req, res) =>res.sendFile(path.join(__dirname, "../public/exercise.html")));
router.get('/stats', (req, res) =>res.sendFile(path.join(__dirname, "../public/stats.html")));

module.exports = router;