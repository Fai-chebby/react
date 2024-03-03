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
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }=tableInstance


    return(
        <div>
<table {...getTableProps}>
    <thead>
    <tr>
        <th>

        </th>
    </tr>
    </thead>
    <tbody {...getTableBodyProps}>
    <tr>
        <td></td>
    </tr>
    </tbody>
</table>
        </div>
    )
}