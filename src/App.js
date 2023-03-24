import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";
import { useEffect } from 'react';
const socket = io("ws://localhost:8000");

function App() {

  useEffect(() => {
    socket.emit("on_server", { data: 'Hi from client' });

    // receive a message from the server
    socket.on("to_client", (data) => {
      console.log('data from server==', data);
    });
  }, [])

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
