import React from 'react'
import { useState,useEffect } from 'react';
import USERDATA from "./Data.json";
import "./User.css";
import CommonDash from './CommonDash';
function AdminDashboard() {
    const userList=['user1','user2','user3','user4','user5']
    const [user,setUser]=useState('user1'); 
    return(<div style={{display:'flex'}}>
        <CommonDash datas={USERDATA[user]}userName={user}/>
        <div className="admin">
        <ul>
            {userList.map((i)=><li onClick={()=>setUser(i)}>Change User To: {i}</li>)}
        </ul>
        </div>
        </div>
    )
}


export default AdminDashboard
