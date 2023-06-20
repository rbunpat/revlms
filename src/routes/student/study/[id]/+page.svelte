<script lang="ts">
	import { onMount } from 'svelte';
    export let data;
    import videojs from 'video.js';
    onMount(() => {
        //@ts-ignore
        const player = new Plyr('#my-video');
    });
</script>
    <div class="flex items-center justify-center h-screen">
        <div class="w-4/5 h-4/5 flex items-center justify-center">
            <video
                id="my-video"
                class="plyr"
                controls
                preload="auto"
                width="640"
                height="360"
            >
                <source src="{data.vidURL}" type="video/mp4" />
            </video>
        </div>
    </div>
    
