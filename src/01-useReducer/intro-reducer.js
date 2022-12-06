// En este archivo no se esta usando el useReducer, pero aqui esta la logica para entender como funcionan los reducers
// El useReducer es una simple arternativa del useState, esta hecho mas que todo para manejar estados con procesos mas grandes
// const [state, dispatch] = useReducer(reducer, initialArg, init); el init, se usa para almacenar una funcion, esto se usa mas que todo
// en casos donde el initialState necesite hacer un proceso mas pesado

const initialState = [
    {
        id: 1,
        todo: 'Comprar pan',
        done: false
    }
];

const todoReducer = ( state = initialState, action = {} ) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar harina',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction )


console.log(todos)