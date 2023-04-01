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
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="duration-200 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
	<p class="m-8 grid text-white font-sans text-xl font-semibold">Читайте мангу на сайте - CacaoManga</p>
	<section class="m-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:rid-cols-8 gap-6">
		{#each arr as { name, type, src, alt }}
			<article class="shadow text-white">
				<img class="rounded-3xl" {src} {alt}>
				<p class="px-2 text-white">{name}</p> 
				<p class="px-2 text-neutral-400">{type}</p>
			</article>		
		{/each}
	</section>
	<section class="m-6">
	</section>
</main>
