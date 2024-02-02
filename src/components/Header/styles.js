import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";

export const TopHeader = styled.div`
  background: #4c16c9;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 18px;

  p {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1008px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 64px;
  border-bottom: 1px solid #d8e1eb;
  padding-bottom: 32px;

  @media ${breakpoints.bg}{
    padding: 0px 20px 32px;
  }

  .av-values {
    display: flex;
    justify-content: space-between;



    input {
      width: 198px;
      height: 40px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      display: flex;
      padding: 11px 7px 11px 11px;
      border-radius: 2px;
      border: 1px solid  #c5d2e0;
    }

    @media ${breakpoints.sm}{
        flex-direction: column;
        
        input{
          margin-top: 20px;
          width: 80vw;
          align-items: center;
          
        
        }
    }
  }
`;
