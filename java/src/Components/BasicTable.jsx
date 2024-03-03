import React,{useMemo} from "react";
import {useTable} from "react-table/src";
import MOCK_DATA from './MOCK_DATA.json'
import {Columns} from "./Columns";

export const BasicTable=()=>{
    const columns=useMemo(()=>Columns,[])
    const data =  useMemo(()=> MOCK_DATA,[])
     const tableInstance=useTable({
        columns,
        data
    })


    return(
        <div>
<table>
    <thead>
    <tr>
        <th>

        </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td></td>
    </tr>
    </tbody>
</table>
        </div>
    )
}