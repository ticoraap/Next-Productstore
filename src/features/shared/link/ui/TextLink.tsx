import Link from 'next/link'
import React from "react";
import { IPathSlugs } from '../domain/model/IPathSlugs';
import { toUrl } from '../domain/use-cases/toUrl';

export interface ITextLinkProps {
    pathSlugs: IPathSlugs,
    children: any
}

export const TextLink = ({ pathSlugs, children }: ITextLinkProps) => {

    return (
        <Link href={toUrl(pathSlugs)}>{children}</Link>
    )
}