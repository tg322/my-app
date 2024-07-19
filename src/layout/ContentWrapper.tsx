import * as React from 'react';

interface IContentWrapperProps{
    children:React.ReactNode;
}

function ContentWrapper(props:IContentWrapperProps){
    const { 
        children
    } = props
    return(
        <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', backgroundColor:'orange', maxWidth:'1200px'}}>
            {children}
        </div>
    );
}
export default ContentWrapper;