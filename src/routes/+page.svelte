<script>
	import { onMount } from "svelte";
	import { invalidate } from '$app/navigation';
  	import { supabase } from "../lib/supabaseClient.js";

	/** @type any[] */
	let catalog = [];

//   onMount(async () => {
//     console.log(catalog);
//     await arr();
//     console.log(catalog);
//   })
//   const arr = async () => {
// 	let loading;
//     try {
//       loading = true;

//       const { data, error, status } = await supabase
//         .from('Manga')
//         .select('name, type, img_url')
//         .limit(8);

// 		console.log(data);

//       if (error && status !== 406) throw error;

// 	  if (data) {
// 		data.forEach(el => {
// 		catalog.push({
// 		  	name: el.name,
//           	type: el.type,
//           	img_url: el.img_url
//   	    	})
// 		});
// 	  }
//     } catch (error) {
//       if (error instanceof Error) {
//         alert(error.message);
//       }
//     } finally {
//       loading = false;
//     }
//   }
// console.log(catalog);


//   const loadUpdates = async () => {
//     try {
//       let loading = true;
//       const { manga } = session

//       const updates = {
//         id: 1,
//         Name,
//         type,
//         img_url: img_url,
//       }

//       let { error } = await supabase.from('manga').upsert(updates)

//       if (error) {
//         throw error
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         alert(error.message)
//       }
//     } finally {
//       loading = false
//     }
//   }

// 	const updates = [{
// 		name: 'Наруто',
// 		type: 'Манга',
// 		tom: 'Том 1',
// 		chapter: 'Глава 1',
// 		time: 'Сегодня',
// 		src: 'https://upload.wikimedia.org/wikipedia/ru/1/11/Naruto-manga.jpg',
// 		alt: 'Наруто'
// 	}, {
// 		name: 'Капитан! Это что, поле битвы?',
// 		type: 'Манхва',
// 		tom: 'Том 1',
// 		chapter: 'Глава 2',
// 		time: 'Сегодня',
// 		src: 'https://cover.imglib.info/uploads/cover/daewinim-ibeon-jeonjaengteoneun-igos-ingayo/cover/weFUdbKv5ReK_250x350.jpg',
// 		alt: 'Капитан! Это что, поле битвы?'
// 	}, {
// 	    name: 'Созвездия мои ученики',
// 		type: 'Манхва',
// 		tom: 'Том 1',
// 		chapter: 'Глава 1',
// 		time: 'Сегодня',
// 		src: 'https://cover.imglib.info/uploads/cover/seongjwadeul-i-nae-jeja/cover/H622qkhOeW5z_250x350.jpg',
// 		alt: 'Созвездия мои ученики'
// 	}, {
// 		name: 'Мне нравится девушка, живущая по соседству',
// 		type: 'Манга',
// 		tom: 'Том 1',
// 		chapter: 'Глава 5',
// 		time: 'Сегодня',
// 		src: 'https://cover.imglib.info/uploads/cover/tonari-no-onee-san-ga-suki/cover/jLvYeEid7FSs_250x350.jpg',
// 		alt: 'Мне нравится девушка, живущая по соседству'
// 	}, {
// 		name: 'Весенняя буря и монстр',
// 		type: 'Манга',
// 		tom: 'Том 2',
// 		chapter: 'Глава 2',
// 		time: 'Сегодня',
// 		src: 'https://cover.imglib.info/uploads/cover/haru-no-arashi-to-monster/cover/41MQgmPJJnfs_250x350.jpg',
// 		alt: 'Весенняя буря и монстр'
// 	}, {
// 		name: 'Человек с цветком магнолии',
// 		type: 'Манхва',
// 		tom: 'Том 2',
// 		chapter: 'Глава 2',
// 		time: 'Сегодня',
// 		src: 'https://cover.imglib.info/uploads/cover/moglyeonkkoch-eul-ibneun-namja/cover/kRmyM1o3DAOf_250x350.jpg',
// 		alt: 'Человек с цветком магнолии'
// 	}
// ];
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
		name,
		tom:tom_id (
			name,
			manga:manga_id (
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

<p class=" py-6 xl:px-32 2xl:px-36 grid text-white font-sans text-xl font-semibold">Читайте мангу на сайте - CacaoManga</p>

<section>
	<div class="grid gap-4 z-0">
		
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
	</div>
</section>

<main class="duration-200 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
	<p class="m-8 grid text-white font-sans text-xl font-medium">Последние обновления</p>
	<section class="m-6">
		{#each chapters as chapter}
			<article class="shadow text-white flex gap-2 border-b py-5 border-neutral-400 text-neutral-400">
				<img class="rounded-3xl w-40 h-56 xl:h-64 2xl:h-64 " src={chapter.tom.manga.img_url} alt={''}>
				<section class="w-full">
					<a href={"./"+chapter.id} class="px-2 text-white" >{chapter.tom.manga.name}</a> 
					<p class="px-2 border-b  border-purple-500 text-neutral-400">{chapter.tom.manga.type}</p>
					<p class="m-2 text-white">{chapter.tom.name} {chapter.name}</p>
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
