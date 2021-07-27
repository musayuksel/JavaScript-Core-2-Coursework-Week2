function shoppingList(arrayOfPeople) {
  // Write your code here...
  const content = document.querySelector('#content')
  const ul = document.createElement('ul');
  arrayOfPeople.forEach(item =>{
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  });
  content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
