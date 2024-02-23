import { useState, useRef, useEffect } from 'react';

const users = [
    {name: 'Todd', age: 28},
    {name: 'Calvin', age: 12},
    {name: 'Ziggy', age: 54},
    {name: 'Tilly', age: 34},
]

const RefUserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number | undefined }>();

    useEffect(() => {
        if (!inputRef.current) {
            return
        }
        inputRef.current.focus();
    }, [])

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })

        setUser(foundUser);
    }

    return (
        <div>
            User Search
            <input ref={inputRef} value={name} onChange={event => setName(event.target.value)} />
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}

export default RefUserSearch