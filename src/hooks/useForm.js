import { useState } from "react";


export const useForm = (initialValue = {}) => {

    const [formState, setFormState] = useState(initialValue)

    const onInputChange = ({ target }) => {

        const { name, value } = target; //Me tira por ejemplo el name de mi input como el username, y el value el valor que tiene
        setFormState({
            ...formState,
            [name]: value //Propiedades computadas
        })
    }

    const onResetForm = () => {
        setFormState( initialValue );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }

}
