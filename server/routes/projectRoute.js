
const router = require("express").Router();
const projectSchema = require('../models/projectModel');

// get project user

router.get('/project', async (req, res)=> { //if this works we should return an empty array
    // res.send('this is the project get server test')
    try{
        const project = await projectSchema.find(req.body);
        res.json(project);
    }
    catch(err){
        res.status(500).json({msg:err})
    }
})


// // add project user
router.post('/project/', async (req, res)=> {
    // console.log(" post router")
    // res.send('this is the project post server test lets add')
    const {project_id, title, description, images} = req.body; //importing from models
    try {
        const project = new projectSchema({
        project_id, 
        title, 
        description, 
        images
        })

        // console.log("are we hitting here?")
        await project.save();
        // console.log("are we going through?")
        res.json({msg:"Project added"});

    } catch (err) {
        res.status(500).json({msg:err})
    }
})
// get a specific project
router.get('/project/:id', async(req, res)=> {
    // res.send('this is the project get server with Id')
    try {
        let project = await projectSchema.findById(req.params.id);
        res.json(project);
    } catch (err) {
        res.status(500).json({msg:err})
    }
})

router.put('/project/update/:id', async (req, res)=> {
    // res.send('this is the project edit server test')
    const {project_id, title, description, images} = req.body;
    try {
        const project = await projectSchema.findByIdAndUpdate(req.params.id,{
        project_id, 
        title, 
        description, 
        images

        })

        await project.save();
        res.json({msg:"Project updated"})

    } catch (err) {
        
    }
})

router.delete('/project/:id', async (req, res)=> {
    // res.json('this is the project delete server test')
    let project = await projectSchema.findByIdAndDelete(req.params.id)
    try {
        await project;
        res.json({msg:"project deleted"})
        
    } catch (err) {
        res.status(500).json({msg:err})
    }
})
//end project



module.exports = router;