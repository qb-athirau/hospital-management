import styled from 'styled-components';

export const MarqueeLayout = styled.span`
  display: flex;
  top: 0.9em;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  width: 200%;
  background-color: ${(props)=>props.theme.snow};
  animation: marquee 25s linear infinite;
  :hover {
    animation-play-state: paused;
  }

  /* Make it move! */
  @keyframes marquee {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
`;

export const Date = styled.span`
  color: ${(props)=>props.theme.flatBlue};
  padding: 5px 0;
`;
export const Item = styled.span`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
`;
export const Details = styled.span``;
