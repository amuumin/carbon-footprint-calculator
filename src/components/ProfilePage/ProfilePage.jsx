import React from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ProfilePage() {
  const history = useHistory();



    const residence = useSelector((store)=>{
        return store.residence
    })
    const vehicle = useSelector((store)=>{
        return store.vehicle
    })
    const worktrip = useSelector((store)=>{
        return store.worktrip
    })
    const distance = useSelector((store)=>{
        return store.distance
    })
    const othertrips = useSelector((store)=>{
        return store.othertrips
    })
    const meat = useSelector((store)=>{
        return store.meat
    })
    const takeout = useSelector((store)=>{
        return store.takeout
    
    })
    const shop = useSelector((store)=>{
        return store.shop
    })
    const flights = useSelector((store)=>{
        return store.flights
    })


    //create object

    let values = {
       residence,
       vehicle,
       worktrip,
       distance,
       othertrips,
       meat,
       takeout,
       shop,
       flights
    }

  
 const editProfile = () => {
  // removeData();

      console.log('inside profile')
  
      history.push('/Residence');
    }


  

  return (
    <div className="container">
      <h4>Profile</h4>

      
      <p> I drive a: {vehicle === 7 ?
       <p>Conventional Car</p>
      :
     <></>
    }  {vehicle === 4 ?
      <p>Electric Car</p>
     :
    <></>
   }</p>
      <p> 
        I live in a(n): {residence === 10 ?
       <p>apartment</p>
      :
     <></>
    } 
    {residence === 20 ?
       <p>House</p>
      :
     <></>
    } 
  
    
    
    
    </p>

      <p> I live {distance} miles away from my job </p>
      <p> I am {meat === 20 ?
       <p>Plant Based</p>
      :
     <></>
    } {meat === 10 ?
      <p>Vegan</p>
     :
    <></>
   } </p>
    <button onClick={editProfile}>Edit Profile</button>
    </div>

  );
}

export default ProfilePage;
