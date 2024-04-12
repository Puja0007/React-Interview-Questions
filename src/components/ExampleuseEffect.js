import React,{useEffect, useState} from "react";


const ExampleuseEffect = ()=>{
    const [users, setUsers] = useState("");

    const fetchUsers = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data;
    };


    useEffect(()=>{
        (async ()=>{
            const users = await fetchUsers();
            setUsers(users);
        })();

        return ()=>{

        }

    });
    return(
        <>
        <h1>Hi Puja</h1>
        </>
    )
}


export default ExampleuseEffect;