type TabStopMapping = (startTab: number, option?: string, delimiter?: '/' | ':' | '|' ) => string;

export const ts: TabStopMapping = (startTab: number = 0, option?: string, delimiter = ':'): string => {
  if (startTab === 0 && !option) {
    return '$0';
  }
  if (!option) {
    return ['${',startTab,'}'].join('');
  }
  if (delimiter === '|') {
    return ['${',startTab, delimiter, option, delimiter,'}'].join('');
  }
  if (delimiter === '/') {
    return ['${',startTab, delimiter, `(.*)` , delimiter, '${', startTab, ':', delimiter, option , '}',delimiter ,'}'].join('');
  }

  return ['${',startTab, delimiter, option,'}'].join('');
};

export default ts;