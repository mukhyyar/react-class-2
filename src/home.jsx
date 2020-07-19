import React from  'react';

function Home(props){
    return(
    <h1>HOME | {props.menuName1} | {props.menuName2} | {props.menuName3}</h1>
    );
}

export default Home;