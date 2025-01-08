import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const sharedStyles = css`
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--title-font);
  }

  p {
    font-family: var(--body-font);
  }

  .d-flex {
    display: flex;
  }

  .d-none {
    display: none;
  }

  .flex-column {
    flex-direction: column;
  }

  .align-items-center {
    align-items: center;
  }

  .align-items-baseline {
    align-items: baseline;
  }

  .justify-content-space-between {
    justify-content: space-between;
  }

  .gap-1 {
    gap: 1em;
  }

  .gap-2 {
    gap: 2em;
  }

  .gap-3 {
    gap: 3em;
  }

  .gap-4 {
    gap: 4em;
  }

  .text-success {
    color: #5D956F;
  }

  .text-danger {
    color: #802F3E;
  }

  .text-warning {
    color: #D4896C;
  }
`;