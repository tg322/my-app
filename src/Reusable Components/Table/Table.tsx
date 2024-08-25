import * as React from 'react';

function Table(){

    return(
        <div id='table-wrapper' style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', backgroundColor:'white', borderRadius:'8px', boxSizing:'border-box'}}>
            <div id='filter-bar' style={{display:'flex', flexDirection:'row', width:'100%', boxSizing:'border-box', padding:'10px 20px', gap:'40px'}}>
                
                
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'10px'}}>
                    <span>All</span>
                    <div style={{display:'flex', backgroundColor:'lightblue', padding:'4px 8px', borderRadius:'8px', fontSize:'14px', fontWeight:'600'}}>
                        <span>25</span>
                    </div>
                </div>


                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'10px'}}>
                    <span>Active</span>
                    <div style={{display:'flex', backgroundColor:'lightblue', padding:'4px 8px', borderRadius:'8px', fontSize:'14px', fontWeight:'600'}}>
                        <span>25</span>
                    </div>
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'10px'}}>
                    <span>Pending</span>
                    <div style={{display:'flex', backgroundColor:'lightblue', padding:'4px 8px', borderRadius:'8px', fontSize:'14px', fontWeight:'600'}}>
                        <span>25</span>
                    </div>
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'10px'}}>
                    <span>Rejected</span>
                    <div style={{display:'flex', backgroundColor:'lightblue', padding:'4px 8px', borderRadius:'8px', fontSize:'14px', fontWeight:'600'}}>
                        <span>25</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Table