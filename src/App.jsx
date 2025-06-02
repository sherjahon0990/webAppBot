import { useEffect } from "react";

const telegram  = window.Telegram.WebApp;

function App() {
  useEffect(() =>{
    telegram.ready()
  })
  return (
    <div className="Father">
      <h1>Hello</h1>
    </div>
  );
}
export default App;
