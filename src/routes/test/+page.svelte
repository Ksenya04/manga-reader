<script>
    export let data;
    let { countries } = data;
    $: ({ countries } = data);
  </script>

<ul>
{#each countries as country}
    <li>{country.name}</li>
{/each}
</ul>
