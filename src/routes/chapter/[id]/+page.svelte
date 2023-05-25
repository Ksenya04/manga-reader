<script lang="ts">
    import { onMount } from "svelte";
    import { supabase } from "../../../lib/supabaseClient.js";
  
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

<main>
    {#if mangaP}
        <div>
          <img
          class="mx-auto"
            src={mangaP.img_url}
            alt=""
          />
        </div>
    {:else}
      Loading...
    {/if}
  </main>