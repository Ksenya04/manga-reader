<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<strong>Читайте мангу на сайте - Cacaomanga</strong>
	</h1>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		text-align: left;
		font-size: 1.3rem;
		font-style: Verdana;
		color:aliceblue;
	}

</style>
