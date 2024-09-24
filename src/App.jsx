import Header from './components/Header'
import Inputlist from './components/Inputlist'
import List from './components/List'
import './App.css'

import { useState } from 'react'

const App = () => {


const [ lists , setList ] = useState(()=> JSON.parse(localStorage.getItem("todo_list")) || [] )

const [inputChanges, setChanges] = useState('');

  function handleCheckbox(id){
   const finalList = lists.map((item)=> {
       return item.id === id ?  { ...item , checked:!item.checked} : item ;
    })
     setList(finalList);
     localStorage.setItem("todo_list", JSON.stringify(finalList))
  }
  function handleDelete(id){
    const finalList = lists.filter((item) => item.id !== id )
  
    setList(finalList)
    localStorage.setItem("todo_list", JSON.stringify(finalList))
  }

  function handleCreate(input){
      const newId = lists.length > 0 ? Math.max(...lists.map(item => item.id)) + 1 : 1;

      const finalList = [...lists, {id: newId, checked: false, msg: input}];
      setList(finalList);

      localStorage.setItem("todo_list", JSON.stringify(finalList))
  }

  function handleUpdate(editValue,editId){
    if(inputChanges.length <= 0){
      setChanges(editValue)
      handleDelete(editId)
    }else {
      alert("The input contain text")
    }
  }
  return (
    <div>
      <Header />
       <Inputlist 
        addList = {handleCreate}
        inputChanges = {inputChanges}
        setChanges = {setChanges}
       />
      <ul className='todo-list-wrapper'>
         {lists.map((list) => {
            return(
              <List 
                key = {list.id}
                id = {list.id}
                checked = {list.checked}
                msg = {list.msg}
                handleCheckbox = {handleCheckbox}
                handleDelete = {handleDelete}
                handleUpdate = {handleUpdate}
              />
             )
            
         })}
      </ul>
    </div>
  )
}



export default App