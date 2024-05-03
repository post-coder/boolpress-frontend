<script>
export default {
    name: 'AppHeader',
}

</script>


<template>

    <header>
        <nav class="py-3">
            <router-link :to="{name: 'home'}" id="boolpress-home-link" class="container py-2">
                Boolpress
            </router-link>
        </nav>
    </header>

</template>

<style lang="scss">

#boolpress-home-link {
    color: white;
    text-decoration: none;

    font-weight: bold;
}

nav {
    border-bottom: 1px solid white;
    
    margin-bottom: 1em;
}
</style>