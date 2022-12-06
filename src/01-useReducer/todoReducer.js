// const [state, dispatch] = useReducer(reducer, initialArg, init); el init, se usa para almacenar una funcion, esto se usa mas que todo
// en casos donde el initialState necesite hacer un proceso mas pesado

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if( todo.id === action.payload ){ //Devuelve las propiedades del todo pero el done lo cambia
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })

        default:
            return initialState;
    }

}
