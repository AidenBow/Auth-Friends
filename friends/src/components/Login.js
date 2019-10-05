import React, {useState, useHistory} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const Login = (props) => {

    const [userLogin, setUserLogin] = useState({})

    const handleChanges = (e) => {
        let name = e.target.name 
        setUserLogin({ ...userLogin, [name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userLogin)
        axiosWithAuth()
            .post("./login", userLogin)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/protected');
            })
        // setUserLogin({username: "", password: ""})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={handleChanges}
                    // value={userLogin.username}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChanges}
                    // value={userLogin.password}
                />
                <button type="submit" >Let's Go!</button>  
            </form>     
        </div>
    )
}

export default Login