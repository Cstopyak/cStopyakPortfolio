const router = require('express').Router();
const {getAbout, getAboutId, addAbout, updateAbout, delAbout} = require('../controllers/aboutController');
// const aboutSchema= require('../models/aboutModel');

// get about user

router.get('/about', getAbout)

// // add about user
router.post('/about', addAbout)



// Specific route
router.get('/about/:id', getAboutId)


//update specific about
router.put('/about/update/:id', updateAbout)

//deleting about
router.delete('/about/:id', delAbout)
//end about



module.exports = router;