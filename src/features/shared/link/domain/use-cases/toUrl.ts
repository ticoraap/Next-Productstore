import { IPathSlugs } from "../model/IPathSlugs";

export function toUrl(pathSlugs: IPathSlugs){

    const urlOrder = ['country','region','shop','category','product']

    let url = ''

    urlOrder.forEach(urlPart => {
        if (urlPart in pathSlugs) url += `/${pathSlugs[urlPart]}`;
    })

    return url

}