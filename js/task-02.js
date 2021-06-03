

  const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы"
  ];

  const listEl = document.querySelector('#ingredients');
  console.log(listEl);

  
  

  const ingredientsEl = ingredients => {
    return ingredients.map(ingredient => {
    const itemsEl = document.createElement("li");
    itemsEl.innerHTML = ingredient;
    return itemsEl;
  });
};

  const items = ingredientsEl(ingredients);
  listEl.append(...items);
  console.log (items);
  


 

  

  



   
 


