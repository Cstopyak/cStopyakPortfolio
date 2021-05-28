const router = require('express').Router();
const {getEducation, getEducationId, addEducation, updateEducation, delEducation} = require('../controllers/educationController');


// get education

router.get('/education', getEducation)

// // add education user
router.post('/education', addEducation)



// Specific route
router.get('/education/:id', getEducationId)


//update specific education
router.put('/education/update/:id', updateEducation)

//deleting education
router.delete('/education/:id', delEducation)
//end about



module.exports = router;