import { css } from "lit";

export const homeStyles = css`
    .svg-container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    svg {
        cursor: grab;
        background-color: white;
        flex-grow: 1;

        @media (max-width: 768px) {
            height: 120vh;
            touch-action: none;
        }
    }

    .node {
        cursor: pointer;
        user-select: none;

        circle {
            fill: #fff;
            stroke: var(--tenakh-blue);
            stroke-width: 5px;

            &.negative {
                stroke: var(--heifer-red);
            }
        }

        .commandment-text {
            font-family: var(--body-font);
            width: 20px;
            fill: black;
            text-shadow: 1px 1px 2px gray;

            &.verse {
                fill: gray;
                font-style: italic;
            }

            &.golden-command .commandment-text {
                fill: darkgoldenrod;
                -webkit-text-shadow: 1px 1px 1px silver;
                text-shadow: 1px 1px 1px silver;
                font: 17px sans-serif;
            }
        }
    }

    .link {
        fill: none;
        stroke: #ccc;
        stroke-width: 2px;
    }

    .graph-toolbar {
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: -40px;
        margin-top: 12px;
    }
`;