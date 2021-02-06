const Total = ({ parts }) => {
  const total = parts.map(part => part.exercises).reduce((sum, exercises) => sum + exercises)

  return (
    <div>
      <p><strong>Total exercises: {total}</strong></p>
    </div>
  )
}

export default Total