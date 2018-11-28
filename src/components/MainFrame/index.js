import React from 'react';
import Header from '../Header';

const MainFrame = (props) => {
    return (
        <div className="MainFrame">
            <Header logout={true} />
            <div>
                {/* <SideBar></SideBar> */}
                <div>{ props.children }</div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default MainFrame;