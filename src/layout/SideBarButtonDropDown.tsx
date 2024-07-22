import * as React from 'react';
import './layout.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface ISideBarButtonProps{
    icon:React.ReactNode;
    text:string;
    route:string;
}

function SideBarButtonDropDown(props: ISideBarButtonProps){

    const{
        icon,
        text,
        route
    } = props;

    const navigate = useNavigate();

    const location = useLocation();

    return(
        <div style={{display:'flex', flexDirection:'column', width:'100%', gap:'10px'}}>
            <div className={location.pathname === route ? 'sideBarButton activeSideBarButton' : 'sideBarButton'} onClick={() => navigate(`${route}`)}>
                {icon}<span style={{fontWeight:'600'}}>{text}</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', boxSizing:'border-box', padding:'0px 0px 0px 12px', gap:'3px'}}>
                <div style={{display:'flex', flexDirection:'row', width:'100%', gap:'10px', padding:'4px 8px', borderRadius:'8px', backgroundColor:'#80808036', boxSizing:'border-box'}}>
                    <FiberManualRecordIcon style={{width:'16px', height:'auto'}}/><span>New User</span>
                </div>
                <div style={{display:'flex', flexDirection:'row', width:'100%', gap:'10px', padding:'4px 8px', borderRadius:'8px', backgroundColor:'#80808036', boxSizing:'border-box'}}>
                    <FiberManualRecordIcon style={{width:'16px', height:'auto'}}/><span>New User</span>
                </div>
                <div style={{display:'flex', flexDirection:'row', width:'100%', gap:'10px', padding:'4px 8px', borderRadius:'8px', backgroundColor:'#80808036', boxSizing:'border-box'}}>
                    <FiberManualRecordIcon style={{width:'16px', height:'auto'}}/><span>New User</span>
                </div>
                <div style={{display:'flex', flexDirection:'row', width:'100%', gap:'10px', padding:'4px 8px', borderRadius:'8px', backgroundColor:'#80808036', boxSizing:'border-box'}}>
                    <FiberManualRecordIcon style={{width:'16px', height:'auto'}}/><span>New User</span>
                </div>
            </div>
        </div>
    )
}
export default SideBarButtonDropDown