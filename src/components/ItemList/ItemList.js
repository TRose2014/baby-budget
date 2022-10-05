import React, {useState} from 'react';
import {TextField , Button } from '@mui/material';


const ItemList = () => {
  const [todos,setTodos] = useState([
    'Create Blockchain App',
    'Create a Youtube Tutorial'
    ]);
    const [input, setInput]=useState('');

    const addTodo=(e)=>{
      e.preventDefault();
      setTodos([...todos,input]);
      setInput('');
    };

    return (
      <div>
        <h2> TODO List App</h2>
        <form>
          <TextField id="outlined-basic" label="Make Todo" variant="outlined" style={{margin:"0px 5px"}} size="small" value={input}
          onChange={e=>setInput(e.target.value)} />
          <Button variant="contained" color="primary" onClick={addTodo}  >Add Todo</Button>
        </form>
        <ul>
        {todos.map(todo => <li>{todo}</li>)}
        </ul>
      </div>

    )
  
  // return <h1>Item List</h1>;
};

export default ItemList;