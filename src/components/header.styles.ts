import { css } from "lit";

export const headerStyles = css`
    :host {
        font-family: var(--body-font);
        background-color: var(--sl-color-neutral-0);
    }

    header {
        padding: 4px 12px;
        border-bottom: 1px solid silver;
        height: 60px;
        display: flex;
        align-items: center;
    }

    img {
        max-height: 50px;
        width: auto;
    }

    h1 {
        display: flex;
        align-items: center;
        gap: 12px;
        height: fit-content;
        font-size: 28px;
        margin-bottom: 4px;
        margin-top: 0;
        padding-left: 12px;
    }

    .subtitle {
        font-size: 1em;
        margin: 8px;
    }

    sl-progress-ring {
        --size: 20px;

        @media (max-width: 768px) {
            /** On mobile, move the progress ring up a bit to take up less vertical space from the text */
            margin-top: -250px;
        }
    }
`;