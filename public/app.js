(function (window) {
    const todoList = document.querySelector('#todoList')
    const userItemInput = document.querySelector('#newItemInput')
    const addTodoBtn = document.querySelector('#addItemBtn')

    fetch('/todos')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(todo => displayTodos(todo))
    })

    // Function that displays list of todos
    const displayTodos = function (todo) {
        // Creates li container for each todo item
        const itemDiv = document.createElement('li')
        itemDiv.classList.add('item-div')

        // Creates input for checkmark and appends to item-div
        const itemCheckmark = document.createElement('input')
        itemCheckmark.classList.add('form-check-input')
        itemCheckmark.type = 'checkbox'
        // itemCheckmark.setAttribute('id', `${todo.id}`)
        itemDiv.appendChild(itemCheckmark)

        // Creates p for todo item and appends to item-div
        const item = document.createElement('p')
        item.appendChild(document.createTextNode(`${todo.title}`))
        item.classList.add('todo-item')
        itemDiv.appendChild(item)

        // Creates edit task input
        const editTaskInput = document.createElement('input')
        editTaskInput.classList.add('form-control', 'edit-user-task-input')
        editTaskInput.type = 'text'
        editTaskInput.value = todo.title

        // Creates edit button and appends to item-div
        const itemEditBtn = document.createElement('button')
        itemEditBtn.innerHTML = '<i class="fas fa-edit"></i>'
        itemEditBtn.classList.add('edit-item-btn', 'btn', 'btn-light')
        itemDiv.appendChild(itemEditBtn)

        // Creates save button
        const itemSaveBtn = document.createElement('button')
        itemSaveBtn.innerHTML = '<span>Save</span>'
        itemSaveBtn.classList.add('btn', 'btn-light')

        // Creates delete button and appends to item-div
        const itemDeleteBtn = document.createElement('button')
        itemDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
        itemDeleteBtn.classList.add('delete-item-btn', 'btn', 'btn-danger')
        itemDiv.appendChild(itemDeleteBtn)

        // Append itemDiv to todoList
        todoList.appendChild(itemDiv)
    }

})(window)