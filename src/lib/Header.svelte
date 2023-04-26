<script>
    import SignIn from '$lib/SignIn.svelte';

    $: dialogOpen = false;
</script>

<header class="bg-neutral-800 py-0.5 px-32 flex items-center justify-between">
    <a href="/">
        <img src="/logo.png" alt="CacaoManga">
    </a>

    <section class="px-20">
        <li class="flex p-1">
            <button on:click={() => dialogOpen = !dialogOpen} id="login" class="flex p-1 shadow-lg shadow-black rounded-full bg-neutral-600 text-white px-5 py-2 uppercase text-sm font-bold ">
            <span>Войти</span>
            </button>
        </li>
    </section>  
</header>

<SignIn open={dialogOpen}/>

