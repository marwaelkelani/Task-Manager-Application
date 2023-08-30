# Task-Manager-Application

**Dependencies**
<ul>
   <li>Express</li>
   <li>Sequelize</li>
   <li>MariaDB</li>
   <li>CORS</li>
</ul>

**Getting Started**
<ul>
   <li>Install all dependencies using the <code> npm install </code> command</li>
   <li>Run the backend webserver using <code> node index.js </code> when you are in the server-side directory</li>
   <li>Run the front-end webserver using <code> ionic serve </code> when you are in the taskmobile directory</li>
</ul>

This project is a task manager application suitable for cross-platform applications. The following images are tested using Android Studio and is displayed as a mobile application.


**Technology Stack:** <br>
<ul>
   <li>TypeScript</li>
   <li>HTML</li>
   <li>CSS</li>
   <li>Ionic</li>
   <li>Angular</li>
   <li>MariaDB</li>
   <li>Node.js</li> 
</ul>



Some of the key highlights include:

1) **Viewing All Tasks From The Database**<br>
Tasks are colour-coded based on priority level (low, medium, high, and critical). This is automatic based on the input stored in the database and using ngClass directive in the frontend.<br>
![Screen Shot 2023-08-30 at 12 53 06 PM](https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/b369f1cb-3d3a-4727-9f1a-6106cd07fc79)



2) **Adding Tasks**<br>
A reactive form is used to add a new task to the list. It is included on the third tab at the bottom of the application. This creates a POST HTTP request to the back end, then uses a GET HTTP request to display the new on the front-end under the list of tasks (tab 2). <br>
![Screen Shot 2023-08-30 at 12 53 19 PM](https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/0ebd9b58-d55f-4bc5-983b-c61f6a46d70f)

![Screen Shot 2023-08-30 at 12 53 34 PM](https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/62ab64c3-7f31-48ac-9e93-5c1dd6a0b11b)

   
4) **Editing a Task**<br>
   Users can edit an existing task. By collecting the edit id from the url, the same form for adding a task is used to edit an existing task. The task to be edited has the information autopopulated into the form for easy editing. The title is also dynamically changed from "Add Task" to "Edit Task".<br>

 ![Screen Shot 2023-08-30 at 12 53 55 PM](https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/e3c4d756-14ae-4b88-9c07-1fec57239f74)


**Database Design**<br>
Below is a diagram of the table used for this application.<br>
<img width="152" alt="Screen Shot 2023-08-30 at 1 05 09 PM" src="https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/78c757e7-56cd-4cb5-b38d-d6030da35294">

<img width="1009" alt="Screen Shot 2023-08-30 at 1 05 22 PM" src="https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/2e870630-cc2d-490f-b0fd-f52b70c10677">


