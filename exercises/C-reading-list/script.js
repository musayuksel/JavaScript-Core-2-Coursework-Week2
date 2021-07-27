function readingList(books) {
  const content = document.querySelector('#content');
  const ul = document.createElement('ul');
  ul.style.width ='350px';
  books.forEach(element => {
    const li = document.createElement('li');
    li.style.listStyle ='none';
    const p = document.createElement('p');
    const img = document.createElement('img');
    p.innerText = `${element.title} by ${element.author}`;
    if(element.alreadyRead){
      li.style.backgroundColor = 'green'
    } else {
      li.style.backgroundColor = 'red';
    }
    if(element.title === 'The Design of Everyday Things'){
    img.src = 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
    } else if(element.title === 'The Most Human Human') {
      img.src = 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg';
    } else if (element.title === 'The Pragmatic Programmer'){
      img.src ='https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg';
    }
    img.style.width ='200px'
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  });
  content.appendChild(ul);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);