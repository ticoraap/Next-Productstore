import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { IShop } from "../model/IShop";

export function createGetShop(contentApi: IContentApi) {
    return function getShop(slug: string): Promise<IShop> {
		return contentApi.getEntryBySlug(slug, ContentType.Shops).then((item: any) => {
            return {
                id: item.sys.id,
                shopName: item.fields.name,
                shopDescription: item.fields.description,
                slug: item.fields.slug,
            };
        })
	};
}