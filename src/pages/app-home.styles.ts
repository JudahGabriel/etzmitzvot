import { css } from "lit";

export const homeStyles = css`
    .selected-commandment-details {
        &::part(title) {
            font-family: var(--title-font);
        }

        blockquote {
            font-size: 18px;
            font-family: var(--title-font);
            max-height: 250px;
            overflow: auto;
            font-style: italic;
            background-color: #FBFBFA;
            padding: 20px;
            margin: 0;
            color: black;
            border-left: 5px solid var(--manuscript-gold);

            footer {
                color: #5d5d5d;
                font-family: var(--body-font);
                font-style: normal;
                font-size: 14px;
                margin-top: 10px;
            }
        }

        .commandment-attributes-group {
            margin-top: 24px;
            cursor: pointer;
        }

        .commandment-attribute {
            display: flex;
            align-items: center;
            gap: 1em;

            sl-icon[name="star"] {
                color: var(--sl-color-neutral-300);
            }

            sl-icon[name="star-fill"] {
                color: var(--sl-color-amber-500);
            }
        }

        sl-tree {
            --indent-guide-width: 1px;
        }

         sl-tree-item::part(expand-button) {
            /* Disable the expand/collapse animation */
            rotate: none;
         }
    }

    .graph-toolbar {
        position: absolute;
        right: 25px;
    }
`;