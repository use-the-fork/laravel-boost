interface DocBlockProps {
  description: string[],
  atVar?: string,
  atParam?: string[],
  atReturn?: string,
};

export const docBlock = ({
  description,
  atVar,
  atParam = [],
  atReturn,
}: DocBlockProps) => {
  const theReturn = [
    '/**',
    ...description.map((desc) => ` * ${desc.trim()}`),
  ];

    if (atVar || atParam.length > 0 || atReturn) {
        theReturn.push(' *');
    }

    if (atVar) {
        theReturn.push(` * @var ${atVar.trim()}`);
    }

    if (atParam.length > 0) {
        theReturn.push(...atParam.map((param) => ` * @param ${param.trim()}`));
    }

    if (atReturn) {
        theReturn.push(` * @return ${atReturn.trim()}`);
    }

  theReturn.push(' */');

  return theReturn;
};

export default docBlock;