import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectWrapperProps} from "../types/select";

const SelectWrapper: React.FC<SelectWrapperProps> = ({value = "", onChange, id, label, selectValues}) => {
    return (
        <FormControl fullWidth size="small" variant="standard">
            <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-select-label`}
                id={`${id}-select`}
                value={value}
                label={label}
                onChange={(e) => onChange(e.target.value)}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {selectValues.map(item =>
                    <MenuItem value={item.key} key={item.key}>
                        {item.value}
                    </MenuItem>)
                }
            </Select>
        </FormControl>
    )
}

export default SelectWrapper;