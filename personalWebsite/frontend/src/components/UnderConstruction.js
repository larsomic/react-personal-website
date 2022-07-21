import * as React from 'react';
import Header from "./Header.js"

const UnderConstruction = (props) => {
    let showHeader = null
    let randomNum = Math.floor(Math.random() * 100) % 9 + 1
    let source = './../static/images/construction/'+ randomNum +'.jpg'

    if (props.showHeader !== true){
        showHeader = <Header/>
    }
    return (
        <div>
            {showHeader}
            <img src={source} className='center' style={{'width':'50%', 'maxWidth':'475px'}}></img>
            <div className='underConstructionText'>This page is currently under construction.</div>
            <div className='underConstructionText'>Please check back soon to see this page!</div>
        </div>
  );
};
export default UnderConstruction;