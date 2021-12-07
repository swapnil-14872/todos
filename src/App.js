import './App.css';
import React, { useState,useEffect } from 'react';
import Todo from './app1';
import db from './firebase'
import { Button, FormControl, Input, InputLabel,List,ListItem, ListItemText } from '@material-ui/core';
import firebase from 'firebase';
function App() 
{
  // let n=prompt("enter ur name");

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => 
  {
    db.collection('todos').orderBy('Timestamp','desc').onSnapshot(
      snapshot=>
      {
        setTodos(snapshot.docs.map(doc=> 
          ({
            id:doc.id,
            todo:doc.data().Text
          })))
      }
      );
   
  }, [])

  const addTodo = (event) => 
  {
    event.preventDefault();
    console.log('I m working')
    db.collection('todos').add(
      {
        Text:input,
        Timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    setTodos([...todos, input]);
    setInput('');
  }
  return (

    
    <div className="App">
      <h1>Todo list🎯🎯</h1>
      <form>

        <FormControl>
          <InputLabel>
            ☑️Write A Todo
          </InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        <Button disabled={!input} variant="contained" onClick={addTodo} color="primary">
          Add Todo
        </Button>
        {/* <button onClick={addTodo} type="submit"> Add Todo</button> */}
      </form>
      <ul>
        { todos.map(todo => (
           <Todo todo={todo} />
          //  <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
