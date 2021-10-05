
import { GetStaticPropsContext } from "next";
import React from "react";
import { MainLayout } from "../../../../features/app-container/ui/layouts/main-layout/MainLayout";
import { IMainLayoutViewModel } from "../../../../features/app-container/ui/layouts/main-layout/MainLayoutViewModel";
import { ICategory } from "../../../../features/category/domain/model/ICategory";
import { IShopPathSlugs } from "../../../../features/shared/domain/IShopPathSlugs";
import { removeUndefined } from "../../../../features/shared/utils/removeUndefined";
import { IShop } from "../../../../features/shop/domain/model/IShop";
import { getShop, getShopCategories, getShopPathSlugs } from "../../../../features/shop/domain/use-cases";
import { ShopPage } from "../../../../features/shop/ui/ShopPage";
import { createShopPageViewModel } from "../../../../features/shop/ui/ShopPageViewModel";

export interface IShopNextPageProps {
    mainLayoutViewModel: IMainLayoutViewModel;
    shopPathSlugs: IShopPathSlugs;
    shop: IShop;
    categories: ICategory[];
}

export default function Shop({shopPathSlugs, shop, categories, mainLayoutViewModel}: IShopNextPageProps) {
    return (
        <MainLayout viewModel={mainLayoutViewModel}>
            <ShopPage viewModel={createShopPageViewModel({shopPathSlugs, shop, categories})}></ShopPage>
        </MainLayout>
    );
}

export async function getStaticPaths() {
    const pathSlugs = await getShopPathSlugs()

    const paths = pathSlugs.map(pathSlugs => ({ params: pathSlugs}));
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({
    params
}: GetStaticPropsContext) {
    const countrySlug = params?.country;
    const regionSlug = params?.region;
    const shopSlug = params?.shop;
    
    if (
		typeof countrySlug !== 'string' ||
		typeof regionSlug !== 'string' ||
		typeof shopSlug !== 'string'
	) {
		return { notFound: true };
	}

    const shop = await getShop(shopSlug)
    const categories = await getShopCategories(shop)

    if (!shop || !categories ) {
		return { notFound: true };
	}

    const props = removeUndefined({ 
        shopPathSlugs: {
            country: countrySlug,
            region: regionSlug,
            shop: shopSlug
        },
        shop, 
        categories 
    });

    if (!props) return { notFound: true };

    return {
		props,
	};
}

