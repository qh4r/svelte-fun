<script>
  export let brand = "Warszawa" //default;
  let distanceTraveled = 0;
  // ten dolarek to magia swelte ktora sprawia ze sledzi zmienna
  $: rounded = (distanceTraveled % 10) ?  (Math.floor(distanceTraveled / 10))*10 + 10 : distanceTraveled;

  function increaseDistance() {
    distanceTraveled += 1;
  }
</script>

<style>
h1 {
  cursor: pointer;
}
</style>

<h1 on:click={increaseDistance}>{brand}</h1>
<h4>distance traveled: {distanceTraveled}</h4>
<h4>Rounded distance: {rounded} </h4>

