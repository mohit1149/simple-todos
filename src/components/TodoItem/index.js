// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteLine} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteLine(id)
  }
  return (
    <li className="listed-item">
      <p className="title-name">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
