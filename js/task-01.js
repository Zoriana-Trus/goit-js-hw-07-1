const totalCategories = document.querySelectorAll('#categories .item')
console.log (totalCategories);
console.log (`В списке ${totalCategories.length} категории.`)

const getItemsEl = [...totalCategories]
.map (
    categories => `Категория: ${categories.firstElementChild.textContent}
  Количество элементов: ${categories.lastElementChild.children.length}`
)

.join ('\n')

console.log (getItemsEl )






  