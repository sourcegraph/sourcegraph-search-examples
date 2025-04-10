<script>
    import "../app.css";
    import { onMount } from 'svelte';

    let darkMode = false;

    onMount(() => {
        // Check for system preferences or stored preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('theme');
        
        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            enableDarkMode();
        }
    });

    function toggleDarkMode() {
        darkMode = !darkMode;
        if (darkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    function enableDarkMode() {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        darkMode = true;
    }

    function disableDarkMode() {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        darkMode = false;
    }
</script>

<div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <svg class="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 8L5 18.5V22L15 27.5L5 33V40L22.5 30V22L32.5 16.5L22.5 11V8Z" fill="currentColor" class="text-primary"/>
                    <path d="M25.5 40L43 29.5V26L33 20.5L43 15V8L25.5 18V26L15.5 31.5L25.5 37V40Z" fill="currentColor" class="text-secondary"/>
                </svg>
                <span class="text-xl font-bold text-gray-900 dark:text-white">Sourcegraph Search Examples</span>
            </div>
            <div class="flex items-center space-x-4">
                <a href="https://sourcegraph.com/search" class="btn btn-secondary text-sm" target="_blank" rel="noopener noreferrer">
                    Open Sourcegraph
                </a>
                <button on:click={toggleDarkMode} class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    {#if darkMode}
                        <!-- Sun icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    {:else}
                        <!-- Moon icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    {/if}
                </button>
            </div>
        </div>
    </header>

    <main class="flex-1 container mx-auto px-4 py-6">
        <slot />
    </main>

    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div class="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Find more examples in the <a href="https://sourcegraph.com/docs/code-search/queries" target="_blank" rel="noopener noreferrer" class="font-medium">Sourcegraph documentation</a></p>
            <p class="mt-2">© {new Date().getFullYear()} Sourcegraph</p>
        </div>
    </footer>
</div>