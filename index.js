const express=require('express');
const mongoose = require('mongoose')


const app = express();
app.use(express.json())


const http= require('http')
const events=require('./routes/api/events')
const users=require('./routes/api/users')
const applications = require('./routes/api/applications')
const locations = require('./routes/api/locations')
const PartnerRequest= require('./routes/api/PartnerRequest')
const feedbacks=require ('./routes/api/feedbacks')
const tasks= require('./routes/api/tasks')
const tasks_objects= require('./routes/api/tasks_objects')

const db = require('./config/keys').mongoURI


mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))



app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello friend</h1>
    <a href="/api/events" > to create an event</a>`)
})


app.get('/', (req, res) => {
    res.send(`<h1>Freelancer </h1>
    <a href="/api/locations">Locations</a>
       `);
})



app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello</h1>
    <a href="/api/PartnerRequest" > to initiate a request to organize an event</a>`)
})


app.get('/',(req,res)=>{
    res.send(`
    <h1>Hello</h1>
    <a href="api/tasks" >Go to member page</a>`)
})





app.use('/api/events', events)
app.use('/api/users', users)
app.use('/api/locations', locations)
app.use('/api/applications',applications)
app.use('/api/PartnerRequest',PartnerRequest)
app.use('/api/feedbacks', feedbacks)
app.use('/api/tasks',tasks)
app.use('/api/tasks',tasks_objects)



app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })
const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
 











