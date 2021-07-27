function todoList(todos) {
  const content = document.querySelector('content');
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  todos.forEach(element =>{
    const li = document.createElement('li');
    li.innerText = element.todo;
    ul.appendChild(li);
    li.style.textDecoration ='none';
    //line-through
    li.addEventListener('click', ()=>{
      if(li.style.textDecoration === 'none'){
        li.style.textDecoration = 'line-through';
      } else {
        li.style.textDecoration = 'none';
      } 
    });

  });
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);