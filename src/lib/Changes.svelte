<script lang="ts">
	import "../app.css";    
    import { createEventDispatcher } from "svelte"; 
    import { createClient } from '@supabase/supabase-js'

	const supabaseUrl = 'https://tdgigulcrickrxcqzkvi.supabase.co'
	const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZ2lndWxjcmlja3J4Y3F6a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzOTc3MTQsImV4cCI6MTk5NDk3MzcxNH0.ljFfkhZYxPTMkmnc37DP1g4tlo775gjx8eiNaxI4ROE'
	export const supabase = createClient(supabaseUrl, supabaseKey)
    export let open = false;
   
    async function updateUser({ username }) {
      const { data: { user } } = await supabase.auth.getUser();
      let userA = user;
    try {
    const { data, error } = await supabase
     .from('profiles')
     .update({ ...username })
     .match({ id: userA.id})
     alert("Профиль обновлён!");
     if (error) throw error
     return data
    } catch (e) {
      throw e
 }
}

</script>

<section class:hidden={!open} class="z-10 fixed left-0 top-0 bottom-0 right-0 bg-black/60">
<article class:hidden={!open} class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 grid gap-4 shadow-lg shadow-black bg-neutral-600 text-white font-bold rounded-lg">
    <form on:submit={updateUser}>
        <div class="flex justify-between ml-20">
            <p>Настройки</p>
            <button on:click={() => {
                open = !open;
            }}>X</button>
    </div>
    <p class="ml-1 mt-4">Никнейм</p>
    <input class="bg-neutral-500 h-12 rounded-xl px-4 py-2 mt-1" name="login" placeholder="Напишите новый никнейм" required>
    <br>
    <button class="flex p-1 shadow-lg bg-purple-500 text-white px-[90px] py-2 rounded-xl mt-4" type="submit">Обновить</button>
</form>
</article>
</section>