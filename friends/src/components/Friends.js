import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const Friends = () => {
    const [friendList, setFriendList] = useState("")
    
    useEffect(() => {    
        axiosWithAuth()
            .get("/friends", localStorage.getItem('token'))
            .then(res => {
                setFriendList(res.data)
            })
    }, [])

    console.log(friendList)
    return(
        <div>
            {friendList && friendList.map(friend => {
                return <p key={friend.id}>{friend.name}</p>
            })}
        </div>
    )
}

export default Friends