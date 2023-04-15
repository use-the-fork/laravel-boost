import { func, joinedTs, ts } from '../helpers';
import { SnippetMapping, TypeObjectOperator } from '../types';

const t = `Route`;


export const lbRouteGroupClosure = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Group Closure`,
    description: `Create a group of routes. (4.2+)`,
    body: [
        `${objectOperator}group(function () {`,
        `\t${ts(st)}`,
        `})${ts(st + 1, `;`)}`
    ]
});

export const lbRouteAny = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Any`,
    description: `Allows a route to respond to any HTTP verb. (3.0+)`,
    body: [
        `Route::any('${ts(st + 1, `users/{id\\}`)},'`,
        ...func({
            func: [
                `${ts(st + 3)}`
            ],
            args: [`${ts(st + 2, `\\$id`)}`]
        }),
        `);`,
    ]
});

export const lbRouteMatch = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Match`,
    description: `Define route that responds to multiple HTTP verbs. (4.2+)`,
    body: [
        `Route::match([${ts(st + 1, `'get', 'post'`)}], ${ts(st + 2, `/user/profile`)}`,
        ...func({
            func: [
                `${ts(st)}`
            ]
        }),
        `);`,
    ]
});

export const lbRouteMatchGroup = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Match`,
    description: `Define route that responds to multiple HTTP verbs. (4.2+)`,
    body: [
        `Route::match([${ts(st + 1, `'get', 'post'`)}], ${ts(st + 2, `/user/profile`)}`,
        ...func({
            func: [
                `${ts(st)}`
            ]
        }),
        `);`,
    ]
});

export const lbRouteRedirect = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Redirect`,
    description: `Redirect a route to another URI. (5.5+)`,
    body: [
        `Route::redirect('${ts(st + 1, `URI`)}','${ts(st + 2, `URI`)}',${ts(st + 3, `301`)});`
    ]
});

export const lbRoutePermanentRedirect = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Permanent Redirect`,
    description: `Define a permanent redirect route. (5.1+)`,
    body: [
        `Route::permanentRedirect('${ts(st + 1, `URI`)}','${ts(st + 2, `URI`)}'});`
    ]
});

export const lbRouteView = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Permanent Redirect`,
    description: `Define a route that returns a view. (5.0+)`,
    body: [
        `Route::view('${ts(st + 1, `URI`)}','${ts(st + 2, `viewName`)}', ${ts(st + 3, `['${ts(st + 4)}' => ${ts(st + 5)}]`)}});`
    ]
});

export const lbRouteMiddleware = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Middleware`,
    description: `Middleware on a group of routes. (5.0+)`,
    body: [
        `${objectOperator}middleware(['${ts(st + 1, `auth`)}'${ts(st + 2, `, ${ts(st + 3, `second`)}`)}])`
    ]
});

export const lbRouteMiddlewareGroup = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Middleware Group`,
    description: `Register middleware on a group of routes. (5.0+)`,
    body: [
        `Route`,
        ...lbRouteMiddleware(st, '::').body,
        ...lbRouteGroupClosure(st, '->').body
    ]
});

export const lbRouteDomain = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Domain`,
    description: `Define a subdomain routing. (4.0+)`,
    body: [
        `${objectOperator}domain('${ts(st + 1, `account.example.com`)}')${ts(st + 2, `;`)}`,
    ]
});

export const lbRouteDomainGroup = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Domain Group`,
    description: `Define a subdomain routing for a group of routes. (4.0+)`,
    body: [
        `Route`,
        ...lbRouteDomain(st, '::').body,
        ...lbRouteGroupClosure(st, '->').body
    ]
});

export const lbRoutePrefix = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Prefix`,
    description: `Define a subdomain routing. (4.0+)`,
    body: [
        `${objectOperator}prefix('${ts(st + 1, `admin`)}')${ts(st + 2, `;`)}`,
    ]
});

export const lbRoutePrefixGroup = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Prefix Group`,
    description: `Define a route group with a common prefix. (5.3+)`,
    body: [
        `Route`,
        ...lbRoutePrefix(st, '::').body,
        ...lbRouteGroupClosure(st, '->').body
    ]
});

export const lbRouteFallback = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Fallback`,
    description: `Define fallback route for unmatched URIs. (5.6+)`,
    body: [
        `${objectOperator}fallback(function(){`,
        `\t${ts(st + 1)}`,
        `})${ts(st + 2, `;`)}`,
    ]
});

export const lbRouteFallbackGroup = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Fallback Group`,
    description: `Define fallback route group for unmatched URIs. (5.6+)`,
    body: [
        `Route`,
        ...lbRouteFallback(st, '::').body,
        ...lbRouteGroupClosure(st, '->').body
    ]
});

export const lbRouteCurrentRouteName = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Current Route Name`,
    description: `Get the name of the current route. (5.1+)`,
    body: [
        `Route::currentRouteName();${ts(st)}`,
    ]
});

export const lbRouteCurrentRouteAction = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Current Route Action`,
    description: `Get the action name for the current route. (4.2+)`,
    body: [
        `Route::currentRouteAction();${ts(st)}`,
    ]
});

export const lbRouteWhere = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Where`,
    description: `Define a pattern-based filter on a route parameter. (5.2+)`,
    body: [
        `${objectOperator}where('${ts(st + 1, `name`)}','${ts(st + 2, `[A-Za-z]+`)}')${ts(st + 3, `;`)}`,
    ]
});

export const lbRouteWhereNumber = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Where Number`,
    description: `Define a route parameter with numeric constraints. (5.2+)`,
    body: [
        `${objectOperator}whereNumber('${ts(st + 1, `number`)}')${ts(st + 3, `;`)}`,
    ]
});

export const lbRouteWhereAlpha = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Where Alpha`,
    description: `Apply an alphabetical regular expression constraint to a route parameter. (5.2+)`,
    body: [
        `${objectOperator}whereAlpha('${ts(st + 1, `string`)}')${ts(st + 3, `;`)}`,
    ]
});

export const lbRouteWhereUuid = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Where Uuid`,
    description: `Define a route parameter constraint where the value is a UUID. (5.5+)`,
    body: [
        `${objectOperator}whereUuid('${ts(st + 1, `uuid`)}')${ts(st + 3, `;`)}`,
    ]
});

export const lbRouteWhereUlid = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Where Ulid`,
    description: `Define a route parameter constraint where the value is a ULID. (5.5+)`,
    body: [
        `${objectOperator}whereUlid('${ts(st + 1, `uuid`)}')${ts(st + 3, `;`)}`,
    ]
});

export const lbRouteClosure = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Closure`,
    description: `Define a basic route with closure (2.0+)`,
    body: [
        `Route::${ts(st + 1, `get,post,put,patch,delete,options`, `|`)}(${ts(st + 2, `users/{id\\}`)}), function(${ts(st + 3, `$id`)}){`,
        `\t${ts(st)}`,
        `});`
    ]
});

export const lbRouteControllerAction = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Controller Action`,
    description: `Define a basic route with controller actions (5.0+)`,
    body: [
        `Route::${ts(st + 1, `get,post,put,patch,delete,options`, `|`)}(${ts(st + 2, `users/{id\\}`)}, [${ts(st + 3, `Users`)}Controller::class, '${ts(st + 4, `index`)}'])`,
    ]
});

export const lbRouteDeleteClosure = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Delete Closure`,
    description: `Define a basic delete route with closure (2.0+)`,
    body: [
        `Route::delete(${ts(st + 2, `users/{id\\}`)}), function(${ts(st + 3, `$id`)}){`,
        `\t${ts(st)}`,
        `});`
    ]
});

export const lbRouteGetClosure = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Get Closure`,
    description: `Define a basic get route with closure (2.0+)`,
    body: [
        `Route::get(${ts(st + 2, `users/{id\\}`)}), function(${ts(st + 3, `$id`)}){`,
        `\t${ts(st)}`,
        `});`
    ]
});

export const lbRoutePostClosure = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Post Closure`,
    description: `Define a basic post route with closure (2.0+)`,
    body: [
        `Route::post(${ts(st + 2, `users/{id\\}`)}), function(${ts(st + 3, `$id`)}){`,
        `\t${ts(st)}`,
        `});`
    ]
});

export const lbRoutePutClosure = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Put Closure`,
    description: `Define a basic put route with closure (2.0+)`,
    body: [
        `Route::put(${ts(st + 2, `users/{id\\}`)}), function(${ts(st + 3, `$id`)}){`,
        `\t${ts(st)}`,
        `});`
    ]
});


export const lbRouteOnly = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Only`,
    description: `Define resource routes to include only the specific methods. (5.2+)`,
    body: [
        [
        `${objectOperator}only([`,
        joinedTs(st + 1, ['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']),
        `])${ts(st + 8, `;`)}`
        ].join(``)
    ]
});

export const lbRouteExcept = (st: number = 0, objectOperator: TypeObjectOperator = '->'): SnippetMapping => ({
    type: t,
    key: `Except`,
    description: `Define resource routes to exclude specific methods. (5.0+)`,
    body: [
        [
        `${objectOperator}except([`,
        joinedTs(st + 1, ['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']),
        `])${ts(st + 8, `;`)}`
        ].join(``)
    ]
});

export const lbRouteResource = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Resource`,
    description: `Creates routes to handle typical RESTful CRUD operations. (5.0+)`,
    body: [
        `Route::resource('${ts(st + 1, `user`)}', ${ts(st + 1, `User/capitalize`)}Controller::class)`,
        ts(st + 2, [...lbRouteOnly(st + 11).body, ``].join(`\n`)),
        ts(st + 3, [...lbRouteExcept(st + 21).body, ``].join(`\n`)),
        `;`
    ]
});
export const lbRouteApiResource = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `API Resource`,
    description: `Define resource routes for a RESTful API with default actions. (5.5+)`,
    body: [
        `Route::apiResource('${ts(st + 1, `user`)}', ${ts(st + 1, `User/capitalize`)}Controller::class)`,
        ts(st + 2, [...lbRouteOnly(st + 10).body, ``].join(`\n`)),
        ts(st + 3, [...lbRouteExcept(st + 20).body, ``].join(`\n`)),
        `;`
    ]
});


export default [
    lbRouteGroupClosure,
    lbRouteAny,
    lbRouteMatch,
    lbRouteMatchGroup,
    lbRouteRedirect,
    lbRoutePermanentRedirect,
    lbRouteView,
    lbRouteMiddleware,
    lbRouteMiddlewareGroup,
    lbRouteDomain,
    lbRouteDomainGroup,
    lbRoutePrefix,
    lbRouteFallback,
    lbRouteFallbackGroup,
    lbRouteCurrentRouteName,
    lbRouteCurrentRouteAction,
    lbRouteWhere,
    lbRouteWhereNumber,
    lbRouteWhereAlpha,
    lbRouteWhereUuid,
    lbRouteWhereUlid,
    lbRouteClosure,
    lbRouteControllerAction,
    lbRouteDeleteClosure,
    lbRouteGetClosure,
    lbRoutePostClosure,
    lbRoutePutClosure,
    lbRouteResource,
    lbRouteApiResource,
    lbRouteOnly,
    lbRouteExcept
];