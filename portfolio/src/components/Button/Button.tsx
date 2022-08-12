import React from 'react'
import { Button } from "@material-ui/core"
import './Button.css'

interface Props{
    text:string,
    icon?: any,
    clickEvent?: React.MouseEventHandler<HTMLButtonElement>
}

interface DownloadProps{
    text:string,
    icon?: any,
    download?: any,
    fileName?: string,
}

export const CustomButton = ({text, icon, clickEvent}:Props) => {
  return (
        <Button className='btn' endIcon={icon ? (<div className='btn_icon_container'>{icon}</div>) : null}>
           <span className='btn_text'>{text}</span>
         </Button> 
    )
}


export const CustomDownloadButton = ({text, icon, download, fileName}:DownloadProps) => {
    return (
        <Button className='btn' endIcon={icon ? (<div className='btn_icon_container'>{icon}</div>) : null} onClick={()=>{
                let element : HTMLElement = document.querySelector('.btn_text_download') as HTMLElement;
                element.click();
            }
        }>
            <span className='btn_text'>
                <a className="btn_text_download" href={download} download={fileName}>{text}</a>
            </span>
        </Button> 
    )
}
