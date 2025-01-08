import { css } from "lit";

export const sidebarStyles = css`
    :host {
        color: var(--sl-color-gray-500);
    }

    aside {
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-width: 300px;
        padding: 24px;

        &.collapsed {
            max-width: unset;
            padding: 24px 6px 0 6px;
        }
    }

    h1 {
        color: var(--sl-color-gray-500);
        border-bottom: 1px solid var(--sl-color-gray-300);
        padding-bottom: 12px;
        margin-top: 0px;
    }

    ul {
        padding-left: 20px;
    }

    .stat {
        display: flex;
        gap: 12px;
    }

    sl-progress-ring {
        --size: 100px;

        font-size: 0.8em;
    }

    .collapse-btn {
        @media (max-width: 768px) {
            display: none;
        }
    }
`;