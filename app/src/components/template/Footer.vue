<template>
    <footer id="footer">
        <div class="element">
            <a href="https://github.com/marcterradas" target="_blank">
                <div id="github" class="image"></div>
            </a>
        </div>
        <div class="element">
            <a href="https://www.linkedin.com/in/marc-terradas-zapata/" target="_blank">
                <div id="linkedin" class="image"></div>
            </a>
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
    margin-top: 10px;
    background-color: white;

    .element {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            height: 40px;
            width: 40px;
            cursor: pointer;

            .image {
                height: 40px;
                width: 40px;
                transition: background-image 0.6s ease;

                &#github {
                    background-image: url('../../../public/img/github.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;

                    &:hover {
                        background-image: url('../../../public/img/githubHover.png');
                    }
                }

                &#linkedin {
                    background-image: url('../../../public/img/linkedin.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;

                    &:hover {
                        background-image: url('../../../public/img/linkedinHover.png');
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        position: fixed;
    }
}
</style>
