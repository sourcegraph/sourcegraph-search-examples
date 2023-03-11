<script>
    import Result from "./Result.svelte";

    export let filteredExamples;
</script>

<div class="flex flex-col p-2 w-full">
    {#each filteredExamples as e}
        <Result result={e} />
    {/each}
</div>
