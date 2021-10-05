import { contentApi } from "../../../../contentful";
import { createGetRegion } from "./getRegion";
import { createGetRegionPathSlugs } from "./getRegionPathSlugs";
import { createGetRegionShops } from "./getRegionShops";

export const getRegionPathSlugs = createGetRegionPathSlugs(contentApi)
export const getRegionShops = createGetRegionShops(contentApi)
export const getRegion = createGetRegion(contentApi)