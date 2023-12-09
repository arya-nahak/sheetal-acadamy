import React, { useContext } from 'react'
import LanguageContext from '../ContextData'

function Language_Form() {

    const {data} = useContext(LanguageContext)

    const obj = {
        "en" : {
            firstname : "First Name",
            lastname : "Last Name"
        },

        "hindi" : {

            firstname : "पहला नाम",
            lastname : "उपनाम"

        },

        "gj" : {

            firstname : "પ્રથમ નામ",
            lastname : "છેલ્લું નામ"

        }
    }



  return (
    <>
        <form>
            <label>{obj[data].firstname}</label>
            <input type='text' name='firstname'></input>
            <label>{obj[data].lastname}</label>
            <input type='text' name='lastname'></input>
        </form>
    </>
  )
}

export default Language_Form