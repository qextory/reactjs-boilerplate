import { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import { css } from '@emotion/react';

import { GlobalPortal } from '@/GlobalPortal';

import Button from './Button';

const FixedBottomCTA = forwardRef(function FixedBottomCTA(
  props: ComponentPropsWithoutRef<typeof Button>,
  forwardedRef: Ref<HTMLButtonElement>
) {
  return (
    <GlobalPortal.Consumer>
      <div
        css={css`
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
        `}
      >
        <div
          css={css`
            padding: 0 20px 18px;
          `}
        >
          <Button {...props} ref={forwardedRef} data-testid="cta" />
        </div>
      </div>
    </GlobalPortal.Consumer>
  );
});

export default FixedBottomCTA;
