import React, {useState} from "react";
import {Dialog} from "primereact/dialog";
import {InputText} from'primereact/dialog'

export const Home=()=>{
   /* const [image, setimage ] =useState('')*/
    return(
        /*<div className='profile_img text-center p-4'>
    <div className='flex flex-column justify-content-center align-item'>
<img style={{
    width:"200px",
    height:"200px",
    borderRadius:"50%",
    objectFit:"cover",
    border:"4px solid green",

}} src={profile} alt=""/>
        <label htmlFor="" className="mt-3 font-semibold text-5xl"> Faith</label>

        <InputText
            type=''
            accept="/image/*"
            onchange={(event)=>(const file=event.target.files[0];
                if (file && file.type.substring(0,5)==="image"){
                setimage(file);
            }

                )}
        />
    </div>
        </div>*/
        <div className="wrapper">
            <div className="accordian">
                {data.map((item,i)=>(
                    <div className="item">
                        <div className="title">
                            <h2></h2>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}