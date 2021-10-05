import React from 'react';
import { TextLink } from '../../shared/link/ui/TextLink';
import { IShopPageViewModel } from './ShopPageViewModel';


export interface IShopPageProps {
    viewModel: IShopPageViewModel
}

export const ShopPage = ({ viewModel }: IShopPageProps) => {

    return (
        <div>
            <p>
                This is the shop page for {viewModel.name}
            </p>
            <p>
                categories in this shop:
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
