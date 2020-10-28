import React,{useEffect, useState} from 'react'
import Arbitrary from './../Arbitrary'
const Friends = (props) => {
    const [friends,setFriends] = useState([1,2,3])
    


    return (
        <div>
            {friends&&friends.map(x=>(
                <Arbitrary key={x} path={'./routes/modules/friends/friend'}/>
            ))}
        </div>
    )
}
export default Friends
