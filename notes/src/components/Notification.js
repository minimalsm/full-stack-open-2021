const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='row'>
    <div className="error">
    {message}
    </div>
    </div>
  )
}

export default Notification