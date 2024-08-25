import * as React from 'react';
import Table from '../Reusable Components/Table/Table';

function Users(){
    return(
        <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%'}}>
            <p>users</p>
            <Table/>
        </div>
    );
}
export default Users;