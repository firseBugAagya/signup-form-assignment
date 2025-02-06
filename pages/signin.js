import { useState } from "react";
import Link from "next/link";

const Signin = () => {
    const [userData, setUserData] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
    })

    const handleData = (e, item) => {
        setUserData({
            ...userData,
            [item]: e,
        });
    }
    const items = [];
    const handleSubmit = () => {
        items.push(userData)
        localStorage.setItem("Form-UserData", JSON.stringify(userData))
    }


    return (
        <div>
            <input type="name" onChange={(e) => handleData(e.target.value, 'fName')} />First Name
            <br />
            <input type="name" onChange={(e) => handleData(e.target.value, 'lName')} />Last Name
            <br />
            <input type="email" onChange={(e) => handleData(e.target.value, 'email')} />Email
            <br />
            <input type="text" onChange={(e) => handleData(e.target.value, 'password')} />Password
            <br />
            <input type="checkbox" onChange={(e) => handleData(e.target.checked, 'admin')} />Admin
            <input type="checkbox" onChange={(e) => handleData(e.target.checked, 'user')} />User
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br />
            <br />
            <hr />
            <Link href={"./signup"}>
                Click for Signup!!!
            </Link>
        </div>
    )
}

export default Signin