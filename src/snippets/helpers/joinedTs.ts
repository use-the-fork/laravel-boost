import ts from "./tabStop";

export const routeHelper = (st: number = 0, routes: string[], deliminator: string = '') => {
    return routes.map((route) => ts(st++, `\t'${route}',`)).join(deliminator);
};

export default routeHelper;