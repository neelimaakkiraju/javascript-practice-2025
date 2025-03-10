let items = [];

function addItem() {
    let input = document.getElementById("itemInput");
    let value = input.value.trim();

    if (value) {
        items.push(value);
        input.value = "";
    } else {
        alert("Please enter an item.");
    }
}

function displayItems() {
    let list = document.getElementById("itemList");
    list.innerHTML = "";
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}