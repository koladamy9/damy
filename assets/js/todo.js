// DOM SELECTION
// 1. single Element

// let title = document.getElementById('title');
// title.innerText = 'Hello world';
// title.textContent = 'Hello Bro';
// title.innerHtml = '<h1>Hello Again</h1>';

// console.log(title.className);
// console.log(title.id);
// console.log(title.innerText);

// let title = document.querySelector('#title')
// console.log(title);

// 2. multiple-element-querySelector

// let li = document.getElementsByClassName('list-group-item')
// let li = document.getElementsByTagName('li');
// let li = document.querySelectorAll('.list-group-item:nth-child(odd)')
// let li1 = document.querySelectorAll('.list-group-item:nth-child(even)')

// console.log(li);
// // let ayo = Array.from(li);

// li1.forEach((lis) => {
//     lis.getElementsByClassName.background ='seagreen'
// });
// li2.forEach((lis) => {
//     lis.style.background = 'peru'
// })

// APP START
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const msg = document.querySelector('.msg');
const ul = document.querySelector('.list-group');
const clear = document.querySelector('.btn-dark');

// GENERAL LISTENER
loadALLEvent();

function loadALLEvent(){
    // add task
    form.addEventListener('submit',addTask);
    // clear task
    clear.addEventListener('click',clearTask);
    // delete task
    ul.addEventListener('click',deleteTask);
}

// add task function
function addTask(e){
    if (taskInput.value === '') {
        // message
        msg.innerHTML = 'please fill in a task';
        msg.classList.add('error');

        setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('error');
        },1000);
    

    } else {

        // create a list
        const lis = document.createElement('li');
        lis.className= 'list-group-item';
        lis.appendChild(document.createTextNode(taskInput.value));

        // create link
        const link = document.createElement('a');
        link.className = 'float-end text-danger';
        link.innerHTML = '<i class="bi bi-trash"></i>'

        lis.append(link);
        ul.appendChild(lis);

        // message
        msg.innerHTML = 'A task added successfully !';
        msg.classList.add('success');

        setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('success');
        },1000);

        // clear input field
        taskInput.value = ''
    }
    e.preventDefault();    
};

// clear task list function
function clearTask(e){
    e.preventDefault();
    ul.innerText = '';
    // message
    msg.innerHTML = 'Task cleared successfully !';
    msg.classList.add('success');

    setTimeout(function(){
        msg.innerHTML = '';
        msg.classList.remove('success');
    },1000);

}

// delete a particular task function
function deleteTask(e){
    if (e.target.parentElement.classList.contains('float-end')){
        e.target.parentElement.parentElement.remove()
        // message
        msg.innerHTML = 'Task cleared successfully !';
        msg.classList.add('success');

        setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('success');
        },1000);
    }
}







