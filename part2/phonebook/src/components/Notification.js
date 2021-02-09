const Notification = ({ message, setNotification, errorState }) => {
  if (message === null) {
    return null
  }

  const notificationType = errorState 
  ? 'toast-error'
  : 'toast-success'

  return (
    <div className={`toast ${notificationType}`}>
      <button 
      onClick={() => setNotification(null)}
      className="btn btn-clear float-right">
      </button>
      {message}
    </div>

  )
}

export default Notification