import * as React from 'react';
import '../../App.css';
import HomeIcon from '@mui/icons-material/Home';
import SideBarButton from './SideBarButton';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SideBarButtonDropDownWrapper from './SideBarDropDownWrapper';
import PersonIcon from '@mui/icons-material/Person';
import SideBarButtonDropDownItemsContainer from './SideBarDropDownItemsContainer';
import SideBarDropDownItem from './SideBarDropDownItem';

function SideBar(){
    return(
        <div style={{display:'flex', boxSizing:'border-box', height:'100%', width:'285px', backgroundColor:'var(--white)', flexShrink:'0'}}>


            <div style={{display:'flex', boxSizing:'border-box', width:'100%', padding:'25px 10px 10px 10px', flexDirection:'column', gap:'4px'}}>
                <SideBarButton icon={<HomeIcon/>} text='Dashboard' route='/dashboard'/>
                <SideBarButton icon={<ConfirmationNumberIcon/>} text='Tickets' route='/tickets'/>
                {/* <SideBarButtonDropDown icon={<PersonIcon/>} text='Users' route='/users'/> */}

                <SideBarButtonDropDownWrapper>
                    <SideBarButton icon={<PersonIcon/>} text='Users' route='/users'/>
                    <SideBarButtonDropDownItemsContainer parentPath='/users'>
                        <SideBarDropDownItem text='Add New User' route='/users/add-new-user'/>
                        <SideBarDropDownItem text='Account' route='/users/account'/>
                    </SideBarButtonDropDownItemsContainer>
                </SideBarButtonDropDownWrapper>

                <SideBarButton icon={<ConfirmationNumberIcon/>} text='Settings' route='/settings'/>
            </div>
            

        </div>
    );
}
export default SideBar;