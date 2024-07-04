import Player from "./components/Player"

function App() {
  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player/>
        <Player/>
      </ol>
    </div>
   </main>
  )
}

export default App
