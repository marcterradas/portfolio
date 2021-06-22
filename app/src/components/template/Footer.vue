<template>
    <footer id="footer">
        <div class="element">
            <a href="https://github.com/marcterradas" target="_blank"> <img src="../../../public/img/github.svg" /> </a>
        </div>
        <div class="element">
            <a href="https://www.linkedin.com/in/marc-terradas-zapata/" target="_blank"> <img src="../../../public/img/linkedin.svg" /> </a>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
#footer {
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.15);

    .element {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
            width: 40px;
            height: 40px;
        }
    }

    @media screen and (max-width: 1200px) {
        position: inherit;
    }
}
</style>
