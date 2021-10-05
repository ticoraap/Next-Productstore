import React from 'react';
import { TextLink } from '../../shared/link/ui/TextLink';
import { IHomePageViewModel } from './HomePageViewModel';

export interface IHomePageProps {
    viewModel: IHomePageViewModel
}

export const HomePage = ({ viewModel }: IHomePageProps) => {
    return (
        <div>
            <p>
                This is the homepage
            </p>
            <p>
                Countries on this website:
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
