import React,{useEffect, useState} from 'react'
import Arbitrary from './../Arbitrary'
const Chats = (props) => {
    const [chats,setChats] = useState([1,2,3,4,5,6])



    return (
        <div>
            {chats&&chats.map(x=>(
                <Arbitrary key={x} path={'./routes/modules/chats/chat'}/>
            ))}
        </div>
    )
}
export default Chats
