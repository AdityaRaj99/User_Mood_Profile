import React, { useState } from 'react';
import './Modal.css';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux'
export const LoginModal = ({ show, setShowModal, user }) => {

    const history = useHistory();
    const [checkOutState, setCheckoutSatate] = useState("first");
    const [userId,setUserId]=useState("");
    const [password,setPassword]=useState("")
    const [adminKey,setAdminKey]=useState("")
    const dispatch =useDispatch();

    function AdminLogin() {
        if(adminKey==='ADMIN'){
           
        dispatch({type:'admin',payload:'ADMIN'})
        
        history.push('/AdminDashboard')
        
        }
    }
    
    function UserLogin(){
        if((userId==='user1'||userId==='user2'||userId==='user3'||userId==='user4'||userId==='user5')&&password==='12345'){
      
        dispatch({type:'user',payload:userId})
        
        history.push('/UserDashboard')
}
    }

    return (
        <div className="modal-wrapper" hidden={!show}>
            <div className='modal-container' hidden={checkOutState === "first" ? false : true}>
                <div className="modal-header">
                    <span onClick={() => { setShowModal(false); setCheckoutSatate("first") }} className="close-modal-btn">x</span>
                </div>
                <div className="modal-content">
                    <input value={userId} onChange={(e)=>setUserId(e.target.value)} type="text" placeholder="Username" />
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
                    <button onClick={UserLogin}>User Login</button>
                    <div className="modal-footer">
                    <button onClick={() => { setCheckoutSatate("second") }} className="btn-cancel">Admin Login</button>
                    </div>
                </div>
            </div>


            <div className='modal-container2' hidden={checkOutState === "first" ? true : false}>
                
                <button onClick={() => { setShowModal(false); setCheckoutSatate("first") }} className="close-payment-btn">x</button>
                <div className="details">
                <h3>Admin Login</h3>
                    <input value={adminKey} onChange={(e)=>setAdminKey(e.target.value)} type="password" placeholder="Admin Key" />
                    <button onClick={AdminLogin} className="Login">Login</button>
                </div>
            </div>
        </div>
    )
};