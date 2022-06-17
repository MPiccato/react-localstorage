import { useState, useEffect } from 'react';


export const TaskCreator = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState('');

    const handleSubmit = (e) => {
        // Evito que se refresquen los datos
        e.preventDefault();
        // Guardo la data en el localStorage con la key tasks
        createNewTask(newTaskName);
    }

    return (
        <form onSubmit={handleSubmit} className='my-2 row'>
            <div className='col-8'>
                <input
                    type="text" placeholder='Entra una tarea...'
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    className='form-control'
                />
            </div>
            <div className='col-4'>
                <button 
                    className='btn btn-primary btn-sm'
                    onClick={() => handleSubmit}>Grabar tarea
                </button>
            </div>
        </form>
    )
}