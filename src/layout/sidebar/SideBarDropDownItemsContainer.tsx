import * as React from 'react';
import '../layout.scss';
import { useLocation, useNavigate } from 'react-router-dom';


interface ISideBarButtonProps{
    children:React.ReactNode;
    parentPath:string;
}

function SideBarButtonDropDownItemsContainer(props: ISideBarButtonProps){

    const{
        children,
        parentPath
    } = props;

    const navigate = useNavigate();

    const location = useLocation();

    return(
        <div className={location.pathname.includes(parentPath) ? 'sideBarButtonDropDownContainer activeSideBarButtonDropDownContainer' : 'sideBarButtonDropDownContainer'}>
            {children}
        </div>
    )
}
export default React.memo(SideBarButtonDropDownItemsContainer)