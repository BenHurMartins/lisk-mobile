import { themes, colors, boxes } from '../../../constants/styleGuide';

export default () => ({
  common: {
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: boxes.boxPadding,
      paddingBottom: 2 * boxes.boxPadding,
    },
  },

  [themes.light]: {
    wrapper: {
      backgroundColor: colors.light.white,
    },
  },

  [themes.dark]: {
    wrapper: {
      backgroundColor: colors.dark.maastrichtBlue,
    },
  },
});
