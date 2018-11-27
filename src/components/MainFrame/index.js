import React from 'react';

const MainFrame = (props) => {
    return (
        <div className="MainFrame">
            {/* <Header></Header> */}
            <div>
                {/* <SideBar></SideBar> */}
                <div>{ props.children }</div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default MainFrame;