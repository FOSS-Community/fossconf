<script>
  import { onMount } from 'svelte';

  import Penelist from './Penelist.svelte';

  export let penelists;
  let focus = undefined;

  onMount(() => {
    let timeoutId;
    let toSet = undefined;

    function onHashChange() {
      const name = window.location.hash.slice(1);
      if (penelists.find((penelist) => penelist.id === name)) {
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

{#each penelists as penelist}
  <Penelist
    {...penelist}
    focused={focus === penelist.id}
    on:focus={(event) => (focus = event.detail)}
  />
{/each}