import { createClient } from "contentful";
import { IContentApiConfig } from "../../../../config/getContentApiConfig";
import { ContentType } from "./constants/ContentType";

interface IQuery extends Partial<Record<string, string | number>> {
    select?: string;
    query?: string;
    include?: number;
    limit?: number;
}

export function createContentApi(config: IContentApiConfig) {
    const contentful = createClient(config);

    function getEntry<T>(contentType: ContentType, query?: IQuery) {
        return contentful
            .getEntries<T>({
                content_type: contentType,
                limit: 1,
                ...query,
            })
            .then((response) => {
                if (!response.items.length) return undefined;

                return response.items[0];
            });
    }

    function getEntryById(id: string) {
        return contentful.getEntry(id);
    }

    function getEntriesByType(contentType: ContentType) {
        return contentful
            .getEntries({ content_type: contentType })
            .then((response: any) => {
                return response.items.length ? response.items : undefined;
            });
    }

    function getEntryBySlug<T>(slug: string, contentType: ContentType) {
        return getEntry<T>(contentType, { "fields.slug": slug });
    }

    return Object.freeze({ getEntryById, getEntriesByType, getEntryBySlug });
}
