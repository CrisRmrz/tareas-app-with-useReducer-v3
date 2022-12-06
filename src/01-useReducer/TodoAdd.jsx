import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, description, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if( description.length < 2 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit} >
            <input
                type="text"
                placeholder='Que hay que hacer?'
                className='form-control'
                name='description'
                value={description}
                onChange={onInputChange}
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'>
                Agregar
            </button>
        </form>
    )
}