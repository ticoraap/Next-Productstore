
import { GetStaticPropsContext } from "next";
import React from "react";
import { MainLayout } from "../../../../../features/app-container/ui/layouts/main-layout/MainLayout";
import { IMainLayoutViewModel } from "../../../../../features/app-container/ui/layouts/main-layout/MainLayoutViewModel";
import { cartStore } from "../../../../../features/cart/store/CartStore";
import { ICategory } from "../../../../../features/category/domain/model/ICategory";
import { getCategory, getCategoryPathSlugs, getCategoryProducts } from "../../../../../features/category/domain/use-cases";
import { IProduct } from "../../../../../features/products/product/domain/model/IProduct";
import { ProductsOverviewPage } from "../../../../../features/products/products-overview/ui/ProductsOverviewPage";
import { removeUndefined } from "../../../../../features/shared/utils/removeUndefined";
import { createProductsOverviewViewModel } from "../../../../../features/products/products-overview/ui/ProductsOverviewViewModel";
import { ICategoryPathSlugs } from "../../../../../features/shared/domain/ICategoryPathSlugs";

export interface ICategoryNextPageProps {
    mainLayoutViewModel: IMainLayoutViewModel;
    categoryPathSlugs: ICategoryPathSlugs;
    category: ICategory;
    products: IProduct[];
}

export default function Category({categoryPathSlugs, category, products, mainLayoutViewModel}: ICategoryNextPageProps) {
    return (
        <MainLayout viewModel={mainLayoutViewModel}>
            <ProductsOverviewPage
                viewModel={createProductsOverviewViewModel({categoryPathSlugs,products, cartStore, category})}
            />
        </MainLayout>
    );
}

export async function getStaticPaths() {
    const pathSlugs = await getCategoryPathSlugs()

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
    const categorySlug = params?.category;
    
    if (
		typeof countrySlug !== 'string' ||
		typeof regionSlug !== 'string' ||
		typeof shopSlug !== 'string' ||
		typeof categorySlug !== 'string'
	) {
		return { notFound: true };
	}

    const category = await getCategory(categorySlug)
    const products = await getCategoryProducts(category)

    if (!category || !products ) {
		return { notFound: true };
	}

    const props = removeUndefined({ 
        categoryPathSlugs: {
            country: countrySlug,
            region: regionSlug,
            shop: shopSlug,
            category: categorySlug,
        }, 
        category, 
        products 
    });

    if (!props) return { notFound: true };

    return {
		props,
	};
}

