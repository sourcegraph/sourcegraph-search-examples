<script>
    export let result;

    // Convert tags to more readable format (e.g., "use_case:security" -> "Security")  
    function formatTag(tag) {
        const parts = tag.split(':');
        if (parts.length === 2) {
            // Convert use_case:security to Security
            const value = parts[1].replace(/_/g, ' ');
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return tag;
    }

    // Group tags by category
    function getTagsByCategory(tags) {
        const categories = {
            'pattern_type': [],
            'use_case': [],
            'language': [],
            'framework': [],
            'platform': []
        };

        tags.forEach(tag => {
            const parts = tag.split(':');
            if (parts.length === 2 && categories[parts[0]]) {
                categories[parts[0]].push(formatTag(tag));
            }
        });

        return categories;
    }

    $: tagsByCategory = getTagsByCategory(result.tags);
</script>

<div class="card mb-4 hover:transform hover:scale-[1.01] transition-transform">
    <div class="p-5">
        <details class="group">
            <summary class="flex justify-between items-center list-none cursor-pointer focus:outline-none">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{result.name}</h3>
                <svg class="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </summary>

            <div class="mt-4">
                <p class="text-base text-gray-700 dark:text-gray-300">{result.description}</p>

                <div class="mt-4">
                    <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Search Query</h4>
                    <div class="code-block">
                        <code>{result.syntax}</code>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-4">
                    <div>
                        <a 
                            href={result.exampleLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            class="btn btn-primary text-sm"
                        >
                            Try on Sourcegraph.com
                        </a>
                    </div>

                    <button 
                        on:click={() => { navigator.clipboard.writeText(result.syntax) }}
                        class="btn btn-secondary text-sm flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        Copy Query
                    </button>
                </div>
            </div>
        </details>
    </div>

    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-800 dark:bg-opacity-50 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
        {#if tagsByCategory.use_case.length > 0}
            {#each tagsByCategory.use_case as tag}
                <span class="tag bg-primary bg-opacity-10 text-primary dark:bg-primary dark:bg-opacity-20">{tag}</span>
            {/each}
        {/if}

        {#if tagsByCategory.language.length > 0}
            {#each tagsByCategory.language as tag}
                <span class="tag bg-secondary bg-opacity-10 text-secondary dark:bg-secondary dark:bg-opacity-20">{tag}</span>
            {/each}
        {/if}

        {#if tagsByCategory.pattern_type.length > 0}
            {#each tagsByCategory.pattern_type as tag}
                <span class="tag">{tag}</span>
            {/each}
        {/if}

        {#if tagsByCategory.framework.length > 0}
            {#each tagsByCategory.framework as tag}
                <span class="tag">{tag}</span>
            {/each}
        {/if}

        {#if tagsByCategory.platform.length > 0}
            {#each tagsByCategory.platform as tag}
                <span class="tag">{tag}</span>
            {/each}
        {/if}
    </div>
</div>
