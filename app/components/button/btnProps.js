import { Platform } from 'react-native';

const mdSpacing = 15;
const smSpacing = 12;
const xsSpacing = 12;

const topOffset = Platform.OS === 'ios' ? 0 : 3;

const btnProps = {
  md: {
    fontSize: 18,
    iconProps: {
      top: mdSpacing + topOffset,
      left: 20,
    },
    iconSize: 20,
    paddingLeft: (w) => (w === 'auto' ? 55 : mdSpacing),
    paddingRight: mdSpacing,
    paddingVertical: mdSpacing,
  },
  sm: {
    fontSize: 16,
    iconProps: {
      top: smSpacing + topOffset,
      left: 15,
    },
    iconSize: 16,
    paddingLeft: (w) => (w === 'auto' ? 45 : smSpacing),
    paddingRight: smSpacing,
    paddingVertical: smSpacing,
  },
  xs: {
    fontSize: 14,
    iconProps: {
      top: xsSpacing + topOffset,
      left: 12,
    },
    iconSize: 14,
    paddingLeft: (w) => (w === 'auto' ? 35 : xsSpacing),
    paddingRight: xsSpacing,
    paddingVertical: xsSpacing,
  },
};

export default btnProps;
