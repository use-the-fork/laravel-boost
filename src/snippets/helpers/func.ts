import { TypeScope } from "../types";
import { ts } from './tabStop';

interface FuncProps {
  name: string;
  func: string[];
  args?: string[];
  returnType?: {
    value: string,
    stop: number
  };
  scope?: TypeScope;
  isStatic?: boolean
};

export const func = ({
  name,
  func,
  args = [],
  returnType,
  scope = 'public',
  isStatic = false,
}: FuncProps) => {

    const returnFunc = [
        (scope ? `${scope} ` : ``) + (isStatic ? `static ` : ``) + `function ${name}(${args.join(', ')})` + (returnType ? `${ts(returnType.stop, ` : ${returnType.value}`)}` : ''),
        `{`,
        ...func.map((line) => `\t${line.trim()};`),
        '}'
    ];

    return returnFunc;
};

export default func;