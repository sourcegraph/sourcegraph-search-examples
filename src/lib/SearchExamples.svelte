<script>
    import { onMount } from "svelte";
    import Filters from "./Filters.svelte";
    import Results from "./Results.svelte";

    let examples = [];
    let filteredExamples = [];

    onMount(async () => {
        let url = window.location.href;
        if (url.endsWith('/')) {
            url = url.slice(0, -1);
        }
        const res = await fetch (`${url}/examples.json`);
        examples = await res.json();
        filteredExamples = examples;
    })

    function filterExamples(event) {
        filteredExamples = examples;
        const appliedTags = event.detail.tags;
        appliedTags.forEach((t) => {
            filteredExamples = filterExamplesByTag(filteredExamples, t);
        });
    }

    function filterExamplesByTag(examples, tag) {
        const examplesWithTag = examples.filter((example) =>
            example.tags.includes(tag)
        );
        return examplesWithTag;
    }

    function resetFilters() {
        filteredExamples = examples;
    }
</script>

<div class="w-full">
    <h1 class="p-4 text-4xl text-center">Sourcegraph Search Examples</h1>
</div>
<div class="w-full flex flex-row p-4">
    <div class="flex flex-col p-4 w-1/4">
        <h2 class="p-2 text-3xl">Filters</h2>
        <Filters on:filter={filterExamples} on:reset={resetFilters} />
    </div>
    <div class="flex flex-col p-4 w-3/4">
        <h2 class="p-2 text-3xl">Examples</h2>
        <Results bind:filteredExamples />
    </div>
</div>
