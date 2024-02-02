import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  .wrapper-image-logo {
    background-color: #abbbcc;
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px 6px 0px 0px;
  }

  .container-items {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 16px 16px 20px 16px;

    .wrapper-items {
      margin-bottom: 16px;
      h3 {
        color: #0c1932;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        height: 54px;
      }

      p {
        margin-top: 8px;
        color: rgba(12, 25, 50, 0.6);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
    }

    .wrapper-award {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        color: rgba(12, 25, 50, 0.8);
      }
    }

    .wrapper-budget-revenue {
      display: flex;
      justify-content: space-between;

        h4 {
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: 16px;
          margin-bottom: 4px;
        }

        p {
          color: rgba(12, 25, 50, 0.6);
          font-family: Poppins;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 14px;
        }

  }
  }
`
