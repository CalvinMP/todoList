import './Todo.css';

function Todo() {
    return (
      <div className="background">
          <h1> To do list </h1>
              
          <div id='addTask'>
              <input type='text' placeholder='Tâche à ajouter...' id='taskInput'/>
              <input type='date' placeholder='Date de fin...' id='dateFin'/>
              <button id='ajouter'> ajouter </button>
            </div>

          <div className='todo_list'>

            <ul id='list'>

            </ul>

          </div>

      </div>

    );
  }
  
  export default Todo;
  