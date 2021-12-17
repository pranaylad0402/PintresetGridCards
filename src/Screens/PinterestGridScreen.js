import React from 'react'
import GridCard from '../Components/GridCard'
function PinterestGridScreen() {
    
    return (
        <div style={styles.mainContainer}>
            <GridCard size="small"/>
            <GridCard size="medium"/>
            <GridCard size="large"/>
            <GridCard size="small"/>
            <GridCard size="medium"/>
            <GridCard size="large"/>
            <GridCard size="small"/>
            <GridCard size="medium"/>
            <GridCard size="large"/>
            <GridCard size="large"/>
            <GridCard size="small"/>
            <GridCard size="medium"/>
            <GridCard size="large"/>
            <GridCard size="small"/>
            <GridCard size="medium"/>
            <GridCard size="large"/>
        </div>
    )
}

const styles={
    mainContainer:{
        margin:0,
        padding:40,
        width:'80vw',
        position:'absolute',
        left:'50%',
        transform:'translateX(-46%)',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill,260px)',
        gridAutoRows:'16px'
    }
}

export default PinterestGridScreen;
