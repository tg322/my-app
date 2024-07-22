import * as React from 'react';
import '../layout.scss';
import { useLocation, useNavigate } from 'react-router-dom';

interface ISideBarButtonProps{
    text:string;
    route:string;
}

function SideBarDropDownItem(props: ISideBarButtonProps){

    const{
        text,
        route
    } = props;

    const navigate = useNavigate();

    const location = useLocation();

    return(
        <div className={location.pathname.includes(route) ? 'sideBarButtonDropDownItem activeSideBarButtonDropDownItem' : 'sideBarButtonDropDownItem'} onClick={() => navigate(`${route}`)}>
            <span>{text}</span>
        </div>
    )
}
export default React.memo(SideBarDropDownItem)