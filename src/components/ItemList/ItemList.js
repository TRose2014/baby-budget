import React, {useState, useEffect} from 'react';
import {TextField , Button } from '@mui/material';
import { db } from '../../firebase.js';
import { collection , query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';

const q = query(collection(db, 'budget-babies'), orderBy('timestamp', 'desc'));

const ItemList = () => {
  const [todos,setTodos] = useState([]);
  const [input, setInput]=useState('');

    useEffect(() => {
      onSnapshot(q, (snapshot) => {
        setTodos(snapshot.docs.map(doc=>({
          id: doc.id,
          item: doc.data()
          })))
          })
          },[input]);

    const addTodo=(e)=>{
      e.preventDefault();
      addDoc(collection(db, 'budget-babies'), {
        todo: input,
        timestamp: serverTimestamp()
      })
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
          {console.log('items', todos)}
        {todos.map(item => <li key={item.id}>{item.item.todo}</li>)}
        </ul>
      </div>

    )
};

export default ItemList;