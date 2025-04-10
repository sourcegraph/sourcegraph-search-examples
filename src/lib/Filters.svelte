<script>
    import { createEventDispatcher } from "svelte";
    import { CreateFilterCategories, CreateFilters } from "./filters";

    export let appliedFilters = [];

    const dispatch = createEventDispatcher();

    let filters = CreateFilters();
    const categories = CreateFilterCategories();

    // Count how many filters are active in each category
    $: categoryCounts = Object.values(categories).reduce((acc, category) => {
        acc[category] = filters.filter(f => f.category === category && f.selected).length;
        return acc;
    }, {});

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
    }

    function clearFilters() {
        appliedFilters = [];
        dispatch("filter", {
            tags: []
        });
        filters.forEach((f) => (f.selected = false));
        filters = filters;
    }

    function toggleAllInCategory(category, select) {
        filters.forEach((f) => {
            if (f.category === category) {
                f.selected = select;
            }
        });
        updateFilters();
    }
</script>

<div class="mb-4">
    <button
        on:click={clearFilters}
        class="btn btn-secondary w-full flex items-center justify-center space-x-2"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span>Clear All Filters</span>
    </button>
</div>

<div class="space-y-3">
    {#each Object.values(categories) as category}
        <div class="card overflow-visible">
            <details id={`category-${category}`} class="group">
                <summary class="flex items-center justify-between px-4 py-3 cursor-pointer outline-none">
                    <div class="flex items-center space-x-2">
                        <h3 class="font-medium text-gray-900 dark:text-white m-0">{category}</h3>
                        {#if categoryCounts[category] > 0}
                            <span class="tag tag-primary">{categoryCounts[category]}</span>
                        {/if}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex justify-between mb-2">
                        <button 
                            on:click={() => toggleAllInCategory(category, true)}
                            class="text-xs text-primary hover:text-primary-light">
                            Select all
                        </button>
                        <button 
                            on:click={() => toggleAllInCategory(category, false)}
                            class="text-xs text-primary hover:text-primary-light">
                            Clear
                        </button>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        {#each filters as filter}
                            {#if filter.category === category}
                                <button
                                    type="button"
                                    on:click={() => toggleFilter(filter)}
                                    class="tag {filter.selected ? 'tag-primary' : ''} hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                    {filter.name}
                                </button>
                            {/if}
                        {/each}
                    </div>
                </div>
            </details>
        </div>
    {/each}
</div>

{#if appliedFilters.length > 0}
    <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h3 class="text-sm font-medium mb-2">Applied Filters</h3>
        <div class="flex flex-wrap gap-2">
            {#each appliedFilters as filter}
                <button 
                    on:click={() => toggleFilter(filter)}
                    class="tag tag-primary flex items-center space-x-1">
                    <span>{filter.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            {/each}
        </div>
    </div>
{/if}
