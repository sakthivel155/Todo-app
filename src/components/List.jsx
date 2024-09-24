import './List.css'
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
const List = (list) => {

  return (
    <li className='list' key={list.id} style={list.checked ? {opacity:'30%' } : { opacity:'100%'}}>
   <input type="checkbox" checked={list.checked} onChange={() => list.handleCheckbox(list.id)} className='checklist' />
   <p className='content' style={list.checked ? { textDecoration: "line-through" } : {textDecoration: 'none'}}>{list.msg}</p>
   <button className='edit-btn default-btn' title='Edit Note' onClick={()=> list.handleUpdate(list.msg , list.id)}>
      <CiEdit  />
   </button>
    <button className='delete-btn default-btn' title='Delete Note'  onClick={() => list.handleDelete(list.id)}>
            <CiTrash />
      </button>
    </li>
  )
}


export default List