import { css } from 'styled-components';

// z-index 추후
export const zIndex = {
  layer1: css`
    z-index: 1;
  `,
  layer2: css`
    z-index: 10;
  `,
  layer3: css`
    z-index: 100;
  `,
  layer4: css`
    z-index: 1000;
  `,
  gnb: css`
    z-index: 9;
  `,
};

export const elevation = {
  /** FAB */
  shadow2: css`
    box-shadow:
      0px 1px 2px 0px rgba(0, 0, 0, 0.16),
      0px 0px 1px 0px rgba(0, 0, 0, 0.12);
  `,
  /** Select option group / Tooltips / Alert/Notification */
  shadow4: css`
    box-shadow:
      0px 2px 4px 0px rgba(0, 0, 0, 0.16),
      0px 0px 2px 0px rgba(0, 0, 0, 0.12);
  `,
  /** Date Picker / Cards / Snack bar */
  shadow8: css`
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.16),
      0px 0px 2px 0px rgba(0, 0, 0, 0.12);
  `,
  /** Modal */
  shadow16: css`
    box-shadow:
      0px 8px 16px 0px rgba(0, 0, 0, 0.16),
      0px 0px 8px 0px rgba(0, 0, 0, 0.12);
  `,
};
