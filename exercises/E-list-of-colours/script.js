function listOfColours(colours) {
  const content = document.querySelector('#content');
  const select =  document.createElement('select');
  const  p = document.createElement('p');
  content.appendChild(select);
  content.appendChild(p);
  colours.forEach(element=>{
    const option = document.createElement('option');
    option.value = element;
    // console.log(option.value,'<<<<<<');
    option.innerText = element;
    select.appendChild (option);
  });
  p.innerText =`You have selected: ${select.value}.`
  p.style.color =select.value;
  select.addEventListener('change',()=>{
    p.style.color =select.value;
    p.innerText =`You have selected: ${select.value}.`
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
