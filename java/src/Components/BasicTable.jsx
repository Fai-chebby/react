import React,{useMemo} from "react";
import {useTable} from "react-table/src";
import MOCK_DATA from './MOCK_DATA.json'
import {Columns} from "./Columns";

export const BasicTable=()=>{
    const columns=useMemo(()=>Columns,[])
    const data =  useMemo(()=> MOCK_DATA,[])
    useTable({
        columns:Columns,
        data:MOCK_DATA
    })


    return(
        <div>

        </div>
    )
}