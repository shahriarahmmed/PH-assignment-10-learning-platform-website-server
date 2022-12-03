const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/courseCategory.json');
const courses = require('./data/coursesDetails.json');

app.get('/', (req, res) => {
    res.send('skill lab api running')
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
})


app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const course_Category = courses.filter(n => n.category_id === id);
    res.send(course_Category);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const individualCourse = courses.find(n => n._id === id);
    res.send(individualCourse);
})

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;
//     const course_category = courses.filter(n => n.courses === id);
//     console.log(course_category);
// })

app.listen(port, () => {
    console.log(`Skill lab server running ${port}`)
})