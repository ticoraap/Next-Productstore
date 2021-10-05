import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import React from "react";
import { MainLayout } from "../../../../../../features/app-container/ui/layouts/main-layout/MainLayout";
import { IMainLayoutViewModel } from "../../../../../../features/app-container/ui/layouts/main-layout/MainLayoutViewModel";
import { cartStore } from "../../../../../../features/cart/store/CartStore";
import { IProduct } from "../../../../../../features/products/product/domain/model/IProduct";

import { getProductPathSlugs, getProduct } from "../../../../../../features/products/product/domain/use-cases";
import { ProductPage } from "../../../../../../features/products/product/ui/ProductPage";
import { createProductPageViewModel } from "../../../../../../features/products/product/ui/ProductPageViewModel";
import { removeUndefined } from "../../../../../../features/shared/utils/removeUndefined";

export interface IProductNextPageProps {
    product: IProduct;
    mainLayoutViewModel: IMainLayoutViewModel;
}

export default function Index({ product, mainLayoutViewModel }: IProductNextPageProps) {
	return (
		<MainLayout viewModel={mainLayoutViewModel}>
			<ProductPage viewModel={createProductPageViewModel({
				product,
				cartStore,
				productCount: mainLayoutViewModel.productCount,
				setProductCount: mainLayoutViewModel.setProductCount
			})} />
		</MainLayout>
	);
}

export async function getStaticPaths() {
	const slugs = await getProductPathSlugs();
	return {
		paths: slugs.map(slug => ({ params: slug })),
		fallback: false,
	};
}

export async function getStaticProps({
	params,
}: GetStaticPropsContext) {

	const countrySlug = params?.country;
	const regionSlug = params?.region;
	const shopSlug = params?.shop;
	const categorySlug = params?.category;
	const productSlug = params?.product;

	if (
		typeof countrySlug !== 'string' ||
		typeof regionSlug !== 'string' ||
		typeof shopSlug !== 'string' ||
		typeof categorySlug !== 'string' ||
		typeof productSlug !== 'string'
	) {
		return { notFound: true };
	}

	const product = await getProduct(productSlug)

	if (!product) {
		return { notFound: true };
	}

	const props = removeUndefined({ product });

	if (!props) return { notFound: true };

	return {
		props,
	};
}




