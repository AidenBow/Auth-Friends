import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const Friends = () => {
    const [friendList, setFriendList] = useState("")
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: ""
    })
    
    useEffect(() => {    
        axiosWithAuth()
            .get("/friends", localStorage.getItem('token'))
            .then(res => {
                setFriendList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleChanges = (e) => {
        let name = e.target.name 
        setNewFriend({ ...newFriend, [name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newFriend)
        axiosWithAuth()
            .post("./friends", newFriend)
            .then(res => {
                setFriendList(res.data)
                setNewFriend({
                    id: Date.now(),
                    name: "",
                    age: "",
                    email: ""
                })
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                onChange={handleChanges}
                value={newFriend.name}
                placeholder="name"
                />
                <input 
                type="text"
                name="age"
                onChange={handleChanges}
                value={newFriend.age}
                placeholder="age"
                />
                <input 
                type="text"
                name="email"
                onChange={handleChanges}
                value={newFriend.email}
                placeholder="email"
                />
                <button type="submit">+</button>
            </form>
            <div className="friendList">
                {friendList ? friendList.map(friend => {
                    return (
                        <div key={friend.id} className="friendItem">
                        <h3>{friend.name}</h3>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        </div>
                    )
                }) : <p>loading...</p> }
            </div>
        </div>
    )
}

export default Friends