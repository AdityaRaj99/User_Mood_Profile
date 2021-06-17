import React from 'react'
import { useState,useEffect } from 'react';

import "./User.css";
import USERDATA from "./Data.json";
import {useSelector} from 'react-redux';
import CommonDash from './CommonDash';

function UserDashboard() {
    const role=useSelector(state=>state.userName)

    const datas = USERDATA[role]
   return( <CommonDash datas={datas} userName={role}/>)
   
}

export default UserDashboard;
