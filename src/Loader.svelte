<script>
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";

  const progress = tweened(0, {
    duration: 2000,
    easing: cubicInOut
  });
</script>

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>

<h1>Installing Windows 95...</h1>
<progress value={$progress} max="1" />
<sub>2 weeks remaining...</sub>

<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.75)}>75%</button>
<button on:click={() => progress.set(1.0)}>100%</button>

{#if $progress === 1.0}
  <h1>Windows 95 installed, hooray!</h1>
{/if}
