import { css } from "lit";

export const headerStyles = css`
    :host {
        font-family: var(--body-font);
    }

    header {
        padding: 24px;
        display: flex;
        flex-direction: column;
    }

    .info {
        display: flex;
        border: 1px solid silver;
        padding: 24px;
        justify-content: space-between;
        & > div {
            flex: 1;
        }
    }

    h1 {
        font-size: 3em;
        margin-bottom: 10px;
        margin-top: 0;
        border-left: 5px solid var(--manuscript-gold);
        padding-left: 12px;
    }

    .subtitle {
        font-size: 1.2em;
    }

    sl-progress-ring {
        --size: 100px;
    }
`;