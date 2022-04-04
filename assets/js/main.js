/**
 * ###Creare una griglia numerata
 * @param {String} node_selector Il nodo dove appendere la griglia
 * @param {Number} number_of_cells Quante celle vuoi creare
 * @param {String} dimension_grid Assegna una classe per la dimensione della griglia (x10,x9,x7)
 * @param {String} create_tag Scegliere il tag da creare
 * @param {String} class_name Scegliere la classe da assegnare al tag
 */
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

/**
 * ###Seleziona tutti gli elementi della DOM con il nome inserito
 * @param {String} class_name Scegliere l'elemento da selezionare
 * @returns una lista con tutti gli elementi presenti nel DOM con il nome inserito
 */
function select_cell_list(class_name) {
    const cell_list = document.querySelectorAll(class_name);
    return cell_list;
}

/**
 * ###Data una lista di elementi al click gli cambia lo sfondo
 * @param {String} element Inserire elemento da selezionare
 * @param {String} colour Inserire il colore che si vuole aggiungere dopo il click
 */
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