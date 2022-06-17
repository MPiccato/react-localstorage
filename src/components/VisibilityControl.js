export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {
    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar todas las tareas?')) {
            cleanTasks();
        }
    }
    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <label>Tareas completadas</label>
                <input
                    className="form-check-input"
                    checked={isChecked}
                    type="checkbox"
                    onChange={(e) => setShowCompleted(e.target.checked)}
                />
            </div>
            <button
                className="btn btn-danger btn-sm"
                onClick={handleDelete}>
                Clear
            </button>

        </div>


    )
}