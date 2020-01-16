function pageLoaded() {
    var button = document.getElementById('add-item');
    var items = document.getElementById('items');

    button.onclick = function() {
        var itemsCount = items.children.length;
        var lastItem = items.children[itemsCount - 1];
        var lastNumber = lastItem.textContent.replace("Item ", '');
        var newNumber = parseInt(lastNumber) + 1;
        var li = document.createElement('li');
        li.textContent = 'Item ' + newNumber;
        li.classList.add("item");
        items.appendChild(li);
    };
}
