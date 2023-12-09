import logo from "./logo.svg";
import "./App.css";
import Appointment from "./Component/Appointment";
import AddData from "./React_Memo_using/AddData";
import Signup from "./Formik/Signup";
// import Login from "./Formik/Login";
import NewRegistraion from "./Formik/NewRegistraion";
import LanguageContext from "./Context/ContextData";
import { useState } from "react";
import Datausecontext from "./Context/Whrpass/Datausecontext";
import Language_Form from "./Context/Whrpass/Language_Form";
import Using_Memo from "./UseMemoRCT/Using_Memo";
import Counter_data from "./REDUXX/Views/Counter_data";
import DisplayDataexe2 from "./REDUXX/Views/DisplayDataexe2";
import Product from "./REDUXX/Views/Product";
import UserT from "./REDUXX/Views/UserT";
import Counter_sg from "./Redux_Saga/View/Counter_sg";
import Persondata from "./Redux_Saga/View/Persondata";
import PersonData2 from "./Redux_Saga/View/PersonData2";
import UniForm from "./Redux_Saga/View/Form/UniForm";
import New_Counter from "./ReduxToolkit/Views/New_Counter";
import DataPosts from "./ReduxToolkit/Toolkit_with_thunk/Views/DataPosts";
import Dataget from "./ReduxToolkit/Toolkit_with_thunk/Views/Dataget";
import Header from "./ReduxToolkit/Toolkit_with_thunk/Views/Header";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Data1 from "./React Router Dom/Data1";
import Home from "./React Router Dom/Home";
import Data2 from "./React Router Dom/Data2";
import Data3 from "./React Router Dom/Data3";
import About from "./React Router Dom/About";
import DisplayData from "./Fetch/DisplayData";
import Login from "./Fetch/Login";

function App() {

  const [data,setdata] = useState('en')

  
  return (
    <>
      <div className="App">
        {/* <Appointment/> */}
        {/* <AddData/> */}
        {/* <Signup/> */}
        {/* <Login/> */}
        {/* <NewRegistraion/> */}
      </div>

    {/* <LanguageContext.Provider value={{data,setdata}}>
      <Datausecontext/>
      <Language_Form/>
    </LanguageContext.Provider> */}

    {/* <Using_Memo text = "Imported JSX component Using_Memo must be in PascalCase or SCREAMING_SNAKE_CASE Imported JSX component Using_Memo must be in PascalCase or SCREAMING_SNAKE_CASE Imported JSX component Using_Memo must be in PascalCase or SCREAMING_SNAKE_CASE Imported JSX component Using_Memo must be in PascalCase or SCREAMING_SNAKE_CASE Imported JSX component Using_Memo must be in PascalCase or SCREAMING_SNAKE_CASE "/> */}
    
    {/* <Counter_data/> */}
    {/* <Product/> */}
    {/* <UserT/> */}

    {/* <Counter_sg/> */}

    {/* <Persondata/> */}

    {/* <PersonData2/> */}

    {/* <UniForm/> */}
    {/* <New_Counter/> */}
    {/* <DataPosts/> */}


    {/* <Header/> */}
    {/* <Dataget/> */}





    {/* <DisplayDataexe2/> */}
<Login/>
<DisplayData/>


    {/* <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/about" element={<About/>}>
          <Route path='data2' element={<Data2/>}/>
          <Route path=':secureid' element={<Data3/>}/>
        </Route>
        <Route path="data1" element={<Data1/>}></Route>
      </Routes>
    </Router> */}

    </>
  );
}

export default App;
