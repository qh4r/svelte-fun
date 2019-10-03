<script>
  import {onMount} from 'svelte';

  let chars = [];

  onMount(async() => {
    const apiResponse = await fetch("https://swapi.co/api/people/");
    const swPeopleJSON = await apiResponse.json();

    chars = swPeopleJSON.results;

    return () => console.log('Destroyed');
  })
</script>

<style>

</style>

<ul>
  {#each chars as { name, height, birth_year }}
    <li>
      <strong>{name}</strong>
      (height: {height}cm, birth year: {birth_year})
    </li>
  {:else}
    <p>Loading...</p>
  {/each}
</ul>
