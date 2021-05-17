import { getContentApiConfig } from "../../../../config/getContentApiConfig";
import { createContentApi } from "./contentApi";

const { space, environment, accessToken } = getContentApiConfig();

export const contentApi = createContentApi({
    space,
    environment,
    accessToken,
});

export type IContentApi = ReturnType<typeof createContentApi>;