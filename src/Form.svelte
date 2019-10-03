<script>
// pipy jak przy on click mozna chainowac
let text;

function handleInput(event) {
  text = event.target.value;
}

function handleAlert() {
  alert(text);
}
</script>

<style>

</style>

<h1>Blah blah</h1>
<input on:change={handleInput} type="text" />
<button on:click|preventDefault|once={handleAlert}>Alert</button>
