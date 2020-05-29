import styled from 'styled-components';

const MainLoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props)=>props.theme.pureWhite};
`;

MainLoaderWrapper.LoaderVideo = styled.video`
  width: auto;
  height: 300px;
`;

export default MainLoaderWrapper;
