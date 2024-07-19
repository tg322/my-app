import * as React from 'react';
import '../App.css';
import HomeIcon from '@mui/icons-material/Home';
import SideBarButton from './SideBarButton';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PersonIcon from '@mui/icons-material/Person';

function SideBar(){
    return(
        <div style={{display:'flex', boxSizing:'border-box', height:'100%', width:'285px', backgroundColor:'var(--white)', flexShrink:'0'}}>


            <div style={{display:'flex', boxSizing:'border-box', width:'100%', padding:'25px 10px 10px 10px', flexDirection:'column', gap:'4px'}}>
                <SideBarButton icon={<HomeIcon/>} text='Dashboard'/>
                <SideBarButton icon={<ConfirmationNumberIcon/>} text='Tickets'/>
                <SideBarButton icon={<PersonIcon/>} text='Users'/>
                <SideBarButton icon={<PersonIcon/>} text='Settings'/>
            </div>
            

        </div>
    );
}
export default SideBar;