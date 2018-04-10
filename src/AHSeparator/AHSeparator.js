import React from 'react';

const styles = {
flex: '1 0 auto',
height: '1px',
backgroundColor: '#E5E5E5'
}


export const AHSeparator = props => (
  <div style={{...styles, ...props.style}}></div>

)
