import { writeFile } from 'fs';
import * as _ from 'lodash';
import { modelSnippets } from './sourceSnippets';
import { MAPPINGS } from './types';

const getSnippets = () => {
    //const { languageScopes } = extensionConfig();

const snippets = modelSnippets.reduce((acc, curr) => {

    const snip = curr();
    const key = ['Laravel', `${snip.type}:`, snip.key].join(' ');

    //const prefix = _.camelCase([MAPPINGS.prefix].join(' '));

    const prefix = [
        MAPPINGS.prefix,
        snip.type,
        '-',
        _.camelCase(snip.key)
    ].join('');
    return {
        ...acc,
        [key]: {
                prefix: prefix,
                description: snip.description,
                body: snip.body,
                isFileTemplate: snip.isFileTemplate,
            },
        };
    }, {});

  console.log(snippets);

  return JSON.stringify(snippets, null, 2);
};

const generateSnippets = () =>
  new Promise((resolve) => {
    const jsonSnippets = getSnippets();
    writeFile(
      __dirname + '/../../snippets/generated.json',
      jsonSnippets,
      (error) => {
        if (error) {
          console.error(error);
        }
        return resolve(true);
      },
    );
  });

generateSnippets();