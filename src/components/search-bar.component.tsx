import React from 'react';
import {SearchBarProps} from "../types/search-bar";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar: React.FC<SearchBarProps> = ({value, onChange}) => {
    return (
        <>
            <TextField id="outlined-basic" label="Query" variant="standard" value={value}
                       InputProps={{
                           endAdornment: (
                               <InputAdornment position="end">
                                   <SearchIcon/>
                               </InputAdornment>
                           )
                       }}
                       onChange={e => onChange(e.target.value)} fullWidth required/>
        </>
    )
}

export default SearchBar;