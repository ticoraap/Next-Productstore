import { GetStaticPropsContext } from "next";
import React from "react";
import { MainLayout } from "../../features/app-container/ui/layouts/main-layout/MainLayout";
import { IMainLayoutViewModel } from "../../features/app-container/ui/layouts/main-layout/MainLayoutViewModel";
import { ICountry } from "../../features/country/domain/model/ICountry";
import { getCountry, getCountryRegions, getCountrySlugs } from "../../features/country/domain/use-cases";
import { CountryPage } from "../../features/country/ui/CountryPage";
import { createCountryPageViewModel } from "../../features/country/ui/CountryPageViewModel";
import { IRegion } from "../../features/region/domain/model/IRegion";

import { removeUndefined } from "../../features/shared/utils/removeUndefined";

export interface ICountryNextPageProps {
    mainLayoutViewModel: IMainLayoutViewModel;
    country: ICountry;
    regions: IRegion[]
}

export default function Country({country, regions, mainLayoutViewModel}: ICountryNextPageProps) {
    return (
        <MainLayout viewModel={mainLayoutViewModel}>
            <CountryPage viewModel={createCountryPageViewModel({country, regions})}></CountryPage>
        </MainLayout>
    );
}

export async function getStaticPaths() {
    const slugs = await getCountrySlugs();


    const paths = slugs.map(slugCollection => ({ params: slugCollection}));
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({
    params
}: GetStaticPropsContext) {
    const countrySlug = params?.country;
    if (typeof countrySlug !== 'string') {
		return { notFound: true };
	}

    const country = await getCountry(countrySlug);
    const regions = await getCountryRegions(country)


    if (!country || !regions ) {
		return { notFound: true };
	}

    const props = removeUndefined({ country, regions });

    if (!props) return { notFound: true };

    return {
		props,
	};
}