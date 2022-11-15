import React, {useState} from 'react';
import {Box, Container, Stack} from "@mui/material";
import * as PhotoApi from "unsplash-js/dist/methods/photos/types";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResultBox from "./components/result-box.component";
import UnsplashService from "./services/unsplash-service";
import SearchImageForm from "./components/search-image-form.component";
import AppBarWrapper from "./components/appbar-wrapper.component";

const unsplashService = new UnsplashService();

const App: React.FC<{}> = () => {
    const [photo, setPhoto] = useState<PhotoApi.Basic | null>(null);

    return (
        <>
            <header>
                <AppBarWrapper/>
            </header>
            <main>
                <Container sx={{py: 3}}>
                    <section>
                        <Stack alignItems="center" mt={1} mb={8}>
                            <SearchImageForm unsplashService={unsplashService} onChange={setPhoto}/>
                        </Stack>
                    </section>
                    <section>
                        <Box maxWidth={"lg"}>
                            {photo ?
                                <ResultBox photo={photo as PhotoApi.Basic}/>
                                : null
                            }
                        </Box>
                    </section>
                </Container>
            </main>

            <ToastContainer/>
        </>
    );
}

export default App;