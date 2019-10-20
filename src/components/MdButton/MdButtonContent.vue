<template>
    <!-- <md-ripple :md-disabled="!mdRipple || disabled" :md-event-trigger="false" :md-active="mdRippleActive" @update:mdActive="active => $emit('update:mdRippleActive', active)">
    <div class="md-button-content">
      <slot />
    </div>
  </md-ripple> -->
    <div>
        content
    </div>
</template>

<script>
//   import MdRipple from 'components/MdRipple/MdRipple'

    export default {
        name: "MdButtonContent",
        components: {
        },
        props: {
            //   mdRipple: Boolean,
            //   mdRippleActive: null,
            disabled: Boolean,
        },
    };
</script>

<style lang="scss">
    .md-button-content {
        position: relative;
        z-index: 2;
    }
</style>
