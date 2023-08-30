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

This project is an task manager application suitable for mobile and cross-platform applications. The following images are tested using Android Studio.


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
Tasks are colour-coded based on priority level (low, medium, high, and critical). This is automatic based on the input form and using ngClass directive.<br>
![Screen Shot 2023-08-30 at 12 53 06 PM](https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/67722cf9-c2a1-4d89-9a11-7718ab6a7255)


2) **Adding Tasks**<br>
A reactive form to adding a task is included on the third tab at the bottom of the application. This creates a POST HTTP request to the back end, then uses a GET HTTP request to display it on the front-end. <br>
 ![Screen Shot 2023-08-30 at 12 53 19 PM](https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/a86c470f-5403-493b-8b64-b541cacd6de5)
![Screen Shot 2023-08-30 at 12 53 34 PM](https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/0e43847f-76e9-4487-942d-a01d2fd46ced)

   
4) **Editing a Tasks**<br>
   Users can edit an existing task. By collecting the edit id from the url, the same form for adding a task is used. The task to be edited is autopopulated into the form for easy editing. The title is also dynamically changed from "Add" to "Edit" a task.<br>
5) **Using product id from the url to data-bind an individual product's details.** <br>
   Users can click on the title or thumbnail to view more about an individual product. The HTML was coded once, and used angular directive *ngFor to populate the appropriate product details<br>
 ![Screen Shot 2023-08-30 at 12 53 55 PM](https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/14ec90c4-f944-4cb2-bbbe-1900af628f99)


**Database Design**<br>
Below is a diagram of the table used for this application.<br>

<img width="152" alt="Screen Shot 2023-08-30 at 1 05 09 PM" src="https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/d7dd1827-0ba9-481d-b77e-bc8135b21c37">

<img width="1009" alt="Screen Shot 2023-08-30 at 1 05 22 PM" src="https://github.com/marwaelkelani/Task-Manager-Application/assets/126745070/f60a567d-4e2d-4579-836b-f95dd8f3dc36">
