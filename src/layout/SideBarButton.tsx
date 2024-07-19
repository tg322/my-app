import * as React from 'react';
import './layout.scss';

interface ISideBarButtonProps{
    icon:React.ReactNode;
    text:string;
    route?:string;
}

function SideBarButton(props: ISideBarButtonProps){

    const{
        icon,
        text,
        route
    } = props;

    return(
        <div className={'sideBarButton'}>
            {icon}<span style={{fontWeight:'600'}}>{text}</span>
        </div>
    )
}
export default SideBarButton