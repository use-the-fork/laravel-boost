type TypeMapping = 'string' | 'bool' | 'int' | 'array';
type TypeScope = 'public' | 'protected' | 'private' | 'const';


interface VarProps {
  name: string;
  value: {key: string, value?: string, type?: TypeMapping}[] | string;
  scope?: TypeScope;
  type?: TypeMapping;
};

export const v = ({
  name,
  value,
  scope,
  type = 'string'
}: VarProps) => {
    if (type === 'array') {
        const returnVar = [];
        returnVar.push([scope && `${scope} `, `\\$`, name, ` = `, `[`].join(``));

        if (Array.isArray(value)) { // Use type guard to ensure value is an array
            value.map((item) => {
                if(!item.value){
                    returnVar.push(`\t${typeWrapper(item.key)},`);
                } else {
                    returnVar.push(`\t${typeWrapper(item.key)} => ${typeWrapper(item.value)},`);
                }
            });
        }
        returnVar.push(`];`);

        return returnVar;
    }

    return [[`${scope} `, `\\$`, name, ` = `, typeWrapper(value as string, type)].join(``).trim()];
};

export default v;




const typeWrapper = (value: string, type: Omit<TypeMapping, 'array'> = 'string'): string => {
    switch (type) {
        case 'int':
        case 'bool':
            return `${value}`;
        default:
            return `'${value}'`;
    }
};