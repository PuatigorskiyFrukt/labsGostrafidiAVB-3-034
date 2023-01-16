var button = document.querySelectorAll(".button");
function filter (categorie) {
    var items = document.querySelectorAll(".item[data-categories]");

    items.forEach(item => {
        var categoriesItem = item.dataset.categories.split(', ');
        var result = categoriesItem.find(it => {
            return categorie === it;
        });
        if (item.classList.contains("block_show"))
            item.classList.remove("block_show")
        else
            item.classList.remove("block_hide")

        item.classList.add(result ? "block_show" : "block_hide");
    })
}
button.forEach(it => {
    it.addEventListener("click", () => { filter(it.dataset.categories) });
});