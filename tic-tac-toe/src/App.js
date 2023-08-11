function Square({ value }) {
  return <button className="square">{value}</button>
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value='1'></Square>
        <Square value='1'></Square>
        <Square value='1'></Square>
      </div>
      <div className="board-row">
        <Square value='1'></Square>
        <Square value='1'></Square>
        <Square value='1'></Square>
      </div>
      <div className="board-row">
        <Square value='1'></Square>
        <Square value='1'></Square>
        <Square value='1'></Square>
      </div>
    </>
  )
}
