import React, { useEffect } from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) =>{
    return {
      item:state.person.data
    }
}


function Persondata({item,dispatch}) {

  console.log(item);

  useEffect(()=>{
    dispatch({type:"GET_USERS_REQUESTED"})
  },[])

  return (
    <div>Persondata</div>
  )
  
}



export default connect(mapStateToProps) (Persondata)