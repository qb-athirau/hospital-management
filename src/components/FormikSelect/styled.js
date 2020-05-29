import styled from 'styled-components';

export const FormikSelectLayout = styled.div`
    margin: 10px;
    .MuiFormHelperText-root {
        width: 200px;
        color: ${(props)=>props.theme.errorRed};
      }
`;