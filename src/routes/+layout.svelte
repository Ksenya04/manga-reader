<script>
	import Header from '../lib/Header.svelte';
	import "../app.css";
</script>

<div class="app, bg-neutral-900">
	<Header />

	<slot />

	<footer class="bg-neutral-800 py-0.5 px-32 flex items-center justify-between text-white">
		<!-- <p>Offers can be discounted in <a href="https://vk.com/shio_mi">VK</a> developer</p> -->
		<div class="grid grid-rows-3 grid-flow-col gap-4">
			<div class="row-span-3 font-semibold py-8 text-lg" >Читать мангу онлайн на русском!
				<p class="py-4 text-neutral-400 text-base">Мы всегда готовы ответить на ваши вопросы!</p>
				<p class="py-1">Задать вопрос</p>
			</div>
			<div class="row-span-3 px-20 py-8 font-semibold text-lg">Информация
				<p class="py-4 text-neutral-400 text-base">В случаях нарушения авторских прав - обращайтесь на почту </p>
				<p class="py-2 text-purple-500 text-lg"><a href="mailto:Ksyndeli.h.kek@gmail.com">Ksyndeli.h.kek@gmail.com</a></p>
			</div>
			
			<div class="row-span-3 px-20 py-8 font-semibold text-lg ">Контакты
				<p class="grid"><a href="https://vk.com/shio_mi"><img src="/vk.png" alt="Пример"></a></p>
			    <p class="grid"><a href="https://t.me/ksywka_mi"><img src="/tg.png" alt="Пример"></a></p>
				<p class="grid"><a href="https://discordapp.com/users/832618763865948200/"><img src="/ds.png" alt="Пример"></a></p>
				<p class="py-1 text-neutral-400 text-base">cacaomanga.ru © 2023</p>
		</div>
			
		</div>
	</footer>
</div>

