
import PropTypes from 'prop-types';
import './Inputlist.css'
const Inputlist = ({ addList , inputChanges, setChanges }) => {
    

    function handleSumbit(e){
      e.preventDefault();
      addList(inputChanges);
      setChanges('')
    }


  return (
    <main>
        <form onSubmit={(e)=> handleSumbit(e)}>
            <input type="text" value={inputChanges} onChange={(e)=>setChanges(e.target.value)} name="" id="" placeholder="Add task" required className="todo-input"/>
            <button type="submit" className="todo-enter-btn">Add</button>
        </form>
    </main>
  )
}

Inputlist.propTypes = {
  addList: PropTypes.func.isRequired,
  inputChanges: PropTypes.number.isRequired,
 setChanges: PropTypes.func.isRequired,
};

export default Inputlist