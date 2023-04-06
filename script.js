
let groceries=[];

function addItem() {
    const itemInput = document.getElementById("item");
    const item = itemInput.value.trim();
    if (item !== '') {
        groceries.push(item);
        itemInput.value = '';
        displayList();
    }
}

function removeItem(index) {
    groceries.splice(index, 1);
    displayList();
}

function displayList() {
    const list = document.getElementById("list");
    list.innerHTML = '';
    groceries.forEach((item, index) => {
        const li = document.createElement("li");
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.onclick = () => removeItem(index);
        li.innerText = item;
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}