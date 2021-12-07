import React, { useState,useEffect } from "react";
import { List, ListItem, ListItemText, Button , Modal, makeStyles} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./app1c.css";
import db from "./firebase";

const name = "swapnil";

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props)
 {    
     const classes=useStyles();
     const [open, setOpen] = useState(false);
     const [input, setInput] = useState('');
     const handleOpen= ()=>
     {
         setOpen(true);
     };
     const handleClose= ()=>
     {
         setOpen(false);
     };
     const updateTodo= ()=>
     {
         db.collection('todos').doc(props.todo.id).set({
                   Text:input
         }, {merge :true});
         setOpen(false);
     };
  return (
    <>
      <Modal
        open={open}
        onClose={e=>setOpen(false)}
      >
          <div className={classes.paper}>
             <h1>Edit Your Todo</h1> 
             <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
             <Button onClick={updateTodo}>Update Todo</Button>
          </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline⏰⏰"
          ></ListItemText>
        </ListItem>
        <button onClick={e => setOpen(true)}> Edit </button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
