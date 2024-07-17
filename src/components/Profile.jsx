import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import {Navigate} from 'react-router-dom';
import axios from 'axios';


const AccountPage=()=>{
    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);
    async function logout(){
        await axios.post('./logout');
        setRedirect("/");
        setUser(null);
    }

    
    if(!ready){
        return 'Loading...';
    }

    if(ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }

    if(redirect){
        return <Navigate to={redirect}/>
    }

    return(
        <div className='text-center max-w-lg mx-auto'>
                        Logged in as {user.firstname} {user.lastname} ({user.email}) <br/>
                        <button className="text-white bg-red py-2 px-4 w-full rounded-full justify-around mt-8 gap-2 mb-8" onClick={logout}>Log out</button>
        </div>
    )
}

export default AccountPage;
