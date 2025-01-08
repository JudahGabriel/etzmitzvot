import { css } from "lit";

export const appIndexStyles = css`

    .layout-container {
        display: flex;
        flex-direction: column;
        height: 100vh;

        app-header {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 0px;
            z-index: 1; /** otherwise it will get clipped by the SVG */
            width: 100%;
            position: sticky;
            top: 0;
        }
    }

    main {
        flex-grow: 1;
        display: flex;
        padding: 0;
        gap: 12px;

        /** on mobile, we want the sidebar to appear under the commandments */
        @media (max-width: 768px) {
            flex-direction: column;
        }

        .router-outlet {
            flex-grow: 1;

            /** on mobile, don't let the router outlet take up all the space or we can't see the sidebar under the SVG */
            @media (max-width: 768px) {
                flex-grow: 0;
                max-height: 75vh;
            }
        }

        app-sidebar {
            background-color: var(--sl-color-gray-50);

            @media (max-width: 768px) {
                box-shadow: rgba(0, 0, 0, 0.5) 0px -1px 5px 0px;
            }
        }
    }

    .alert-container {
        position: absolute;
        top: 10px;
        right: 10px;
        max-width: 500px;
        min-width: 400px;

        details {
            overflow: auto;
        }
    }
`;