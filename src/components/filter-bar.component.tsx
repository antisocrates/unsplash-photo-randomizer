import React from 'react';
import {Color, FilterBarProps, Orientation} from "../types/filters";
import SelectWrapper from "./select.component";
import {Stack} from "@mui/material";

const FilterBar: React.FC<FilterBarProps> = ({value, onChange}) => {
    return (
        <Stack
            direction="row"
            spacing={2}
            minWidth="100%"
        >
            <SelectWrapper id={"color"} label={"Color"} value={value.color}
                           selectValues={Object.entries(Color).map(item => ({key: item[0], value: item[1]}))}
                           onChange={(e) => onChange({...value, color: e})}/>
            <SelectWrapper id={"orientation"} label={"Orientation"} value={value.orientation}
                           selectValues={Object.entries(Orientation).map(item => ({key: item[0], value: item[1]}))}
                           onChange={(e) => onChange({...value, orientation: e})}/>
        </Stack>
    )
}

export default FilterBar;