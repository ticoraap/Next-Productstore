
import { GetStaticPropsContext } from "next";
import React from "react";
import { MainLayout } from "../../../features/app-container/ui/layouts/main-layout/MainLayout";
import { IMainLayoutViewModel } from "../../../features/app-container/ui/layouts/main-layout/MainLayoutViewModel";
import { IRegion } from "../../../features/region/domain/model/IRegion";
import { getRegion, getRegionPathSlugs, getRegionShops } from "../../../features/region/domain/use-cases";
import { RegionPage } from "../../../features/region/ui/RegionPage";
import { createRegionPageViewModel } from "../../../features/region/ui/RegionPageViewModel";
import { IRegionPathSlugs } from "../../../features/shared/domain/IRegionPathSlugs";
import { removeUndefined } from "../../../features/shared/utils/removeUndefined";
import { IShop } from "../../../features/shop/domain/model/IShop";



export interface IRegionNextPageProps {
    mainLayoutViewModel: IMainLayoutViewModel;
    regionPathSlugs: IRegionPathSlugs;
    region: IRegion;
    shops: IShop[];
}

export default function Region({ regionPathSlugs, region, shops, mainLayoutViewModel }: IRegionNextPageProps) {

    

    return (
        <MainLayout viewModel={mainLayoutViewModel}>
            <RegionPage viewModel={createRegionPageViewModel({ regionPathSlugs, region, shops })}></RegionPage>
        </MainLayout>
    );
}

export async function getStaticPaths() {
    const pathSlugs = await getRegionPathSlugs()

    const paths = pathSlugs.map(pathSlugs => ({ params: pathSlugs }));
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
    if (
        typeof countrySlug !== 'string' ||
        typeof regionSlug !== 'string'
    ) {
        return { notFound: true };
    }

    const region = await getRegion(regionSlug);
    const shops = await getRegionShops(region)

    if (!region || !shops) {
        return { notFound: true };
    }

    const props = removeUndefined({
        regionPathSlugs: {
            country: countrySlug,
            region: regionSlug
        },
        region, 
        shops
    });

    if (!props) return { notFound: true };

    return {
        props,
    };
}

