export type IContentApiConfig = {
    space: string;
    environment: string;
    accessToken: string;
};

export function getContentApiConfig(): IContentApiConfig {
    return {
        space: "jw6lneimwl4u",
        environment: "master",
        accessToken: "UnNzMbKARt1v4AJT9-JlYqvEHyTHmvNMZzmq_ZQ-tbA",
    };
}
