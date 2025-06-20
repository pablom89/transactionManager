<script>
    import "$lib/estilos.scss";
    import { mobile } from '$lib/store/store.js';

    let innerWidth = $state(0);
    
    // Computed value usando $derived
    let _mobile = $derived(innerWidth <= 500);
    
    // Effect para actualizar el store cuando cambie _mobile
    $effect(() => {
        mobile.set(_mobile);
    });
</script>

<svelte:window bind:innerWidth />

<div class="padding">
    <slot />
</div>

<style>
    .padding {
        height: 100%;
        min-width: 241px;
        position: relative;
        padding: 10px;
    }
</style>
