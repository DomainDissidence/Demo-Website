<script setup>
import { useAppStore } from "@/stores/appStore.js";

const appStore = useAppStore();
const currentTarget = appStore.currentTargetValue;
</script>



<template>
    <video id="bg-video" muted autoplay loop playsinline>
        <source src="./video/blood.mp4#t=2" type="video/mp4">
    </video>


    <div id="content">

        <h1>{{ currentTarget.name.toUpperCase() }}</h1>

        <section v-for="gripe in currentTarget.gripes">
            <template v-for="(gripeLine, i) in gripe.split(/(?<=\.) /)">
                <h3 v-if="i === 0">{{ gripeLine }}</h3>
                <p v-else>{{ gripeLine }}</p>
            </template>
        </section>
    </div>
</template>



<style scoped lang="scss">
:global(body) {
    background-color: black;
}


video#bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    opacity: 0.2;
    mix-blend-mode: hard-light;
    //background-blend-mode: screen;
}


#content {
    display: flex;
    flex-direction: column;
    align-items: center;


    h1 {
        text-align: center;
        font-size: 3.2rem;
        font-family: "Lexend", sans-serif;
        color: var(--color-blood);
        font-weight: 700;
        margin: 40px 0;
        letter-spacing: 0.3rem;
    }

    section {
        padding: 20px 14px;
        font-family: "Lexend", sans-serif;
        min-height: 160px;
        width: 100%;
        max-width: 400px;
        margin-bottom: 30px;
        position: relative;
        border: 1px solid var(--color-text-dim);
        background-color: black;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            box-shadow: 10px 4px var(--color-blood);
        }

        h3 {
            font-weight: 600;
            color: var(--color-text);
            font-size: 1.35rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        p {
            color: var(--color-text-dim);
            font-size: 1.15rem;
            font-weight: 200;
        }
    }
}
</style>