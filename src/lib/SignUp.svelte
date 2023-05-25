<script lang="ts">
	import "../app.css";    
    import { createEventDispatcher } from "svelte"; 
    import { createClient } from '@supabase/supabase-js'

	const supabaseUrl = 'https://tdgigulcrickrxcqzkvi.supabase.co'
	const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZ2lndWxjcmlja3J4Y3F6a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzOTc3MTQsImV4cCI6MTk5NDk3MzcxNH0.ljFfkhZYxPTMkmnc37DP1g4tlo775gjx8eiNaxI4ROE'
	export const supabase = createClient(supabaseUrl, supabaseKey)
    export let open = false;
   
    const dispatch = createEventDispatcher();

let email = "";
let password = "";
let error = "";

async function handleSubmit(event) {
  event.preventDefault();


  const { data, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    error = authError.message;
  } else {
    dispatch("signup", data);
  }
}


</script>

<section class:hidden={!open} class="z-10 fixed left-0 top-0 bottom-0 right-0 bg-black/60">
<article class:hidden={!open} class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 grid gap-4 shadow-lg shadow-black bg-neutral-600 text-white font-bold rounded-lg">
    <form on:submit={handleSubmit}>
        <div class="flex justify-between ml-12">
            <p>Зарегистрироваться</p>
            <button on:click={() => {
                open = !open;
            }}>X</button>
    </div>
    <input class="bg-neutral-500 h-12 rounded-xl px-4 py-2 mt-4" name="login" placeholder="Почта" type="email" bind:value={email} required>
    <br>
    <input class="bg-neutral-500 h-12 rounded-xl px-4 py-2 mt-2" name="login" placeholder="Пароль" type="password" bind:value={password} required>
    <br>
    <button class="flex p-1 shadow-lg bg-purple-500 text-white px-[50px] py-2 rounded-xl mt-4" type="submit">Зарегистрироваться</button>
</form>
</article>
</section>
