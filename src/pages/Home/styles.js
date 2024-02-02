import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items:center;
    padding-bottom: 100px;

`

export const ContainerItems = styled.div`
    
    display: grid;
    grid-template-columns: repeat(4,240px);
    gap: 16px;
    
    @media ${breakpoints.bg}{

        grid-template-columns: repeat(3,240px);
    }

    @media ${breakpoints.md}{
        
        grid-template-columns: repeat(2,240px);
    }

    @media ${breakpoints.sm}{
        
        grid-template-columns: repeat(1,80vw);
    }
    
`