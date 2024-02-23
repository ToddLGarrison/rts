import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import RefUserSearch from "./refs/RefUserSearch";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <div>
            <RefUserSearch />
            <EventComponent />
            <UserSearch />
            <GuestList />
        </div>
    );
};
    

root.render(<App />);