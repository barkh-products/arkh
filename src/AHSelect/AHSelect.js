import React from 'react';

import styles from './AHSelect.css'

export const AHSelect = props => (<select className={styles.select} {...props} style={props.style}>
{props.children} 
</select>)
