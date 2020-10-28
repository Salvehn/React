import React from 'react'
import {Routes, Route, useParams, useRoutes,useNavigate,Outlet,useResolvedLocation,useLocation} from 'react-router-dom';
import '../css/Wrapper.css'
import '../css/Nav.css'
import '../css/Main.css'
const routes=[
    {path:'/',module:'profile'},
    {path:'/chats',module:'chats'},
    {path:'/friends',module:'friends'},
    {path:'/profile',module:'profile'},
    {path:'/login',module:'login'}
]
import Arbitrary from './Arbitrary'
import Profile from './routes/profile'
import Friends from './routes/friends'
const Wrapper = ( props ) => {
    const Side = (props)=>{
        let navigate = useNavigate();
        let location = useLocation()
        function handleClick(e) {
            navigate(e);
        };
        return (
            <div className="nav_menu">

                {routes.map(x=>(<button className={`nav_btn ${location.pathname==x.path?('activeLink'):('')}`} onClick={()=>handleClick(`${x.path}`)}>{x.module}</button>))}
                <hr className="hr"/>
                <button  className="nav_btn">logout</button>
            </div>
        )
    }
    const Main = (props)=>{
        let element = useRoutes([{path:'/',children:routes.map(x=>(
            {path:x.path,element: <Arbitrary key={x.path} path={`./routes/${x.module}`}/>}
        ))}])

        return <div className="main">{element}</div>
    }

    return (
        <div className="grid_wrapper">
            <Side/>
            <Main/>
        </div>
    )

}
export default Wrapper
