import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import Imagerender from './Imagerender';

const Agtemp = () => {

    const gridRef = useRef()
    
    const [rowData,setRowData]  = useState()

    const [columndef,setcolumndef]=useState([
        {field:'id',filter:true},
        {field:'title'},
        {field:'thumbnailUrl',filter:true,cellRenderer:Imagerender}

    ])

    const defaultColDef = useMemo(()=>({
        sortable:true,
    }))


    const cellClickListener = useCallback((e)=>{
        console.log(e,"-----data----");
    },[])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(y=>y.json())
        .then(y=>setRowData(y))
    },[])


  return (
    <div className="ag-theme-alpine" style={{width: '100%', height: 500}}>
        <AgGridReact 
            ref={gridRef}
            rowData={rowData}
            columnDefs={columndef}
            defaultColDef={defaultColDef}
            animateRows={true}
            rowSelection='multiple'
            onCellClicked={cellClickListener}
        />
    </div>
  )
}

export default Agtemp

