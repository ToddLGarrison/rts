import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
// import RefUserSearch from "./refs/RefUserSearch";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);


const BugComponent = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('Initial message');
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      setCount(count - 1);
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    };
  
    const handleSubmit = () => {
      setMessage('Message submitted: ' + message);
    };
  
    return (
      <div>
        <h2>Debugging Challenge</h2>
        <p>Current count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
        <p>{message}</p>
      </div>
    );
  };

  const App = () => {
    return (
        <div>
            <BugComponent />
        </div>
    )
  }

export default App;

root.render(<App />);



// const App = () => {
//     return (
//         <div>
//             <RefUserSearch />
//             <EventComponent />
//             <UserSearch />
//             <GuestList />
//         </div>
//     );
// };