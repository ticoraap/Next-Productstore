import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { ICategory } from "../model/ICategory";

export function createGetCategory(contentApi: IContentApi) {
    return function getCategory(slug: string): Promise<ICategory> {
		return contentApi.getEntryBySlug(slug, ContentType.Categories).then((item: any) => {
            return {
                id: item.sys.id,
                categoryName: item.fields.name,
                categoryDescription: item.fields.description,
                slug: item.fields.slug,
            }
        })
	};
}