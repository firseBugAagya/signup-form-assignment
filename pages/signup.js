import { useState } from "react"
import { useRouter } from "next/router";

const Signup = () => {
    const router = useRouter();

    let local
    let data
    if (typeof window !== "undefined") {
        local = localStorage.getItem("Form-UserData");
        data = JSON.parse(local)
    }

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const handleData = (e, item) => {
        setUserData({
            ...userData,
            [item]: e.target.value,
        });
    }
console.log(data);
    const navigatingPage = () => {
        if (data.admin) {
            router.push('./table')
        } else {
            router.push("./dashboard")
        }
    }


    return (
        <div>
            <input type="text" onChange={(e) => handleData(e, 'email')} />Email
            <br />
            <input type="text" onChange={(e) => handleData(e, 'password')} />Password
            <br />
            <button onClick={navigatingPage}>Submit</button>
        </div>
    )
}

export default Signup