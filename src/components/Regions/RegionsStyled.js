import styled from "styled-components";

export const StyledRegions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px;

  h2 {
    text-align: center;
    color: #06d6a0;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    color: #118ab2;
    font-size: 18px;
    margin-bottom: 16px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
  }

  .detail-regional {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .detail-regional h2 {
    font-size: 24px;
    color: #073b4c;
    margin-bottom: 10px;
  }

  .stat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
  }

  .stat .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .stat .text p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #073b4c;
  }

  .stat .text .number {
    font-size: 18px;
    font-weight: bold;
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }

  /* Medium Screen */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .detail-regional {
      margin: 10px 0;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .detail-regional {
      flex: 1;
      margin: 0 20px;
    }
  }
`;
