import React from "react";
import { MainLayout } from "../features/app-container/ui/layouts/main-layout/MainLayout";
import { IMainLayoutViewModel } from "../features/app-container/ui/layouts/main-layout/MainLayoutViewModel";
import { ICountry } from "../features/country/domain/model/ICountry";
import { getAllCountries } from "../features/country/domain/use-cases";
import { HomePage } from "../features/home/ui/HomePage";
import { createHomePageViewModel } from "../features/home/ui/HomePageViewModel";
import { removeUndefined } from "../features/shared/utils/removeUndefined";


export interface IIndexNextPageProps {
    mainLayoutViewModel: IMainLayoutViewModel;
    countries: ICountry[];
}

export default function Index({ countries, mainLayoutViewModel }: IIndexNextPageProps) {
    return (
        <MainLayout viewModel={mainLayoutViewModel}>
            <HomePage viewModel={createHomePageViewModel({ countries })}></HomePage>
        </MainLayout>
    );
}

export async function getStaticProps() {
    const countries = await getAllCountries()

    if (!getAllCountries) {
        return { notFound: true };
    }

    const props = removeUndefined({ countries });

    if (!props) return { notFound: true };

    return {
        props,
    };
}