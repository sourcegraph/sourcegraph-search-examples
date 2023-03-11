<script>
    import { createEventDispatcher } from "svelte";
    import { CreateFilterCategories, CreateFilters } from "./filters";

    export let appliedFilters;

    const dispatch = createEventDispatcher();

    let filters = CreateFilters();
    const categories = CreateFilterCategories();

    function toggleFilter(f) {
        f.selected = !f.selected;
        updateFilters();
    }

    function updateFilters() {
        appliedFilters = filters.filter((f) => f.selected);
        let tags = [];
        appliedFilters.forEach((f) => {
            tags.push(f.tag);
        });
        dispatch("filter", {
            tags: tags,
        });
        appliedFilters = appliedFilters;
        filters = filters;
    }

    function clearFilters() {
        appliedFilters = [];
        dispatch("filter", {
            tags: []
        })
        filters.forEach((f) => (f.selected = false));
        filters = filters;
    }
</script>

<button
    on:click={clearFilters}
    class="border-solid border-2 border-black rounded-full p-1 m-1 bg-slate-200"
    >Clear All</button
>
<div class="flex flex-row flex-wrap w-full">
    {#each Object.values(categories) as c}
        <details
            class="bg-slate-100 m-2 p-4 flex flex-column rounded-xl open:bg-slate-200 duration-300 w-full"
        >
            <summary class="text-base font-bold">{c}</summary>
            <div class="flex flex-row flex-wrap">
                {#each filters as f}
                    {#if f.category === c}
                        <button
                            on:click={() => toggleFilter(f)}
                            class="{f.selected
                                ? 'bg-slate-300'
                                : 'bg-slate-100'} whitespace-nowrap border-solid border-2 border-black rounded-full p-1 m-1"
                            >{f.name}</button
                        >
                    {/if}
                {/each}
            </div>
        </details>
    {/each}
</div>
