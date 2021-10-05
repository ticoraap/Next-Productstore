import React from 'react';
import { TextLink } from '../../shared/link/ui/TextLink';
import { ICountryPageViewModel } from './CountryPageViewModel';

export interface ICountryPageProps {
    viewModel: ICountryPageViewModel
}

export const CountryPage = ({ viewModel }: ICountryPageProps) => {
    return (
        <div>
            <p>
                This is the country page for {viewModel.name}
            </p>
            <p>
                Regions in this country:
            </p>
            <ul>
                {viewModel.textLinks.map(textLink => {
                    return (
                        <li>
                            <TextLink key={textLink.linkText} pathSlugs={textLink.pathSlugs}>
                                {textLink.linkText}
                            </TextLink>
                        </li>
                    )

                }
                )}
            </ul>
        </div>
    )
}
