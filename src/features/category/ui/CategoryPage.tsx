import React from 'react';
import { ICategoryPageViewModel } from './CategoryPageViewModel';

export interface ICategoryPageProps {
    viewModel: ICategoryPageViewModel
}

export const CategoryPage = ({ viewModel }: ICategoryPageProps) => {
    return (
        <div>
            <p>
                This is the category page for {viewModel.name}
            </p>
            <p>
                products in this category:
            </p>
            <ul>
                {viewModel.products.map(product => {
                    return <li key={product.id} >
                        <div>
                            name: {product.title} <br/>
                            slug: {product.slug}
                        </div>
                    </li>

                })}
            </ul>
        </div>
    )
}
