import * as React from 'react';
import { useState } from 'react';

function Login(){

    const[email, setEmail] = useState<string>();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return(
        <div className='loginPageWrapper' style={{display:'flex', width:'100%', height:'100vh', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
            <div className='loginContainer' style={{display:'flex', maxWidth:'400px', maxHeight:'400px', width:'100%', height:'100%', backgroundColor:'lightgray', padding:'20px', boxSizing:'border-box', flexDirection:'column', gap:'30px'}}>
                
            </div>
        </div>
    );
}

export default Login