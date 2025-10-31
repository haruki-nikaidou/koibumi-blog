<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte"

    const KEY = "\u{1090C}theme";

    let isDark = $state(false);

    onMount(() => {
        // Check initial theme
        isDark = document.documentElement.classList.contains("dark");
    });

    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(KEY, isDark ? "dark" : "light");
        }
    }
</script>

<button
    onclick={toggleTheme}
    class="button-light-primary md dark-mode-switch"
    aria-label={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
>
    {#if isDark}
        <Icon icon="mingcute:sun-fill" width={20} height={20} />
    {:else}
        <Icon icon="mingcute:moon-fill" width={20} height={20} />
    {/if}
</button>

<style lang="scss">
    .dark-mode-switch.button-light-primary {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>