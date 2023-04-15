import { docBlock, ts, v } from '../helpers';
import { SnippetMapping } from '../types';

const t = `Migration`;

export const lbConnection = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Database Connection`,
    description: `Specify the database connection for the migration. (5.2+)`,
    body: [
        ...docBlock({description: [`The database connection that should be used by the migration.`], atVar: `string`}),
        ...v({
            name:`connection`,
            value: ts(st),
            scope: `protected`
        }),
    ]
});

export const lbCreate = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Create`,
    description: `Create a new database table. (5.0+)`,
    body: [
        `Schema::create(${ts(st + 1, `users`)}), function(Blueprint \\$table){`,
        ts(st + 2, `\\$table->temporary();`),
        ts(st + 3, `\\$table->comment('${ts(st + 4,`Business calculations`)}');`),
        `\t${ts(st)}`,
        `});`
    ]
});

export const lbHasTable = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Has Table`,
    description: `Checks if the specified table exists in the database. (5.0+)`,
    body: [
        `if(Schema::hasTable(${ts(st + 1, `users`)})){`,
        `\t${ts(st)}`,
        `};`
    ]
});

export const lbHasColumn = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Has Column`,
    description: `Checks if the table has a specific column. (5.0+)`,
    body: [
        `if(Schema::hasColumn('${ts(st + 1, `users`)}'${ts(st + 2, `,${ts(st+3, `'email'`)}`)})){`,
        `\t${ts(st)}`,
        `};`
    ]
});

export const lbRename = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Rename`,
    description: `Renames a table in the database. (5.1+)`,
    body: [
        `Schema::Rename('${ts(st + 1, `from`)}','${ts(st + 1, `to`)}');`,
    ]
});

export const lbDrop = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Drop`,
    description: `Drops a table (5.0+)`,
    body: [
        `Schema::drop('${ts(st + 1, `table`)}');`,
    ]
});

export const lbBigIncrements = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Big Increments`,
    description: `Defines a big integer auto-incrementing primary key column. (5.8+)`,
    body: [
        `\\$table->bigIncrements('${ts(st + 1, `id`)}');`,
    ]
});

export const lbBigInteger = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Big Integer`,
    description: `Creates a BIGINT equivalent column. (5.0+)`,
    body: [
       `\\$table->bigIncrements('${ts(st + 1, `votes`)}');`,
    ]
});

export const lbBinary = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Binary`,
    description: `Creates a BLOB equivalent column. (5.0+)`,
    body: [
       `\\$table->binary('${ts(st + 1, `photo`)}');`,
    ]
});

export const lbBoolean = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Boolean`,
    description: `Creates a BOOLEAN equivalent column. (5.0+)`,
    body: [
       `\\$table->boolean('${ts(st + 1, `confirmed`)}');`,
    ]
});

export const lbChar = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Char`,
    description: `Creates a CHAR equivalent column. (5.0+)`,
    body: [
       `\\$table->char('${ts(st + 1, `confirmed`)}',${ts(st + 2, `100`)});`,
    ]
});

export const lbDateTimeTz = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Date Time Tz`,
    description: `Creates a DATETIME (with timezone) equivalent column. (5.2+)`,
    body: [
       `\\$table->dateTimeTz('${ts(st + 1, `created_at`)}'${ts(st + 2, `, $precision = ${ts(st + 3, `0`)}`)});`,
    ]
});

export const lbDateTime = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Date Time`,
    description: `Creates a DATETIME equivalent column. (5.0+)`,
    body: [
       `\\$table->dateTime('${ts(st + 1, `created_at`)}'${ts(st + 2, `, $precision = ${ts(st + 3, `0`)}`)});`,
    ]
});

export const lbDate = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Date`,
    description: `Creates a DATE equivalent column. (5.0+)`,
    body: [
       `\\$table->date('${ts(st + 1, `created_at`)}');`,
    ]
});

export const lbDecimal = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Decimal`,
    description: `Creates a DECIMAL equivalent column. (5.0+)`,
    body: [
       `\\$table->decimal('${ts(st + 1, `amount`)}', $precision = ${ts(st + 2, `8`)}, $scale = ${ts(st + 3, `2`)});`,
    ]
});

export const lbDouble = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Double`,
    description: `Creates a DOUBLE equivalent column. (5.0+)`,
    body: [
       `\\$table->double('${ts(st + 1, `amount`)}',${ts(st + 2, `8`)}, ${ts(st + 3, `2`)});`,
    ]
});

export const lbEnum = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Enum`,
    description: `Creates a ENUM equivalent column. (5.7+)`,
    body: [
       `\\$table->enum('${ts(st + 1, `difficulty`)}', ['${ts(st + 2, `easy`)}', '${ts(st + 3, `hard`)}'${ts(st + 0)}]);`,
    ]
});

export const lbFloat = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Float`,
    description: `Creates a DOUBLE equivalent column. (5.0+)`,
    body: [
       `\\$table->float('${ts(st + 1, `amount`)}',${ts(st + 2, `8`)}, ${ts(st + 3, `2`)});`,
    ]
});

export const lbForeignId = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Foreign Id`,
    description: `Creates a UNSIGNED BIGINT equivalent column. (7.0+)`,
    body: [
       `\\$table->foreignId('${ts(st + 1, `created_at`)}');`,
    ]
});

export const lbForeignIdFor = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Foreign Id For`,
    description: `Creates a {column}_id UNSIGNED BIGINT equivalent column. (8.0+)`,
    body: [
       `\\$table->foreignIdFor(${ts(st + 1, `user`, '/capitalize')}::class);`,
    ]
});

export const lbForeignUlid = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Foreign Ulid`,
    description: `Creates a ULID equivalent column. (8.59+)`,
    body: [
       `\\$table->foreignUlid('${ts(st + 1, `user_id`)}')${ts(st + 2, `->references('${ts(st + 3, `id`)}')->on('${ts(st + 4, `table_name`)}')`)};`,
    ]
});

export const lbForeignUuid = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Foreign Uuid`,
    description: `Creates a UUID equivalent column. (6.0+)`,
    body: [
       `\\$table->foreignUuid('${ts(st + 1, `user_id`)}')${ts(st + 2, `->references('${ts(st + 3, `id`)}')->on('${ts(st + 4, `table_name`)}')`)};`,
    ]
});

export const lbGeometryCollection = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Geometry Collection`,
    description: `Creates a GEOMETRYCOLLECTION equivalent column. (5.8+)`,
    body: [
       `\\$table->geometryCollection('${ts(st + 1, `positions`)}');`,
    ]
});

export const lbGeometry = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Geometry`,
    description: `Creates a GEOMETRY equivalent column. (5.8+)`,
    body: [
       `\\$table->geometry('${ts(st + 1, `positions`)}');`,
    ]
});

export const lbId = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Id`,
    description: `Creates an auto-incrementing integer column named "id". (5.0+)`,
    body: [
       `\\$table->id();`,
    ]
});

export const lbIncrements = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Increments`,
    description: `Creates an auto-incrementing UNSIGNED INTEGER equivalent column as a primary key. (5.0+)`,
    body: [
       `\\$table->increments('${ts(st + 1, `id`)}');`,
    ]
});

export const lbInteger = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Increments`,
    description: `Creates a INTEGER equivalent column. (5.0+)`,
    body: [
       `\\$table->increments('${ts(st + 1, `votes`)}');`,
    ]
});

export const lbIpAddress = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Ip Address`,
    description: `Creates a VARCHAR equivalent column. (5.0+)`,
    body: [
       `\\$table->ipAddress('${ts(st + 1, `visitor`)}');`,
    ]
});

export const lbJson = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Json`,
    description: `Creates a JSON equivalent column. (5.2+)`,
    body: [
       `\\$table->json('${ts(st + 1, `options`)}');`,
    ]
});

export const lbJsonb = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Jsonb`,
    description: `Creates a JSONB equivalent column. (5.3+)`,
    body: [
       `\\$table->jsonb('${ts(st + 1, `options`)}');`,
    ]
});

export const lbLineString = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Line String`,
    description: `Creates a LINESTRING equivalent column. (5.8+)`,
    body: [
       `\\$table->lineString('${ts(st + 1, `positions`)}');`,
    ]
});

export const lbLongText = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Long Text`,
    description: `Creates a LONGTEXT equivalent column. (5.0+)`,
    body: [
       `\\$table->longText('${ts(st + 1, `description`)}');`,
    ]
});

export const lbmacAddress= (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Mac Address`,
    description: `Some database systems, such as PostgreSQL, have a dedicated column type for this type of data. (5.2+)`,
    body: [
       `\\$table->macAddress('${ts(st + 1, `description`)}');`,
    ]
});

export const lbmediumIncrements = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Medium Increments`,
    description: `Creates an auto-incrementing UNSIGNED MEDIUMINT equivalent column as a primary key. (5.2+)`,
    body: [
       `\\$table->mediumIncrements('${ts(st + 1, `id`)}');`,
    ]
});

export const lbMediumInteger = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Medium Integer`,
    description: `Creates a MEDIUMINT equivalent column. (5.0+)`,
    body: [
       `\\$table->mediumInteger('${ts(st + 1, `id`)}');`,
    ]
});

export const lbMediumText = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Medium Text`,
    description: `Creates a MEDIUMTEXT equivalent column. (5.0+)`,
    body: [
       `\\$table->mediumText('${ts(st + 1, `id`)}');`,
    ]
});

export const lbMorphs = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Morphs`,
    description: `Creates a {column}_id UNSIGNED BIGINT equivalent column and a {column}_type VARCHAR equivalent column. (5.2+)`,
    body: [
       `\\$table->morphs('${ts(st + 1, `taggable`)}');`,
    ]
});

export const lbMultiLineString = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Multi Line String`,
    description: `Creates a MULTILINESTRING equivalent column. (5.8+)`,
    body: [
       `\\$table->multiLineString('${ts(st + 1, `positions`)}');`,
    ]
});

export const lbMultiPoint = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Multi Point`,
    description: `Creates a MULTIPOINT equivalent column. (5.0+)`,
    body: [
       `\\$table->multiPoint('${ts(st + 1, `positions`)}');`,
    ]
});

export const lbMultiPolygon = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Multi Polygon`,
    description: `Creates a MULTIPOLYGON equivalent column. (5.7+)`,
    body: [
       `\\$table->multiPolygon('${ts(st + 1, `positions`)}');`,
    ]
});

export const lbNullableTimestamps = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Nullable Timestamps`,
    description: `Creates nullable created_at and updated_at timestamp columns. (5.5+)`,
    body: [
       `\\$table->nullableTimestamps(${ts(st + 1, `0`)});`,
    ]
});

export const lbNullableMorphs = (st: number = 0): SnippetMapping => ({
    type: t,
    key: `Nullable Morphs`,
    description: `Creates a nullable {column}_id UNSIGNED BIGINT equivalent column and a nullable {column}_type VARCHAR equivalent column. (5.2+)`,
    body: [
       `\\$table->nullableMorphs('${ts(st + 1, `taggable`)}');`,
    ]
});

export default [
    lbConnection,
    lbCreate,
    lbHasTable,
    lbHasColumn,
    lbRename,
    lbDrop,
    lbBigIncrements,
    lbBigInteger,
    lbBinary,
    lbBoolean,
    lbChar,
    lbDateTimeTz,
    lbDateTime,
    lbDate,
    lbDecimal,
    lbDouble,
    lbEnum,
    lbFloat,
    lbForeignId,
    lbForeignIdFor,
    lbForeignUlid,
    lbGeometryCollection,
    lbGeometry,
    lbId,
    lbInteger,
    lbIpAddress,
    lbJson,
    lbJsonb,
    lbLineString,
    lbmacAddress,
    lbmediumIncrements,
    lbMediumInteger,
    lbMediumText,
    lbMorphs,
    lbMultiLineString,
    lbMultiPoint,
    lbMultiPolygon,
    lbNullableTimestamps,
    lbNullableMorphs
];