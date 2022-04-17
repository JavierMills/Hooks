



const initiaSate = [{
    id: 1,
    todo: 'Comparar iphone',
    done: false
}]

const ReducerTodo= (state = initiaSate, action) => {
//QUE CUANDO EL ACTION TENGA ALGO REALICE LA ACCION SI NO QUE NO HAGA NADA

    if(action?.type == 'agregar'){
        return [...state, action.payload];
    }
    return state;

}

let todos = ReducerTodo();

//no hacer push cuando e utilice reducer

const newTodo ={
    id: 2,
    todo: 'Comparar iphone',
    done: true,
}

const AddTodoAction ={
    type:"agregar",
    payload: newTodo,
}


todos = ReducerTodo(todos, AddTodoAction);


console.log(todos);