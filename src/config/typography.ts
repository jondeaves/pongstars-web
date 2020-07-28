import Typography from "typography"
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'
import { padding, margin } from "polished";

import { themeSettings as theme } from '../common/themes/theme.settings';

usWebDesignStandardsTheme.baseFontSize = '19px';
usWebDesignStandardsTheme.headerFontFamily = ['Lato', 'sans-serif'];
usWebDesignStandardsTheme.bodyFontFamily = ['Lato', 'sans-serif'];

usWebDesignStandardsTheme.overrideThemeStyles = () => ({
  '*, html, body, p, a, a:visited, a:hover': {
    color: theme.color.primary
  },
  'html, body': {
    backgroundColor: theme.color.tertiary,
  },
  'li': {
    marginBottom: '4px',
  },
  'a': {
    borderBottom: `1px solid ${theme.color.secondary}`,
    paddingBottom: '1px',
    textDecoration: 'none',
  },
  'main, header, section, footer': {
    margin: '1.53rem 0'
  },

  'header': {
    marginTop: 'calc(1.53rem * 2)',
  },

  'main': {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    maxWidth: theme.container.width,
    position: 'relative',

    ...margin(0, 'auto'),
    ...padding(null, theme.spacing.medium),
  },

  'footer': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  'small': {
    fontSize: '70%'
  }
})

const typography = new Typography(usWebDesignStandardsTheme)

export default typography