import { createRenderer } from 'fela';
import namedKeys from 'fela-plugin-named-keys';
import unit from 'fela-plugin-unit';

export const renderer = createRenderer({
  plugins: [
    namedKeys({
      atDesktop: '@media (min-width: 1024px)',
    }),
    unit(),
  ]
})
