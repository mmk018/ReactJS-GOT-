import React, {useState, useEffect} from 'react'

function app() {

    const [count, setCount] = useState(0);
    const [data, refreshData] = useState([{name:'Ivan', sex: 'male'}])

   
    return (
        <div>
                <p>You have cliked {count} times</p>
                <button onClick={()=>{
                    setCount(count + 1)
                }}>Click on me</button>
                 <div></div>
                 {data.map((item, index) => {
                     return <div key={index}>
                         Name: {item.name}, sex: {item.sex}
                     </div>
                 })}
                 <button onClick={()=>{
                     refreshData(data => ([...data,{
                         name:'Alex',
                         sex:'male'
                     } ]))
                 }}>Add data</button>
            </div>
           
    )
}

export default app
