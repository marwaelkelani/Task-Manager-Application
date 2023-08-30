const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/task');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Test the database connection
config.authenticate().then(()=>{
    console.log('Database is connected!');
}).catch((err)=>{
    console.log(err)
});

//HTTP Routes

//Just for test
app.get('/', (req, res)=>{
    res.send('Welcome to my server!');
});

///Get all tasks
app.get('/tasks', (req,res)=>{
    Task.findAll().then((results)=>{
        res.status(200).send(results)
    }).catch((err)=>{
        res.status(500).send(err);
    })
});


//Create a task
app.post('/tasks', (req,res)=>{
    let formData = req.body;

    Task.create(formData).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
})


//Get Task based on ID
app.get('/tasks/:task_id', (req, res)=>{
    let taskId = req.params.task_id;
    
    Task.findByPk(taskId).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
});

//Edit student based on ID
app.put('/tasks/:task_id', (req, res)=>{
    let taskId = req.params.task_id;

    Task.findByPk(taskId).then((result)=>{
        if(result){
            // result.title = req.body.title;
            // result.description = req.body.description;
            // result.category = req.body.category;
            // result.task_date = req.body.task_date;
            // result.priority_level = req.body.priority_level;
            // result.progress_level = req.body.progress_level;

        Object.assign(result, req.body);

            result.save().then(()=>{
                res.status(200).send(result);
            });
        } else {
            res.status(404).send('Task not found');
        }
    }).catch((err)=>{
        res.status(500).send(err);
    });
})

const port = process.env.PORT || 3000;
//Set up the Web Server
app.listen(port, function(){
    console.log(`Server is running on port ${port}...`);
});