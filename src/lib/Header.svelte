<script lang="ts">
    import SignIn from '$lib/SignIn.svelte';
    import { onMount } from 'svelte';
    import SignUp from './SignUp.svelte';
    import Changes from './Changes.svelte';
    import { supabase } from "../lib/supabaseClient.js";

    $: dialogOpenSignIn = false;
    $: dialogOpenSignUp = false;
    $: dialogOpenChanges = false;

    let profile: any = null; 
    let userS: any = null;
    onMount(async () => {
        const { data: { user } } = await supabase.auth.getUser();
        userS = user;
        })
        function signOut() {
            supabase.auth.signOut();
    }
</script>

<header class="bg-neutral-800 py-0.5 px-32 flex items-center justify-between fixed top-0 w-full z-10 left-0 right-0" >
    <a href="/">
        <img src="/logo.png" alt="CacaoManga">
    </a>

    {#if !userS}
    <section class="px-20 flex">
        <li class="flex p-1 mr-6">
            <button on:click={() => dialogOpenSignIn = !dialogOpenSignIn} id="login" class="flex p-1 shadow-lg shadow-black rounded-full bg-neutral-600 text-white px-5 py-2 uppercase text-sm font-bold ">
            <span>Войти</span>
            </button>
        </li>
        <li class="flex p-1">
            <button on:click={() => dialogOpenSignUp = !dialogOpenSignUp} id="login" class="flex p-1 shadow-lg shadow-black rounded-full bg-neutral-600 text-white px-5 py-2 uppercase text-sm font-bold ">
            <span>Зарегистрироваться</span>
            </button>
        </li>
    </section>
    {:else}
    <section class="px-20 flex">
            <button on:click={() => dialogOpenChanges = !dialogOpenChanges} class="text-white mr-20 font-sans text-xl font-semibold">{userS.email}</button>
            <button class="flex p-1 shadow-lg shadow-black rounded-full bg-neutral-600 text-white px-5 py-2 uppercase text-sm font-bold " on:click={signOut}>Выйти</button>
        </section>
    {/if}
    </header>

<SignIn open={dialogOpenSignIn}/>
<SignUp open={dialogOpenSignUp}/>
<Changes open={dialogOpenChanges}/>

