<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "../../lib/supabaseClient.js";

  export let data;

  let mangaP: any = null;
  onMount(async () => {
    const result = await supabase
      .from("Chapter")
      .select(
        `
          img_url,
          name,
          tom:tom_id (
            id,
            name,
            manga:manga_id (
              id,
              name,
              type,
              img_url,
              alter_title,
              year,
              description,
              status
            )
          )
		`
      )
      .eq("tom.manga.id", data.id);
    if (result.error) {
      console.log(result.error);
    } else {
      console.log(result);
      mangaP = result.data.filter((chapter) => !!chapter?.tom?.manga)[0];
    }
  });

  $: console.log(mangaP);
</script>

<main class="mt-20 h-screen">
  {#if mangaP}
    <section class="grid grid-cols-[1fr_3fr] gap-8 ml-8">
      <!-- <p>{mangaP.name}</p> -->
      <div>
        <img
          class="mt-20 ml-auto xl:h-56 2xl:h-96 object-cover max-w-full rounded-lg"
          src={mangaP.tom.manga.img_url}
          alt=""
        />
        <button
          class="text-white font-bold bg-purple-500 rounded-lg 2xl:px-28 xl:px-14 py-2 mt-6 ml-48 "
          >Читать</button
        >
      </div>
      <div class="mr-48">
        <p class="mt-20 text-neutral-400 font-semibold">
          {mangaP.tom.manga.alter_title}
        </p>
        <div class="flex">
          <p class="text-white text-2xl font-bold">{mangaP.tom.manga.name}</p>
          <p class="py-1 px-4 text-white">{mangaP.tom.manga.status}</p>
        </div>
        <div class="flex py-2">
          <p class="text-neutral-400 font-semibold">{mangaP.tom.manga.type}</p>
          <p class="text-neutral-400 font-semibold px-4">
            {mangaP.tom.manga.year}
          </p>
        </div>
        <p
          class="indent-2 mr-44 text-white text-neutral-400 font-semibold border-b py-4"
        >
          {mangaP.tom.manga.description}
        </p>
        <p class="text-purple-500 font-bold text-2xl py-4">Главы</p>
        <div
          class="flex rounded-lg bg-neutral-800 py-4 grid grid-cols-[11fr_1fr] mr-44"
        >
          <p class="text-white font-bold text-lg ml-4">
            <a href={"../chapter/" + mangaP.tom.manga.id}>{mangaP.tom.name} {mangaP.name}</a>
          </p>
          <p class="text-white font-bold text-lg">18.05.23</p>
        </div>
      </div>
    </section>
  {:else}
    Loading...
  {/if}
</main>
