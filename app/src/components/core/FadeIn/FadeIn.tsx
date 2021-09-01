import React, {FC} from 'react';
import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

interface FadeProps {
    duration?: number,
    delay?: number,
  }
  
  
export const FadeIn: FC<FadeProps> = ({
duration = 1000,
delay = 0,
children,
//  ...delegated
}) => {
return (
  <Wrapper
   //  {...delegated}
    style={{
     //  ...(delegated?.style || {}),
      animationDuration: duration + 'ms',
      animationDelay: delay + 'ms',
    }}
  >
    {children}
  </Wrapper>
);
};
const Wrapper = styled.div`
@media (prefers-reduced-motion: no-preference) {
  animation-name: ${fadeIn};
  animation-fill-mode: backwards;
}
`;

