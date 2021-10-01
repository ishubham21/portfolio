const router = require('express').Router();

const achivements = require('./assets/achivements.json')
const community = require('./assets/community.json')
const education = require('./assets/education.json')
const experience = require('./assets/experience.json')
const projects = require('./assets/projects.json')
const volunteering = require('./assets/volunteering.json')

//all the routes here
router.get('/achivements', (req, res) => {
    res.send(achivements)
})

router.get('/community', (req, res) => {
    res.send(community)
})

router.get('/education', (req, res) => {
    res.send(education)
})

router.get('/experience', (req, res) => {
    res.send(experience)
})

router.get('/projects', (req, res) => {
    res.send(projects)
})

router.get('/volunteering', (req, res) => {
    res.send(volunteering)
})

// //sending an error if the required page doesn't exist
router.get('*', (req, res) => {
    res.status(404).send("The resource you are looking for does not exist.");
})

module.exports = router