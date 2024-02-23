import React, { useState } from "react";

const users = [
    {name: 'Todd', age: 36 },
    {name: 'Rebecca', age: 37 },
    {name: 'Tom', age: 28 },
    {name: 'Taylor', age: 32 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{ name: string, age: number} | undefined>()
    
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
    
        setUser(foundUser)
    };


    return (
        <div>
            User Search
            <input value={name} onChange={event => setName(event.target.value)} />
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}

export default UserSearch