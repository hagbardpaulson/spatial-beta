<template>
    <button class="md-button md-accent md-theme-default">
      <slot />
    </button>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdButtonContent from './MdButtonContent'

  export default new MdComponent({
    name: 'MdButton',
  })
</script>

<style lang="scss">
    $md-button-min-width: 88px;
    $md-button-height: 36px;
    $md-button-radius: 2px;
    $md-button-font-size: 14px;

    $md-button-dense-height: 32px;

    $md-button-icon-size: 40px;

    $md-button-fab-size: 56px;
    $md-button-fab-size-mini: $md-button-icon-size;

    .md-button-clean {
        margin: 0;
        padding: 0;
        display: inline-block;
        position: relative;
        overflow: hidden;
        outline: none;
        background: transparent;
        border: 0;
        border-radius: 0;
        font-family: inherit;
        line-height: normal;
        text-decoration: none;
        vertical-align: top;
        white-space: nowrap;
    }

    .md-button {
        @extend .md-button-clean;
        min-width: $md-button-min-width;
        height: $md-button-height;
        margin: 6px 8px;
        user-select: none;
        border-radius: $md-button-radius;
        font-size: $md-button-font-size;
        font-weight: 500;
        text-transform: uppercase;

        &:active {
            outline: none;
        }

        &[disabled] {
            pointer-events: none;
        }

        &:not([disabled]) {
            cursor: pointer;

            &:hover,
            &:active,
            &.md-focused {
                &:before {
                    background-color: currentColor;
                    opacity: .12;
                }
            }

            &.md-focused {
                &.md-primary,
                &.md-accent {
                    &:before {
                        opacity: .2;
                    }
                }
            }

            &:active {
                &:before {
                    opacity: .2;
                }
            }

            &.md-ripple-off:active:before {
                opacity: .26;
            }
        }

        &.md-plain.md-button.md-raised:not([disabled]) {
            color: rgba(#000, .87);
            background-color: #fff;

            .md-icon-font {
                color: rgba(#000, .87);
            }

            .md-icon-image {
                fill: rgba(#000, .87);
            }
        }

        &::-moz-focus-inner {
            padding: 0;
            border: 0;
        }

        &:before {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
            opacity: 0;
            will-change: background-color, opacity;
            content: " ";
        }

        &.md-dense {
            height: $md-button-dense-height;
            font-size: 13px;
        }

        &.md-raised:not([disabled]) {


            &:active {

            }

            &.md-ripple-off:active:before {
                opacity: .2;
            }
        }

        + .md-button {
            margin-left: 0;
        }

        .md-ripple {
            padding: 0 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

</style>
