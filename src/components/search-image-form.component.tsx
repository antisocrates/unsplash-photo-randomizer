import React, {useState} from 'react';
import {Filters} from "../types/filters";
import SearchBar from "./search-bar.component";
import FilterBar from "./filter-bar.component";
import {Box, Button, Stack} from "@mui/material";
import {ColorId, Orientation} from "unsplash-js";
import {getRandomIntInclusive} from "../utils/math";
import {SearchImageFormProps} from "../types/search-image-form";
import {pruneObject} from "../utils/common";

const SearchImageForm: React.FC<SearchImageFormProps> = ({unsplashService, onChange}) => {
    const [searchBarValue, setSearchBarValue] = useState("");
    const [searchFilters, setSearchFilters] = useState<Filters>({});

    const getRandomPhoto = (event: React.SyntheticEvent) => {
        event.preventDefault();
        unsplashService.getPhotos(searchBarValue, 1, 1, searchFilters.color as ColorId, searchFilters.orientation as Orientation).then((response) => {
            if (unsplashService.handleError(response) || unsplashService.handleEmptyResponse(response)) {
                onChange(null);
                return;
            }
            unsplashService.getPhotos(searchBarValue, getRandomIntInclusive(1, response.response?.total_pages as number),1,searchFilters.color as ColorId, searchFilters.orientation as Orientation)
                .then(
                    randomResponse => {
                        if (unsplashService.handleError(randomResponse)) {
                            onChange(null);
                            return;
                        }
                        onChange(randomResponse.response?.results[0] || null);
                    }
                )
        });
    };

    return (
        <Stack
            component="form"
            onSubmit={getRandomPhoto}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3.5}
            my={3}
            px={2}
            maxWidth="620px"
            width="100%"
        >
            <SearchBar value={searchBarValue} onChange={(x: string) => {
                    setSearchBarValue(x);
            }}/>
            <FilterBar value={searchFilters} onChange={(x: Filters) => {
                    pruneObject(x);
                    setSearchFilters(x);
            }}/>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                gap={3}
                pt={2}
            >
                <Button type="button" variant="contained" color="error" sx={{width: 130}} onClick={() => {
                    setSearchBarValue("");
                    setSearchFilters({});
                    onChange(null);
                }}>
                    Clear
                </Button>
                <Button type="submit" variant="contained" sx={{width: 130}}>
                    Search
                </Button>
            </Box>
        </Stack>
    )
}

export default SearchImageForm;