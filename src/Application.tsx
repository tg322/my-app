import * as React from 'react';

interface IApplicationProps{
    children:React.ReactNode;
}
function Application(props:IApplicationProps){
    const {
        children
      } = props;
    return(
        <div style={{display:'flex', flexDirection:'column', height:'100vh', width:'100vw'}}>
            {children}
        </div>
    );
}
export default Application;