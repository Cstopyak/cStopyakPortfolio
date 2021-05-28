const aboutSchema = require("../models/aboutModel");
//from lines from 6-12 this is dynamically imported from Route to controller to make the route cleaner.


//get about user
exports.getAbout = async (req, res) => {
    const about = await aboutSchema.find();

    try {
        res.json(about);
    } catch (error) {
        res.status(500).json({ msg: 'server problem getting about' })
    }

}


//add about user
exports.addAbout = async (req, res) => {
    const { about } = req.body;

    try {

        const newAbout = new aboutSchema({
            about
        })

        await newAbout.save();
        res.json(newAbout);

    } catch (error) {
        res.status(500).json({ msg: 'server problem when adding' })
    }


}

//get specific about id
exports.getAboutId = async (req, res) => {

    try {
        const about = await aboutSchema.findById(req.params.id);
        res.json(about);

    } catch (error) {
        res.status(500).json({ msg: 'server problem getting specific id' })
    }


}

//update specific about user by id
exports.updateAbout = async (req, res) => {
    const { about } = req.body;

    try {
        const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {

            about

        });

        let results = await newAbout.save();
        await results;
        res.json({ msg: 'Item updated' })

    }
    catch (error) {
        res.status(500).json({ msg: 'server problem when updating about' })
    }



}

// delete specific about 
exports.delAbout = async (req, res) => {
    const about = await aboutSchema.findByIdAndDelete(req.params.id)

    about;

    res.json({ msg: " About item deleted" })

}
