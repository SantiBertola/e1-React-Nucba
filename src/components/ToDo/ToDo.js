import React, { useState } from 'react'
import { Wrapper, InputWrapperStyled, InputStyled, ButtonContainerStyled, ResetButtonContainerStyled, ListWrapperStyled, ListStyled } from './ToDoStyles'
import { FaRegTimesCircle } from "react-icons/fa";


const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [newToDo, setNewToDo] = useState('');
  
    const handleNewToDoChange = (e) => {
      setNewToDo(e.target.value);
    };
  
    const handleNewTodoSubmit = (e) => {
      e.preventDefault();
      if (newToDo.trim()) {
        setTodos([...todos, newToDo]);
        setNewToDo('');
      } else {
        window.alert('Por favor, ingrese una tarea antes de agregarla.');
      }
    };
  
    const handleToDoDelete = () => {
      setTodos([]);
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };


  
    return (
      <Wrapper>
        <h1>Ingrese su tarea</h1>
        <form onSubmit={handleNewTodoSubmit}>
          <InputWrapperStyled>
            <InputStyled type="text" value={newToDo} onChange={handleNewToDoChange} />
            <ButtonContainerStyled type="submit">Agregar</ButtonContainerStyled>
          </InputWrapperStyled>
        </form>
        <ListWrapperStyled>
          {todos.map((todo, index) => (
            <ListStyled key={index}>{todo} <FaRegTimesCircle style={{color: 'crimson', cursor: 'pointer'}} onClick={() => handleDelete(index)}/>  </ListStyled>
          ))}
        </ListWrapperStyled>
        {todos.length > 0 && (
          <ResetButtonContainerStyled onClick={handleToDoDelete}>Vaciar tareas</ResetButtonContainerStyled>
        )}
      </Wrapper>
    );
  };
  
  export default ToDo