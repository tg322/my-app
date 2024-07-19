import * as React from 'react';

interface IDisplayProps{
    children: React.ReactNode;
}

function Display(props:IDisplayProps){
    const{
        children
    } = props

    return(
        <div style={{display:'flex', flexDirection:'row', height:'100%', width:'100%'}}>
            {children}
        </div>
    )
}

export default Display;