<script>
    import { onMount } from "svelte";
    import Filters from "./Filters.svelte";
    import Results from "./Results.svelte";

    let examples = [];
    let filteredExamples = [];
    let loading = true;
    let searchTerm = "";
    let mobileFiltersVisible = false;

    onMount(async () => {
        let url = window.location.href;
        if (url.endsWith('/')) {
            url = url.slice(0, -1);
        }
        try {
            const res = await fetch (`${url}/examples.json`);
            examples = await res.json();
            filteredExamples = examples;
        } catch (error) {
            console.error('Failed to load examples:', error);
        } finally {
            loading = false;
        }
    });

    function filterExamples(event) {
        applyFilters(event.detail.tags);
    }

    function applyFilters(tags) {
        let filtered = [...examples];
        
        // Apply tag filters
        if (tags && tags.length > 0) {
            tags.forEach((t) => {
                filtered = filterExamplesByTag(filtered, t);
            });
        }
        
        // Apply search term filter
        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase().trim();
            filtered = filtered.filter(example => 
                example.name.toLowerCase().includes(term) || 
                example.description.toLowerCase().includes(term) ||
                example.tags.some(tag => tag.toLowerCase().includes(term))
            );
        }
        
        filteredExamples = filtered;
    }

    function filterExamplesByTag(examples, tag) {
        return examples.filter((example) => example.tags.includes(tag));
    }

    function resetFilters() {
        searchTerm = "";
        filteredExamples = examples;
    }

    function handleSearch() {
        applyFilters([]);
    }

    function toggleMobileFilters() {
        mobileFiltersVisible = !mobileFiltersVisible;
    }
</script>

<div class="pb-8">
    <div class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div class="relative w-full md:max-w-md">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                </div>
                <input
                    bind:value={searchTerm}
                    on:input={handleSearch}
                    type="text"
                    placeholder="Search examples..."
                    class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 pl-10 pr-4 block w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
            </div>

            <button 
                on:click={toggleMobileFilters} 
                class="md:hidden flex items-center justify-center space-x-2 btn btn-secondary"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span>Filters</span>
            </button>
        </div>

        <div class="flex flex-col lg:flex-row gap-6">
            <!-- Mobile filters (with slide-in animation) -->
            <div class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out" 
                 style="max-height: {mobileFiltersVisible ? '1000px' : '0'}; opacity: {mobileFiltersVisible ? '1' : '0'}">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-semibold">Filters</h2>
                        <button on:click={toggleMobileFilters} class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <Filters on:filter={filterExamples} on:reset={resetFilters} />
                </div>
            </div>

            <!-- Desktop sidebar -->
            <div class="hidden lg:block w-full lg:w-1/4 sticky top-24 self-start">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <h2 class="text-xl font-semibold mb-4">Filters</h2>
                    <Filters on:filter={filterExamples} on:reset={resetFilters} />
                </div>
            </div>

            <!-- Results section -->
            <div class="w-full lg:w-3/4">
                {#if loading}
                    <div class="flex justify-center items-center h-64">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                {:else if filteredExamples.length === 0}
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 class="mt-2 text-lg font-medium">No matching examples found</h3>
                        <p class="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
                        <div class="mt-6">
                            <button on:click={resetFilters} class="btn btn-primary">Clear all filters</button>
                        </div>
                    </div>
                {:else}
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-semibold">Examples ({filteredExamples.length})</h2>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                            Showing {filteredExamples.length} of {examples.length} examples
                        </span>
                    </div>
                    <Results bind:filteredExamples />
                {/if}
            </div>
        </div>
    </div>
</div>
