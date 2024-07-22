import * as React from 'react';
import '../layout.scss';
import { useLocation, useNavigate } from 'react-router-dom';

interface ISideBarButtonProps{
    icon:React.ReactNode;
    text:string;
    route:string;
}

function SideBarButton(props: ISideBarButtonProps){

    const{
        icon,
        text,
        route
    } = props;

    const navigate = useNavigate();

    const location = useLocation();

    return(
        <div className={location.pathname.includes(route) ? 'sideBarButton activeSideBarButton' : 'sideBarButton'} onClick={() => navigate(`${route}`)}>
            {icon}<span style={{fontWeight:'600'}}>{text}</span>
        </div>
    )
}
export default SideBarButton