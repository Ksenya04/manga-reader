<script>
	const arr = [{
		name: 'Человек-бензопила',
		type: 'Манга',
		src: 'https://www.moscowbooks.ru/image/book/761/orig/i761872.jpg?cu=20220927144503',
		alt: 'Человек-бензопила'
	}, {
		name: 'Чертова реинкарнация',
		type: 'Манхва',
		src: 'https://cover.imglib.info/uploads/cover/bil-eomeogeul-hwansaeng/cover/RiHuUZyWa3d7_250x350.jpg',
		alt: 'Чертова реинкарнация'
	}, {
		name: 'Ваше Высочество, на этот раз я стану для вас хорошей матерью!',
		type: 'Манхва',
		src: 'https://cover.imglib.info/uploads/cover/ibeon-saeng-eun-jedaelo-kiwodeuligessseubnida-pyeha/cover/gm5X4stI5dTt_250x350.jpg',
		alt: 'Ваше Высочество, на этот раз я стану для вас хорошей матерью!'
	}, {
		name: 'Система идеального врача',
		type: 'Манхва',
		src: 'https://cover.imglib.info/uploads/cover/lebel-eob-dagteo-choegiseog/cover/qjUJRRpacUeA_250x350.jpg',
		alt: 'Система идеального врача'
	}, {
		name: 'Белая кровь',
		type: 'Манхва',
		src: 'https://desu.me/data/manga/covers/preview/2028.jpg',
		alt: 'Белая кровь'
	}, {
		name: 'Нет – романтике',
		type: 'Манхва',
		src: 'https://desu.me/data/manga/covers/preview/5014.jpg',
		alt: 'Нет – романтике'
	}, {
		name: 'Новая жизнь убийцы богов',
		type: 'Манхва',
		src: 'https://img-cdn.trendymanga.com/covers/f1b9b9df-950d-49c1-9903-b9489e21a18a.jpg',
		alt: 'Новая жизнь убийцы богов'
	}, {
		name: 'Злодейка стыдится быть любимой',
		type: 'Манхва',
		src: 'https://remanga.org/media/titles/a-villainous-girl-is-ashamed-to-be-loved/3a28d929e7e98b57f5e92d462b665d0e.jpg',
		alt: 'Злодейка стыдится быть любимой'
	}];
	const updates = [{
		name: 'Наруто',
		type: 'Манга',
		tom: 'Том 1',
		chapter: 'Глава 1',
		time: 'Сегодня',
		src: 'https://upload.wikimedia.org/wikipedia/ru/1/11/Naruto-manga.jpg',
		alt: 'Наруто'
	}, {
		name: 'Капитан! Это что, поле битвы?',
		type: 'Манхва',
		tom: 'Том 1',
		chapter: 'Глава 2',
		time: 'Сегодня',
		src: 'https://cover.imglib.info/uploads/cover/daewinim-ibeon-jeonjaengteoneun-igos-ingayo/cover/weFUdbKv5ReK_250x350.jpg',
		alt: 'Капитан! Это что, поле битвы?'
	}, {
	    name: 'Созвездия мои ученики',
		type: 'Манхва',
		tom: 'Том 1',
		chapter: 'Глава 1',
		time: 'Сегодня',
		src: 'https://cover.imglib.info/uploads/cover/seongjwadeul-i-nae-jeja/cover/H622qkhOeW5z_250x350.jpg',
		alt: 'Созвездия мои ученики'
	}, {
		name: 'Мне нравится девушка, живущая по соседству',
		type: 'Манга',
		tom: 'Том 1',
		chapter: 'Глава 5',
		time: 'Сегодня',
		src: 'https://cover.imglib.info/uploads/cover/tonari-no-onee-san-ga-suki/cover/jLvYeEid7FSs_250x350.jpg',
		alt: 'Мне нравится девушка, живущая по соседству'
	}, {
		name: 'Весенняя буря и монстр',
		type: 'Манга',
		tom: 'Том 2',
		chapter: 'Глава 2',
		time: 'Сегодня',
		src: 'https://cover.imglib.info/uploads/cover/haru-no-arashi-to-monster/cover/41MQgmPJJnfs_250x350.jpg',
		alt: 'Весенняя буря и монстр'
	}, {
		name: 'Человек с цветком магнолии',
		type: 'Манхва',
		tom: 'Том 2',
		chapter: 'Глава 2',
		time: 'Сегодня',
		src: 'https://cover.imglib.info/uploads/cover/moglyeonkkoch-eul-ibneun-namja/cover/kRmyM1o3DAOf_250x350.jpg',
		alt: 'Человек с цветком магнолии'
	}
];
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
					<a href="/manga" class="absolute bottom-0 text-white rounded m-5 flex rounded-full bg-purple-500 shadow-lg shadow-black px-3 py-1  text-sm">Клинок рассекающий демонов</a>
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
		{#each updates as { name, type, tom, chapter, time, src, alt }}
			<article class="shadow text-white flex gap-2 border-b py-5 border-neutral-400 text-neutral-400">
				<img class="rounded-3xl w-40 h-56 xl:h-64 2xl:h-64 " {src} {alt}>
				<section class="w-full">
					<p class="px-2 text-white">{name}</p> 
					<p class="px-2 border-b  border-purple-500 text-neutral-400">{type}</p>
					<p class="m-2 text-white">{tom} {chapter}</p>
					<p class="px-2 text-neutral-400">{time}</p>
				</section>
			</article>		
		{/each}
	</section>
	<p class="px-8 grid text-white font-sans text-xl font-medium">Каталог</p>
	<section class="m-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
		{#each arr as { name, type, src, alt }}
			<article class="shadow text-white">
				<img class="rounded-3xl w-full xl:h-64 2xl:h-64 object-cover" {src} {alt}>
				<p class="px-2 text-white">{name}</p> 
				<p class="px-2 text-neutral-400">{type}</p>
			</article>		
		{/each}
	</section>
	<section class="m-6">
	</section>
</main>
