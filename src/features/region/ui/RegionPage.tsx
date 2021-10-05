import React from 'react';
import { TextLink } from '../../shared/link/ui/TextLink';
import { IRegionPageViewModel } from './RegionPageViewModel';

export interface IRegionPageProps {
    viewModel: IRegionPageViewModel
}

export const RegionPage = ({ viewModel }: IRegionPageProps) => {
    return (
        <div>
            <p>
                This is the region page for {viewModel.name}
            </p>
            <p>
                Shops in this region:
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
