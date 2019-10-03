<script>
  import ApiCall from "./ApiCall.svelte";
  import Car from "./Car.svelte";
  import Form from "./Form.svelte";
  import CounterUpdate from "./CounterUpdate.svelte";
  import Loader from "./Loader.svelte";

  import {store} from "./store";

  import {onDestroy} from 'svelte';

	export let name; // export allows as to pass props to this component --- name is passed in main.js
	let surname = "test";


	//SOTRE USAGE
	// this way we need to pass {counter} instead of {$store} to view

	//let counter;
  //
	//const unsubscribe = store.subscribe(value => {
	//  counter = value;
	//});

  // to prevent multiple subscriptions
	//onDestroy(() => unsubscribe());

	// better way to deal with store value is to use $store

	let otherBrands = [
	  {
	    name: "Volksvagen",
	  },
	  {
	    name: "Fiat",
	  },
	  {
	    name: "Opel",
	  },
	  {
	    name: "Ford",
	  },
	]
</script>

<style>
	h1 {
		color: green;
	}
	h2 {
	  font-family: "Comic Sans MS",serif;
	  color: red;
	}
	.strike-through {
	  text-decoration: line-through blue;
	}
</style>

<h1>COUNTER: {$store}</h1>
<CounterUpdate />
<hr/>
<ApiCall />
<h1>Hello {name} {surname}!</h1>
<h2 class="strike-through">TEST</h2>
<Car brand="BMW" />
<Car brand="AUDI" />
<Car />
<ul>
  {#each otherBrands as {name}, index}
    <li>
      {index}:
      <Car brand={name}></Car>
    </li>
  {/each}
</ul>
<Form/>
<Loader />
