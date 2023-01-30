<hr />
<h3>--Next builds--</h3>

<hr />
<!-- start Python.js here -->
<p id="PyVar" name="PyVar">
    Python variables 
</p>
<hr />
<p id="PyList" name="PyList">
    Python List of strings or variables with matching variables
</p>
<hr />
<!-- nextbuilds.js here -->
<h3>Javascript Class Methods</h3>
<hr />
<h3>Typescript</h3>
<hr />
<h3>Javascript Error handeling</h3>
<hr />
<h3>Javascript Cookies</h3>
<hr />
<h3>JSON, APIs, Local storage, Ajax</h3>
<hr />
<h3>Node.js</h3>
<hr />
<h3>React, JSX, Components, event handlers, state, hooks</h3>
<hr />
<h3>Angular</h3>
<hr />
<h3>Vue</h3>
<hr />
<h3>Python, Tkinter, Kivy, MySql, Mongodb</h3>
<hr />
<h3>PHP, SQL, MySLQ, LAMP Stack</h3>
<hr />
<h3>C/C++</h3>
<hr />
<h3>Java</h3>
<hr />
<h3>Perl</h3>
<hr />
<h3>Ruby</h3>
/*
*********************************************************************
To Do list
Comment out before production

********************************************************************
*/
const toDoText = document.getElementById('toDoText');
const comp = document.getElementById('comp');
const stuffDone =[
    '50 add "copy to clip board" for id="singleInput" to copy whatever is in id="ArraysObjtLoops" this may need to be uniquely sized',
    `potentially individually style this button as needed`,
    `remove hidden on singleInput clipboard button for arrays and objects --possibly first item`,
    `write the function to copy and paste`,
    `When clicking off arrays, objects, dictionaries, hash, etc... ArraysObjtLoops, singleInput, arrayObjBox are all hidden SEE NEXT FOR SOULTION`,
    `THE SOLUTION IS, at the start of ever function hide everything thee unhide as needed`,
    `testing solution once chrome can work`,
    `If works delete unused code`,
    `remove input option --for now`,
    `add scrollbar`,
    `make notes on new click off logic and rebuild functions accordingly`,
    `remove let someVar = document.get...`,
    `12`,
    `change opacity on typing of list section from 0 to 95 on keydown`,
    `add load sound`,
    `Javascript Object={} with matching const and let variables and prebuilt for of loop`,
    `add onload chime`,
    `fix size of ArraysObjtLoops`,
    `update text validation`,
    'remove test methods for validation',
    `find new load noise`,
    `Create full screen detection and warning message in div that this program functions best on 1200 dpi or better`,
    'Javascript const document etc with matching event listners',
    `Add Perl 3 types of variables`,
    `basic hook VARIABLE writer`,
];

const stuffToGetDone = [
    `Javascript class methods `,
    `Update eleName.addEventListener React State object`,
    `add state, render, return for React using a function that maps over state`,
    `Update eleName.addEventListener Perl Arrays, Hash and loops`,
    `basic hook ARRAY writer with export, import `,
    `Add Javascript Node.JS file  SQL log in and CRUD`,
    `Add Javascript Node.JS MongoDB log in and CRUD`,
    `Add Javascript API JSON asycn and await that just need a URL and a loop + console.Log`,
    `Add Python List, loops, and Variables`,
    `Add Python Dictionaries, loops, and Variables`,
    `Add Python API that just need a URL and a loop + console.Log`,
    `Add PHP variables`,
    `Add PHP arrays and loops`,
    `App PHP class object structure`,
    `remove this to do list`,
    `Launch listmaker plus`,
    `test listmaker on live site`,
    `create data lost warning for clicking on "clear list and refreshing the browser`,
    `*** Post Launch stuff ***`,
    `write some perl`,
    'List comprehension',
    `create an imported var libarary /module`,
    `add map and foreach functions to arrays and object loops`,
    `use an array of functions to do complete input validation`,
    `Use PHP to create file templates`,
    `Add PHP file system for CGI`,
    `Add PHP file SQL log in and CRUD`,
    `Add PHP file MongoDB log in and CRUD`,
    `Add Python file system for CGI`,
    `Add Python file system for SQL log in and CRUD`,
    `Add Python file system for MongoDB log in and CRUD`,
    `Add Python file system for basic game`,
    `Add Perl file system for CGI`,
    `Add Perl file system for SQL log in and CRUD`,
    `Add Perl file system for MongoDB log in and CRUD`,
    `Add c variables`,
    `Add c arrays and loops`,
    `App c++ class object structure`,
    `Add c file system for CGI`,
    `Add c API JSON asycn and await that just need a URL and a loop + console.Log`,
    `Add c file SQL log in and CRUD`,
    `Add c file MongoDB log in and CRUD`,
    `Add c file system for basic game`,
    `Java, Ruby, R, Dart, etc...`,
];

stuffToGetDone.forEach(item =>{
    const litag = document.createElement('li');
    litag.innerHTML = item;
    toDoText.appendChild(litag);
});

stuffDone.forEach(item =>{
    const litag = document.createElement('li');
    litag.innerHTML = item;
    comp.appendChild(litag);
});


<div class="todo" id="getDone">
To Do Items
<ol id="toDoText"></ol>
<hr />
Completed:
<ol id="comp"></ul>
</div>