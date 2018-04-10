import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export const AHMultiSelect = ({style,...props}) => 
    <Select
        name="form-field-name"
        style={{margin: 0, marginLeft: 0, marginRight: 0}}
        wrapperStyle={style}
        multi
        {...props}
    />;
