<script>
export default {
    name: 'AppFooter',
    data() {
        return  {
            
        }
    }
}
</script>

<template>


<footer>
    <div class="container d-flex gap-3">
        <p>
            Copyright (c): 2024 Boolean Classe #118
        </p>

        <router-link :to="{name: 'contact-me'}">Contattami</router-link>
    </div>

</footer>

</template>


<style lang="scss" scoped>

footer {

    border-top: 1px solid #ffffff44;

    padding: 24px 0;

    p {
        opacity: .7;
        font-size: .8em;
    }
}

</style>