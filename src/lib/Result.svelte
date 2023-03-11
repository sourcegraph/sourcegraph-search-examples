<script>
    export let result;
</script>

<details
    class="bg-slate-100 m-2 p-4 flex flex-row rounded-xl open:bg-slate-200 duration-300"
>
    <summary class="text-base font-bold">{result.name}</summary>
    <div class="p-2 text-base italic">{result.description}</div>
        <div class="pb-3 flex flex-row flex-wrap">
            {#each result.tags as tag}
                <div
                    class="rounded-full bg-slate-100 p-1 m-1"
                >
                    {tag}
                </div>
            {/each}
        </div>
    <code
        class="bg-white text-base font-bold whitespace-nowrap overflow-scroll rounded-xl p-2"
        >{result.syntax}</code
    >
    <div class="text-center text-blue-600 visited:text-purple-600 pt-2">
        <a href={result.exampleLink} target="_blank" rel="noreferrer">view on sourcegraph.com</a>
    </div>
</details>
