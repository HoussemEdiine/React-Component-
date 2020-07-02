import React from 'react';
import './App.css';
import FullName from './components/FullName'
import Adresse from './components/adresse'
import ProfilPhoto from './components/ProfilPhoto'
export default function Main(){
    return(
        <div className='App'>
            <FullName/>
            <ProfilPhoto/>
            <Adresse/>
        </div>
        
    )
}


