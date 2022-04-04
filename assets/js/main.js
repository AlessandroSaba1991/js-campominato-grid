function generate_grid_with_number(node_selector, number_of_cells, dimension_grid, create_tag, class_name) {
    const node = document.querySelector(node_selector);
    for (let i = 1; i <= number_of_cells; i++) {
        const element = document.createElement(create_tag);
        element.classList.add(class_name, dimension_grid);
        const text = i;
        element.innerHTML = text;
        node.append(element);
    }
}

function select_cell_list(class_name) {
    const cell_list = document.querySelectorAll(class_name);
    return cell_list;
}

function active_cell(element, colour) {
    const cell_list = select_cell_list(element);

    for (let i = 0; i < cell_list.length; i++) {
        const cell = cell_list[i];
        cell.addEventListener("click", function() {
            this.classList.toggle(colour);
        });
    }
}

const element_form = document.querySelector("form");
element_form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById('site_main').classList.toggle('d-none')
    const difficolta = document.getElementById("difficolta").value;
    switch (true) {
        case difficolta === "facile":
            generate_grid_with_number(".cells", 100, "x10", "div", "square");
            active_cell(".square", "violet");
            break;
        case difficolta === "medio":
            generate_grid_with_number(".cells", 81, "x9", "div", "square");
            active_cell(".square", "violet");
            break;
        case difficolta === "difficile":
            generate_grid_with_number(".cells", 49, "x7", "div", "square");
            active_cell(".square", "violet");
            break;
    }
});