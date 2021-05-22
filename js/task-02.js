

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

  
  

  const ingredientsEl = ingredients.map(ingredient => {
    const itemsEl = document.createElement("li");
    itemsEl.innerHTML = ingredient;
    listEl.append(itemsEl);
    return itemsEl;
  });

  



   
 


