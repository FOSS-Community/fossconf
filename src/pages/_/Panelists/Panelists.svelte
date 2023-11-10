<script>
  import { onMount } from 'svelte';

  import Panelist from './Panelist.svelte';

  export let panelists;
  let focus = undefined;

  onMount(() => {
    let timeoutId;
    let toSet = undefined;

    function onHashChange() {
      const name = window.location.hash.slice(1);
      if (panelists.find((panelist) => panelist.id === name)) {
        toSet = name;
        timeoutId = setTimeout(updateFocus, 200);
      } else {
        toSet = undefined;
      }
    }
    function updateFocus() {
      focus = toSet;
      timeoutId = null;
      toSet = undefined;
    }

    function onScroll() {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (toSet) {
        timeoutId = setTimeout(updateFocus, 200);
      }
    }
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('scroll', onScroll, { passive: true });
      if (timeoutId) clearTimeout(timeoutId);
    };
  });
</script>

{#each panelists as panelist}
  <Panelist
    {...panelist}
    focused={focus === panelist.id}
    on:focus={(event) => (focus = event.detail)}
  />
{/each}