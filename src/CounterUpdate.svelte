<script>
  import {store} from "./store";

  function increment() {
    store.update(val => val + 1);
  }
  function decrement() {
    store.update(val => val - 1);
  }
  function reset() {
    store.set(0);
  }

</script>

<style>
button {
  font-size: 2rem;
}
</style>


<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
<button on:click={reset}>RESET</button>

