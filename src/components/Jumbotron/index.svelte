<script type="ts">
  export let backgroundUrl = null;
</script>

<style>
  div {
    background: var(--background-url) no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 360px;
    margin-bottom: 0px;
  }
</style>

<div style="--background-url:url({backgroundUrl})" />
