import { css } from 'styled-components';

export default css`
  .flex-row {
    display: flex;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }

  .items-baseline {
    align-items: baseline;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-center {
    align-items: center;
  }

  .content-start {
    justify-content: flex-start;
  }
  .content-end {
    justify-content: flex-end;
  }
  .content-center {
    justify-content: center;
  }
  .content-between {
    justify-content: space-between;
  }
  .content-around {
    justify-content: space-around;
  }
`;
