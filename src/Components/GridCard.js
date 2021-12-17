import React from 'react'

function GridCard(props) {
    return (
        <div style={{
            ...styles.card,
            ...styles[props.size]
            }}>
            
        </div>
    )
}

const styles = {
    card: {
    margin: '15px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'lightPink'
    },
    small: {
    gridRowEnd: 'span 16'
    },
    medium: {
    gridRowEnd: 'span 25'
    },
    large: {
    gridRowEnd: 'span 30'
    }
   }
export default GridCard;
