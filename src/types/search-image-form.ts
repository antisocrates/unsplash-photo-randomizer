import UnsplashService from "../services/unsplash-service";
import * as PhotoApi from "unsplash-js/dist/methods/photos/types";

interface SearchImageFormProps {
    unsplashService: UnsplashService;
    onChange: (x: PhotoApi.Basic | null) => void;
}

export type {SearchImageFormProps};