import * as React from 'react';
import '../layout.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface ISideBarButtonProps{
    children:React.ReactNode;
}

function SideBarButtonDropDownWrapper(props: ISideBarButtonProps){

    const{
        children
    } = props;

    const navigate = useNavigate();

    const location = useLocation();

    return(
        <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
            {children}
        </div>
    )
}
export default SideBarButtonDropDownWrapper