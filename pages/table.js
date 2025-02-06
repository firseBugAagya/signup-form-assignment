const UserTable = () => {
    let local
    let data
    if (typeof window !== "undefined") {
        local = localStorage.getItem("Form-UserData");
        data = JSON.parse(local)
    }
    return <div>
        <div>
            {data?.map(i => (
                <div>
                    <li>
                        <ul>
                            {i.fName}
                        </ul>
                        <ul>
                            {i.lName}
                        </ul>
                    </li>
                    <li>
                        <ul>
                            {i.email}
                        </ul>
                    </li>
                </div>
            ))
            }
        </div>
    </div>
}


export default UserTable;