const listContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

let lists = [];

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;

  if (listName === null || listName === undefined) {
    return;
  }

  const list = createList(listName);
  newListInput.value = null;
  lists.push(list); //inluindo o valor que está em list no array
  render();
});

function createList(name) {
  return { id: Date.now().toString(), name: name };
}

function render() {
  clearElement(listContainer);
  lists.forEach((list) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.innerHTML = list.name;
    listContainer.appendChild(item);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
