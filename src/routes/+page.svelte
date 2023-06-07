<script>
	import { onMount } from "svelte";
	import { invalidate } from '$app/navigation';
  	import { supabase } from "../lib/supabaseClient.js";

	/** @type any[] */
	let catalog = [];

let catalogM = [];
	onMount(async () => {

		const {data, error} = await supabase.from("Manga").select('*')
	
		  if (error) {
			console.log(error);
		  }
		  else {
			catalogM = data;
		  }
	})

	let chapters = [];
	onMount(async () => {

		const {data, error} = await supabase.from('Chapter').select(`
		id,
		name,
		tom:tom_id (
			id,
			name,
			manga:manga_id (
				id,
				name,
				type,
				img_url
			)
		)
		`).limit(6)
		  if (error) {
			console.log(error);
		  }
		  else {
			chapters = data;
		  }
	})

	$: console.log(chapters);

</script>

<svelte:head>
	<title>CacaoManga</title>
</svelte:head>

<section>
	<img class="w-full h-72 object-cover saturate-50 brightness-75 mt-20" src="https://pibig.info/uploads/posts/2022-11/1668883553_5-pibig-info-p-mangalib-registratsiya-oboi-5.jpg" alt="Шапка">
</section>

<p class="ml-20 mt-8 xl:px-32 2xl:px-36 grid text-white font-sans text-xl font-semibold">Читайте мангу на сайте - CacaoManga</p>

<main class="duration-200 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
	<p class="m-8 grid text-white font-sans text-xl font-medium">Последние обновления</p>
	<section class="m-6">
		{#each chapters as chapter}
			<article class="shadow text-white flex gap-2 border-b py-5 border-neutral-400 text-neutral-400">
				<img class="rounded-3xl w-40 h-56 xl:h-64 2xl:h-64 " src={chapter.tom.manga.img_url} alt={''}>
				<section class="w-full">
					<a href={"./"+chapter.tom.manga.id} class="px-2 text-white" >{chapter.tom.manga.name}</a> 
					<p class="px-2 border-b  border-purple-500 text-neutral-400">{chapter.tom.manga.type}</p>
					<a href={"./"+chapter.tom.manga.id} class="m-2 text-white">{chapter.tom.name} {chapter.name}</a>
					<p class="px-2 text-neutral-400">{''}</p>
				</section>
			</article>		
		{/each}
	</section>
	<p class="px-8 grid text-white font-sans text-xl font-medium">Каталог</p>
	<section class="m-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
		{#each catalogM as item}
			<article class=" text-white">
				<img class="rounded-3xl w-full xl:h-64 2xl:h-64 object-cover" src={item.img_url}>
				<a href={"./"+item.id} class="px-2 text-white">{item.name}</a> 
				<p class="px-2 text-neutral-400">{item.type}</p>
			</article>		
		{/each}
	</section>
	<section class="m-6">
	</section>
</main>
