import * as React from 'react';

import { withDesign } from 'storybook-addon-designs';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  decorators: [withDesign],
};

export const decorators = [(storyFn) => <>{storyFn()}</>];
