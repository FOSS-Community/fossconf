<script>
  import Terminal from './Terminal.svelte';
  let gameMode = false;
</script>

{#if gameMode}
    Loading game bundles...
    <!-- svelte-ignore missing-declaration -->
    <Component
      on:quit={() => {
        gameMode = false;
      }}
    />
    Fail to load.
{:else}
  <div>
    <slot name="data" />
  </div>
  <Terminal
    on:gameOn={() => {
      gameMode = true;
    }}
  />
{/if}
