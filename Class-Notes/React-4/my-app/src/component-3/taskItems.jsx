function App() {
    const [tasks, setTasks] = useState([]);
    const [formState, setFormState] = useState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  
    function handleChange(event) {
      const { name, value, type, checked } = event.target;
  
      setFormState((prevFormState) => ({
        ...prevFormState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  
    // ... rest of the code
  }

  





  function App() {
    // ... (previous code)
  
    function handleSubmit(event) {
      event.preventDefault();
      
      if (formState.task.trim() !== "" && formState.taskAssignedTo !== "") {
        setTasks((prevTasks) => [
          ...prevTasks,
          { ...formState, id: Date.now() }, 
        ]);
        setFormState({
          task: "",
          completed: false,
          taskAssignedTo: "",
        });
      }
    }
  
    // ... (rest of the code)
  }

  


  function TaskItem({ item, onDelete, onToggle }) {
    const { task, completed, taskAssignedTo } = item;
  
    const handleDelete = () => {
      onDelete(item.id);
    };
  
    const handleToggle = () => {
      onToggle(item.id);
    };
  
    return (
      <div style={{ color: completed ? 'green' : 'black' }}>
        <p>{task}</p>
        <p>Assigned to: {taskAssignedTo}</p>
        <p>Status: {completed ? "Completed" : "Incomplete"}</p>
        <button onClick={handleDelete}>Delete Task</button>
        <button onClick={handleToggle}>Toggle Task</button>
      </div>
    );
  }
  
  export default TaskItem;
  




  function App() {
    // ... (previous code)
  
    function handleDelete(id) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  
    function handleToggle(id) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    }
  
    return (
      <>
        {/* ... (previous code) */}
        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </>
    );
  }
  