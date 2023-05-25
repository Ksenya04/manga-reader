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
	<!-- <div class="grid gap-4 z-0">
		
		<div class="grid grid-cols-5 gap-4 snap-x">
			<div class="relative">
					<img class="m-2 w-full xl:h-56 2xl:h-64 object-cover max-w-full rounded-lg" src="https://anime-fans.ru/wp-content/uploads/2021/07/Podnyatie-urovnya-v-odinochku-glava-160.jpg" alt="">
					<a href="/manga" class="absolute bottom-0 text-white rounded m-5 flex rounded-full bg-purple-500 shadow-lg shadow-black px-3 py-1  text-sm">Поднятие уровня в одиночку</a>
			</div>
			<div class="relative">
					<img class="m-2 w-full xl:h-56 2xl:h-64 object-cover max-w-full rounded-lg" src="https://kartinkin.net/uploads/posts/2022-12/thumbs/1669916116_51-kartinkin-net-p-klinok-rassekayushchii-demonov-kokushibo-k-52.jpg" alt="">
					<a href="/manga" class="absolute bottom-0 text-white rounded m-5 flex rounded-full bg-purple-500 shadow-lg shadow-black px-3 py-1  text-sm">Клинок, рассекающий демонов</a>
			</div>
			<div class="relative">
					<img class="m-2 w-full xl:h-56 2xl:h-64 object-cover max-w-full rounded-lg" src="https://media.2x2tv.ru/content/images/2021/09/02.jpg" alt="">
					<a href="/manga" class="absolute bottom-0 text-white rounded m-5 flex rounded-full bg-purple-500 shadow-lg shadow-black px-3 py-1  text-sm">Токийские мстители</a>
			</div>
			<div class="relative">
					<img class="m-2 w-full xl:h-56 2xl:h-64 object-cover max-w-full rounded-lg" src="https://sun9-65.userapi.com/impg/YYYf3GFutdOxPE5Hj82Mxdsxts19_oPZR3Z-rQ/gGQr_Q65qes.jpg?size=720x454&quality=96&sign=ce1041ca7415965ec5f5009b3771e895&type=album" alt="">
					<a href="/manga" class="absolute bottom-0 text-white rounded m-5 flex rounded-full bg-purple-500 shadow-lg shadow-black px-3 py-1  text-sm">Невеста герцога по контракту</a>
			</div>
			<div class="relative">
					<img class="m-2 w-full xl:h-56 2xl:h-64 object-cover max-w-full rounded-lg" src="https://mobimg.b-cdn.net/v3/fetch/70/709b08c1b65446423adebdf9ef541a28.jpeg" alt="">
					<a href="/manga" class="absolute bottom-0 text-white rounded m-5 flex rounded-full bg-purple-500 shadow-lg shadow-black px-3 py-1  text-sm">Хвост феи</a>
			</div>
		</div>
	</div> -->
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
