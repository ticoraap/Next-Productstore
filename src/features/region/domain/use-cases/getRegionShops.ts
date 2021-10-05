import { IContentApi } from "../../../../contentful";
import { ContentType } from "../../../../contentful/constants/ContentType";
import { IRegion } from "../../../region/domain/model/IRegion";
import { IShop } from "../../../shop/domain/model/IShop";


export function createGetRegionShops(contentApi: IContentApi) {
    return async function getRegionShops(region: IRegion): Promise<IShop[]> {
		const shops = await contentApi.getEntriesByTypeThatLinkToEntry(region.id, ContentType.Shops);

		if (!shops) return [];

        return shops.map((shop) => {
            
			return {
				id: shop.sys.id,
                shopName: shop.fields.name,
                shopDescription: shop.fields.description,
                slug: shop.fields.slug,
			}
		});
	};
}