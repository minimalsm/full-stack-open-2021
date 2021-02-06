const Total = ({ parts }) => {
  const total = parts.map(part => part.exercises).reduce((sum, exercises) => sum + exercises)

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

export default Total