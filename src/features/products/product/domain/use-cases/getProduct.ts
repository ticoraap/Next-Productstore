import { IContentApi } from "../../../../../contentful";
import { ContentType } from "../../../../../contentful/constants/ContentType";

export function createGetProduct(contentApi: IContentApi) {
    return (slug: string) =>  {
		return contentApi.getEntryBySlug(slug, ContentType.Products).then((item: any) => {
            return {
                id: item.sys.id,
                title: item.fields.title,
                subtitle: item.fields.subtitle,
                description: item.fields.description,
                price: item.fields.price,
                imgurl: item.fields.imgurl,
            };
        })
	};
}