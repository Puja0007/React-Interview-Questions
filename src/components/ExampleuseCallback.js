import React,{useCallback, useState} from "react";


const ExampleuseCallback = ({name})=>{
    
    const callBack = useCallback(()=>{
        let i =0;

        console.log("Hello callback ",i++);
        
    },[name]);
    const printValue = ()=>{
        let i =0;

        console.log("Hello normal fun ",name);
    }
    return(
        <>
        <h1>Hi Puja</h1>
        <button onClick={printValue}>Click</button>
        <button onClick={callBack}>Click callBack</button>
        </>
    )
}

export default ExampleuseCallback;