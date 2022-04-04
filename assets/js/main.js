function generate_grid(node_selector, number_of_cells, create_tag, class_name) {
    const node = document.querySelector(node_selector);
    for (let i = 0; i < number_of_cells; i++) {
        const element = document.createElement(create_tag);
        element.classList.add(class_name)
        node.append(element)
    }
}

generate_grid('.cells', 100, 'div', 'square_10')