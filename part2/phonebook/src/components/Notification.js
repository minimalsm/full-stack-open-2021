const Notification = ({ message, setNotification }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="toast toast-success">
      <button 
      onClick={() => setNotification(null)}
      class="btn btn-clear float-right">
      </button>
      {message}
    </div>

  )
}

export default Notification