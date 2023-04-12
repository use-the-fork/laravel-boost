export const LARAVEL_CLASS = {
    eloquent: '\\Illuminate\\Database\\Eloquent',
    notifications: '\\Illuminate\\Notifications'
} as const;

export const VS_VAR = {
  fileNameBase: '${TM_FILENAME_BASE}',
  namespace: 'namespace ${RELATIVE_FILEPATH/^(?:.*[\\\\\\/])?(app|src)(?=[\\\\\\/])|[\\\\\\/][^\\\\\\/]*$|([\\\\\\/])/${1:/capitalize}${2:+\\\\}/g};'
} as const;
