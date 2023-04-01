<script>
	import Header from '../lib/Header.svelte';
	import "../app.css";
</script>

<div class="app, bg-neutral-900">
	<Header />

	<slot />

	<footer>
		<p>Offers can be discounted in <a href="https://vk.com/shio_mi">VK</a> developer</p>
	</footer>
</div>

