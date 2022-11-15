import {ApiResponse} from "unsplash-js/dist/helpers/response";
import {notifyError, notifyInfo} from "../utils/toastr";
import {Photos} from "unsplash-js/dist/methods/search/types/response";
import {ColorId, createApi, Orientation} from "unsplash-js";

class UnsplashService {
    private unsplashApiClient;

    constructor() {
        this.unsplashApiClient = createApi({
            accessKey: process.env.REACT_APP_ACCESS_KEY as string,
        });
    }

    public handleError = (response: ApiResponse<any>) => {
        if (response.errors) {
            notifyError(response.errors?.[0]);
            return true;
        }
        return false;
    }

    public handleEmptyResponse = (response: ApiResponse<Photos>) => {
        if (!response.response?.results.length) {
            notifyInfo("No results found.");
            return true;
        }
        return false;
    }

    public getPhotos = (page: number, query: string, color: ColorId, orientation: Orientation): Promise<ApiResponse<Photos>> => (
        this.unsplashApiClient.search.getPhotos({
            query,
            page,
            perPage: 1,
            color,
            orientation
        })
    )
}

export default UnsplashService;