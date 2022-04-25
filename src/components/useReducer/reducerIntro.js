import AppReducer from './AppReducer';


<AppReducer />
const initiaSate = [{
    id: 1,
    todo: 'Comparar iphone',
    done: false
}]


const ReducerTodo = (state = initiaSate, action) => {
//QUE CUANDO EL ACTION TENGA ALGO REALICE LA ACCION SI NO QUE NO HAGA NADA

    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }
    return state;

}

let todos = ReducerTodo();

//no hacer push cuando e utilice reducer


// creamos el nuevo todo
const newTodo ={
    id: 2,
    todo: 'Comparar iphone',
    done: true,
}

// creamos el segundo todo
const newTodo2 ={
    id: 3,
    todo: 'Comprar fruta',
    done: true,
}

//agrgamos el nuevo todo al action
const AddTodoAction ={
    type:"agregar",
    payload: newTodo,
}

//agrgamos el nuevo todo al action
const addNewTodo2 ={
    type: "agregar",
    payload: newTodo2,
}

//invocamos la funcion y mandamos los nuevos todos
todos = ReducerTodo(todos, AddTodoAction);
todos = ReducerTodo(todos, addNewTodo2);

console.log(todos);