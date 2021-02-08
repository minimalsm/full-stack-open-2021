const Note = ({ note, toggleImportance }) => {
  const label = note.important 
    ? 'make not important'
    : 'make important'

  return (
    <li>
      {note.content}
      <button className='button button-small button-clear' onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note