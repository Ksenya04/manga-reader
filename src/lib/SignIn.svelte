<script>
    export let open = false;
</script>

<section class:hidden={!open} class="z-10 fixed left-0 top-0 bottom-0 right-0 bg-black/60">
<article class:hidden={!open} class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 grid gap-4 shadow-lg shadow-black bg-neutral-600 text-white font-bold rounded-lg">
    <div class="flex justify-between">
        <p>Войти в аккаунт</p>
        <button on:click={() => {
            open = !open;
        }}>X</button>
    </div>
    <input class="bg-neutral-500 h-12 rounded-xl px-4 py-2" name="login" placeholder="Почта">
    <input class="bg-neutral-500 h-12 rounded-xl px-4 py-2" name="login" placeholder="Пароль">
    <button class="flex p-1 shadow-lg bg-purple-500 text-white px-32 py-2 rounded-xl">Войти</button>
    <a class="text-center" href="https://vk.com/shio_mi">Зарегистрироваться</a>
</article>
</section>
