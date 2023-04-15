export interface SnippetMapping {
  type: string;
  key: string;
  body: string[];
  description?: string;
  isFileTemplate?: boolean;
};

export interface Snippet {
  key: string;
  prefix: string;
  body: string[];
  description?: string;
  isFileTemplate?: boolean;
};

export type TypeMapping = 'string' | 'bool' | 'array';
export type TypeScope = 'public' | 'protected' | 'private';
export type TypeObjectOperator = '->' | '::' | '';


export const MAPPINGS = {
  prefix: 'lb',
  variable: '\\$',
  fileNameBase: '${TM_FILENAME_BASE}',
  fileName: '${1:${TM_FILENAME_BASE}}',
  capitalize: '${1/(.*)/${1:/capitalize}/}',
  namespace: 'namespace ${RELATIVE_FILEPATH/^(?:.*[\\\\\\/])?(app|src)(?=[\\\\\\/])|[\\\\\\/][^\\\\\\/]*$|([\\\\\\/])/${1:/capitalize}${2:+\\\\}/g};'
} as const;