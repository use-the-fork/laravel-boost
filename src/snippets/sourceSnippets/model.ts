import { LARAVEL_CLASS, VS_VAR } from '../constant';
import { docBlock, func, ts, v } from '../helpers';
import { SnippetMapping } from '../types';

const t = `Model`;

export const lbModelMake = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Make`,
    description: `Generate a new model.`,
    body: [
        `<?php`,
        ``,
        VS_VAR.namespace,
        ``,
        `use ${LARAVEL_CLASS.eloquent}\\Model;`,
        ``,
        `class ${VS_VAR.fileNameBase} extends Model`,
         `{`,
         ts(st + 10, `\tuse ${LARAVEL_CLASS.eloquent}\\Factories\\HasFactory;`),
         ts(st + 20, `\tuse ${LARAVEL_CLASS.eloquent}\\SoftDeletes;`),
         ``,
         ts(st + 30, [...lbAttributeCasting(st + 31).body, ``].join(`\n`)),
         ts(st + 40, [...lbAttributes(st + 41).body, ``].join(`\n`)),
         ts(st + 50, [...lbFillable(st + 51).body, ``].join(`\n`)),
         ts(0),
         `}`,
    ],
    isFileTemplate: true
});

export const lbModelTable = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Table`,
    description: `Specifies the name of the database table associated with an model. (5.0+)`,
    body: [
        ...docBlock({description: [`The table associated with the model.`], atVar: `string`}),
        ...v({
            name:`table`,
            value: ts(st),
            scope: `protected`
        }),
    ]
});

export const lbPrimaryKey = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Primary Key`,
    description: `Define the primary key for the model. (5.0+)`,
    body: [
        ...docBlock({description: [`The primary key associated with the table.`], atVar: `string`}),
        ...v({
            name:`primaryKey`,
            value: ts(st),
            scope: `protected`
        }),
    ]
});

export const lbIncrementing = (st: number = 1): SnippetMapping => ({
    type: t,
    key: `Incrementing`,
    description: `Indicates if the IDs of the model are auto-incrementing.. (3.0+)`,
    body: [
        ...docBlock({description: [`Indicates if the IDs are auto-incrementing.`], atVar: `bool`}),
        ...v({
            name:`incrementing`,
            value: ts(st, `false`),
            scope: `public`,
            type: `bool`
        }),
    ]
});

export const lbTimestamps = (st: number = 1): SnippetMapping => ({
    type: t,
    key: `Timestamps`,
    description: `Determines whether the model should automatically manage created_at and updated_at columns. (3.2+)`,
    body: [
        ...docBlock({description: [`Indicates if the model should be timestamped.`], atVar: `bool`}),
        ...v({
            name:`timestamps`,
            value: ts(st, `false`),
            scope: `public`,
            type: `bool`
        }),
    ]
});

export const lbDateFormat = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Date Format`,
    description: `Define the format of the timestamps. (5.0+)`,
    body: [
        ...docBlock({description: [`The storage format of the model's date columns.`], atVar: `string`}),
        ...v({
            name:`dateFormat`,
            value: ts(st, `Y-m-d H:i:s`),
            scope: `protected`
        }),
    ]
});

export const lbDatabaseConnection = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Database Connection`,
    description: `Define the connection name for the model. (3.0+)`,
    body: [
        ...docBlock({description: [`The database connection that should be used by the model.`], atVar: `string`}),
        ...v({
            name:`connection`,
            value: ts(st),
            scope: `protected`
        }),
    ]
});

export const lbAttributeCasting = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Casts`,
    description: `Define model fields and their cast types. (5.0+)`,
    body: [
        ...docBlock({description: [`The attributes that should be cast to native types.`], atVar: `array`}),
        ...v({
            name:`casts`,
            value: [{
                key: ts(st+ 1),
                value: ts(st, 'type')
            }],
            scope: `protected`,
            type: `array`
        }),
    ]
});

export const lbAttributes = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Attributes`,
    description: `The models default values for attributes. (3.0+)`,
    body: [
        ...docBlock({description: [`The model's default values for attributes.`], atVar: `array`}),
        ...v({
            name:`attributes`,
            value: [{
                key: ts(st+ 1),
                value: ts(st)
            }],
            scope: `protected`,
            type: `array`
        }),
    ]
});

export const lbFillable = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Fillable`,
    description: `An array of attributes that are mass assignable (3.0+)`,
    body: [
        ...docBlock({description: [`The attributes that are mass assignable.`], atVar: `array`}),
        ...v({
            name:`fillable`,
            value: [{
                key: ts(st)
            }],
            scope: `protected`,
            type: `array`
        }),
    ]
});

export const lbGuarded = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Guarded`,
    description: `An array of attributes that are not mass assignable. (4.0+)`,
    body: [
        ...docBlock({description: [`The attributes that aren't mass assignable.`], atVar: `array`}),
        ...v({
            name:`guarded`,
            value: [{
                key: ts(st)
            }],
            scope: `protected`,
            type: `array`
        }),

    ]
});

export const lbHidden = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Hidden`,
    description: `Specify attributes that shouldn't be included in model's array/JSON output. (5.0+)`,
    body: [
        ...docBlock({description: [`The attributes that should be hidden for arrays.`], atVar: `array`}),
        ...v({
            name:`hidden`,
            value: [{
                key: ts(st)
            }],
            scope: `protected`,
            type: `array`
        }),

    ]
});


export const lbVisible = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Visible`,
    description: `Specify attributes that should be included in model's array/JSON output. (5.0+)`,
    body: [
        ...docBlock({description: [`The attributes that should be visible in arrays.`], atVar: `array`}),
        ...v({
            name:`visible`,
            value: [{
                key: ts(st)
            }],
            scope: `protected`,
            type: `array`
        }),

    ]
});

export const lbAppends = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Appends`,
    description: `Attributes to append to JSON serialized model. (5.0+)`,
    body: [
        ...docBlock({description: [`The accessors to append to the model's array form.`], atVar: `array`}),
        ...v({
            name:`appends`,
            value: [{
                key: ts(st)
            }],
            scope: `protected`,
            type: `array`
        }),

    ]
});

export const lbTouches = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Touches`,
    description: `Update the related timestamp on parent model. (4.1+)`,
    body: [
        ...docBlock({description: [`The relationships that should be touched on save.`], atVar: `array`}),
        ...v({
            name:`touches`,
            value: [{
                key: ts(st)
            }],
            scope: `protected`,
            type: `array`
        }),

    ]
});

export const lbPrunable = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Prunable`,
    description: `Periodically delete models that are no longer needed.`,
    body: [
        `use ${ts(st, `${LARAVEL_CLASS.eloquent}\\Prunable,${LARAVEL_CLASS.eloquent}\\MassPrunable`, `|`)};`,
        ``,
        ...docBlock({description: [`Get the prunable model query.`], atReturn: `${LARAVEL_CLASS.eloquent}\\Builder`}),
        ...func({
            name:'prunable',
            func: [
                `return static::where(${ts(st+2,'created_at')},${ts(st+3,'<=')},${ts(st+4,'now()->subMonth()')});`
            ],
            returnType: {
                value: `${LARAVEL_CLASS.eloquent}\\Builder`,
                stop: st+1
            }
        }),
    ]
});

export const lbDates = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Dates`,
    description: `The attributes that should be mutated to dates.`,
    body: [
        ...docBlock({description: [`The attributes that should be mutated to dates.`], atVar: `array`}),
        ...v({
            name:`dates`,
            value: [
                {key: 'created_at'},
                {key: 'updated_at'},
                {key: ts(st, 'deleted_at')}],
            scope: `protected`,
            type: `array`
        })
    ]
});

export const lbBoot = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Boot`,
    description: `The \"booting\" method of the model.`,
    body: [
        ...docBlock({description: [`The \"booting\" method of the model.`], atReturn: `void`}),
        ...func({
            name: 'boot',
            func: [
                `parent::boot();`,
                ``,
                ts(st)
            ],
            returnType: {
                value: `void`,
                stop: st + 1
            },
            scope: `protected`,
            isStatic: true
    }),
    ]
});

export const lbLocalScope = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Local Scope`,
    description: `Query a local scope within your model.`,
    body: [
        ...docBlock({
            description: [`Scope a query to only include ${ts(st+1)}`],
            atParam: [`${LARAVEL_CLASS.eloquent}\\Builder \\$query`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Builder`
        }),
        ...func({
            name:`scope${ts(st+1,'/capitalize')}`,
            func: [
                `return \\$query->where('${ts(st+3)}'${ts(st)});`
            ],
            args: [`${LARAVEL_CLASS.eloquent}\\Builder`, `\\$query`],
            returnType: {
                value: `${LARAVEL_CLASS.eloquent}\\Builder`,
                stop: st + 2
            }
        }),
    ]
});

export const lbDynamicScope = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Dynamic Scope`,
    description: `Define a scope that accepts parameters within your model.`,
    body: [
        ...docBlock({
            description: [`Scope a query to only include ${ts(st+1)} of a given type.`],
            atParam: [`${LARAVEL_CLASS.eloquent}\\Builder \\$query`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Builder`
        }),
        ...func({
            name: `scopeOfType`,
            func: [
                `return \\$query->where('${ts(st+3)}', \\$type);`
            ],
            args: [`${LARAVEL_CLASS.eloquent}\\Builder \\$query`, `string \\$type`],
            returnType: {
                value: `${LARAVEL_CLASS.eloquent}\\Builder`,
                stop: st + 2
            }
        }),
    ]
});

export const lbHasOne = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Has One`,
    description: `Define a One to One relationship within your model.`,
    body: [
        ...docBlock({
            description: [`Get the ${ts(st+1)} associated with the ${VS_VAR.fileNameBase}`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\HasOne`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->hasOne(${ts(st)}::class)`+
                `${ts(st+3,`->latestOfMany()`)}`+
                `${ts(st+4,`->oldestOfMany()`)}`+
                `${ts(st+5,`->ofMany('${ts(st+6)}',${ts(st+7,'min,max','|')})`)};`
            ],
            returnType: {
                value: `${LARAVEL_CLASS.eloquent}\\Relations\\HasOne`,
                stop: st + 2
            }
        })
    ]
});

export const lbBelongsTo = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Belongs To`,
    description: `Define a Belongs To relationship within your model.`,
    body: [
        ...docBlock({
            description: [`Get the ${ts(st+1)} that owns the ${VS_VAR.fileNameBase}`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\BelongsTo`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->belongsTo(${ts(st)}::class)`+
                `${ts(st+3,`->withDefault(['${ts(st+5)}'=>'${ts(st+6)}'])`)}`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\BelongsTo`,
                    stop: st + 2
                }
        })
    ]
});

export const lbHasMany = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Has Many`,
    description: `Define a One to Many relationship within your model.`,
    body: [
        ...docBlock({
            description: [`Get all of the ${ts(st+1)} for the ${VS_VAR.fileNameBase}`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\HasMany`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->hasMany(${ts(st)}::class)`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\HasMany`,
                    stop: st + 2
                }
        })
    ]
});

export const lbBelongsToMany = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Belongs To Many`,
    description: `Define a Belongs to Many relationship within your model.`,
    body: [
        ...docBlock({
            description: [`The ${ts(st+1)} that belong to the ${VS_VAR.fileNameBase}`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\BelongsToMany`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->belongsToMany(${ts(st)}::class)`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\BelongsToMany`,
                    stop: st + 2
                }
        })
    ]
});

export const lbManyToMany = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Many to Many`,
    description: `Define a Many to Many relationship within your model.`,
    body: [
        ...lbBelongsToMany(st)['body']
    ]
});

export const lbHasManyThrough = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Has Many Through`,
    description: `Define a Has Many Through relationship within your model.`,
    body: [
        ...docBlock({
            description: [`Get all of the ${ts(st+1)} for the ${VS_VAR.fileNameBase}`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\HasManyThrough`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->hasManyThrough(${ts(st)}::class)`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\HasManyThrough`,
                    stop: st + 2
                }
        })
    ]
});

export const lbHasOneThrough = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Has One Through`,
    description: `Define a Has One Through relationship within your model. (5.8+)`,
    body: [
        ...docBlock({
            description: [`Get the ${ts(st+1)} associated with the ${VS_VAR.fileNameBase}`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\HasOneThrough`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->hasOneThrough(${ts(st + 3)}::class, ${ts(st + 4)}::class)`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\HasOneThrough`,
                    stop: st + 2
                }
        })
    ]
});

export const lbMorphTo = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Morph To`,
    description: `Polymorphic relation to multiple models using a single column. (5.0+)`,
    body: [
        ...docBlock({
            description: [`Get the parent ${ts(st+1)}able model.`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\MorphTo`
        }),
        ...func({
            name: `${ts(st+1)}able`,
            func: [
                `return \\$this->morphTo()`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\MorphTo`,
                    stop: st + 2
                }
        })
    ]
});

export const lbMorphOne = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Morph One`,
    description: `Defines a polymorphic one-to-one relationship. (5.0+)`,
    body: [
        ...docBlock({
            description: [`Get the models ${ts(st+1)}.`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\MorphOne`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->morphOne(${ts(st)}::class, '${ts(st + 1)}able')`+
                `${ts(st+3,`->latestOfMany()`)}`+
                `${ts(st+4,`->oldestOfMany()`)}`+
                `${ts(st+5,`->ofMany('${ts(st+6)}',${ts(st+7,'min,max','|')})`)};`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\MorphOne`,
                    stop: st + 2
                }
        })
    ]
});

export const lbMorphMany = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Morph Many`,
    description: `Defines a relationship to a related model with a one-to-many polymorphic relation. (5.0+)`,
    body: [
        ...docBlock({
            description: [`Get all the models ${ts(st+1)}.`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\MorphMany`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->morphMany(${ts(st)}::class, '${ts(st + 1)}able')`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\MorphMany`,
                    stop: st + 2
                }
        })
    ]
});

export const lbMorphedByMany = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Morphed By Many`,
    description: `Define relationship to parent models. (5.0+)`,
    body: [
        ...docBlock({
            description: [`Get all of the ${ts(st+4, '/downcase')} that are assigned this ${ts(st+3)}.`],
            atReturn: `${LARAVEL_CLASS.eloquent}\\Relations\\MorphToMany`
        }),
        ...func({
            name: `${ts(st+1)}`,
            func: [
                `return \\$this->morphMany(${ts(st)}::class, '${ts(st + 3)}able')`
            ],
            returnType: {
                    value: `${LARAVEL_CLASS.eloquent}\\Relations\\MorphToMany`,
                    stop: st + 2
                }
        })
    ]
});

export const lbKeyType = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Key Type`,
    description: `The type of the primary key (int or string). (5.8+)`,
    body: [
        ...docBlock({description: [`The \"type\" of the auto-incrementing ID.`], atVar: `string`}),
        ...v({
            name:`keyType`,
            value: ts(st+1, 'int,string', '|'),
            scope: `protected`,
            type: `string`
        }),

    ]
});

export const lbPerPage = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Per Page`,
    description: `Define the number of models to return in pagination. (5.0+)`,
    body: [
        ...docBlock({description: [`The number of models to return for pagination.`], atVar: `int`}),
        ...v({
            name:`perPage`,
            value: ts(st),
            scope: `protected`,
            type: `int`
        }),

    ]
});

export const lbCreatedAt = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Created At`,
    description: `Defines the name of the "created at" column. (5.0+)`,
    body: [
        ...docBlock({description: [`The name of the \"created at\" column.`], atVar: `string`}),
        ...v({
            name:`CREATED_AT`,
            value: ts(st+1, 'created_at'),
            scope: `const`,
            type: `string`
        }),

    ]
});

export const lbUpdatedAt = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Updated At`,
    description: `Defines the name of the "updated at" column. (5.0+)`,
    body: [
        ...docBlock({description: [`The name of the \"updated at\" column.`], atVar: `string`}),
        ...v({
            name:`UPDATED_AT`,
            value: ts(st+1, 'updated_at'),
            scope: `const`,
            type: `string`
        }),

    ]
});

export const lbDeletedAt = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Deleted At`,
    description: `Defines the name of the "deleted at" column. (SoftDeletes, 5.0+)`,
    body: [
        ...docBlock({description: [`The name of the \"deleted at\" column.`], atVar: `string`}),
        ...v({
            name:`DELETED_AT`,
            value: ts(st+1, 'deleted_at'),
            scope: `const`,
            type: `string`
        }),

    ]
});


export const lbDispatchesEvents = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Dispatches Events`,
    description: `An array that maps Eloquent events to their corresponding events that should be dispatched. (5.1+)`,
    body: [
        `use ${LARAVEL_CLASS.notifications}\\Notifiable;`,
        ``,
        ...docBlock({description: [`The event map for the model.`], atVar: `array`}),
        ...v({
            name:`dispatchesEvents`,
            value: [{
                key: ts(st + 1),
                value: ts(st + 2)
            }],
            scope: `protected`,
            type: `array`
        }),
    ]
});

export const lbAccessor = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Accessor`,
    description: `Modify values retrieved from model attributes (3.0+)`,
    body: [
        ...docBlock({
            description: [`Get the ${ts(st + 1)} attribute.`],
            atParam: [`string ${ts(st + 3, `\\$value`)}`],
            atReturn: ts(st + 4, `string`)
        }),
        ...func({
            name: `get${ts(st + 1,'pascalcase', '/')}Attribute`,
            func: [
                `return ${ts(st + 3, `\\$value`)}`
            ],
            args: [`${ts(st + 3, `\\$value`)}`],
            returnType: {
                    value: ts(st + 4, `string`),
                    stop: st + 2
                }
        })
    ]
});
export const lbMutator = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Mutator`,
    description: `Define the value for a models attribute (3.0+)`,
    body: [
        ...docBlock({
            description: [`Set the ${ts(st + 1)} attribute.`],
            atParam: [`string ${ts(st + 3, `\\$value`)}`],
            atReturn: ts(st + 5, `string`)
        }),
        ...func({
            name: `set${ts(st+1,'pascalcase', '/')}Attribute`,
            func: [
                `return \\$this->attributes['${ts(st + 3)}'] = ${ts(st + 4)}`
            ],
            args: [`${ts(st + 4, `\\$value`)}`],
            returnType: {
                    value: ts(st + 5, `string`),
                    stop: st + 2
                }
        })
    ]
});



export default [
    lbModelMake,
    lbModelTable,
    lbPrimaryKey,
    lbIncrementing,
    lbTimestamps,
    lbDateFormat,
    lbDatabaseConnection,
    lbAttributeCasting,
    lbAttributes,
    lbFillable,
    lbGuarded,
    lbPrunable,
    lbDates,
    lbBoot,
    lbLocalScope,
    lbDynamicScope,
    lbHasOne,
    lbBelongsTo,
    lbHasMany,
    lbBelongsToMany,
    lbManyToMany,
    lbHasManyThrough,
    lbHasOneThrough,
    lbMorphTo,
    lbMorphOne,
    lbMorphMany,
    lbMorphedByMany,
    lbHidden,
    lbVisible,
    lbAppends,
    lbTouches,
    lbKeyType,
    lbPerPage,
    lbCreatedAt,
    lbUpdatedAt,
    lbDeletedAt,
    lbDispatchesEvents,
    lbAccessor,
    lbMutator
];