import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MovieCard from '../../MovieApp/MovieCard'


const mapStateToProps = (state) =>{
    return {
        item: state.person.data
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getData: ()=>dispatch({type:'GET_USERS_REQUESTED'})
    }
}

function PersonData2({item,getData}) {
  
    console.log(item)
    useEffect(()=>{
        // alert("fdf");
        getData();

    },[])

    return (
    <>

    {/* <div>{item.Title}</div> */}
    <MovieCard item={item}/>

        {/* {
            item.map((e,i)=>{
                return(
                    <div key={i}>
                        <div>{e.id}</div>
                        <div>{e.name}</div>
                        <div>{e.username}</div>
                        <div>{e.phone}</div>
                    </div>
                )
            })
        } */}
    </>
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (PersonData2)