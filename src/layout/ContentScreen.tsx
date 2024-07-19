import * as React from 'react';

interface IContentScreenProps{
    children:React.ReactNode;
}

function ContentScreen(props:IContentScreenProps){
    const {
        children
      } = props;
    return(
        <div style={{display:'flex', width:'100%', height:'100%', boxSizing:'border-box', padding:'25px', backgroundColor:'blue', alignItems:'center', justifyContent:'center'}}>
            {children}
        </div>
    );
}
export default ContentScreen;