<template>
    <footer id="footer">
        <div class="element">
            <a href="https://github.com/marcterradas" target="_blank" rel="noopener">
                <div class="imageContainer">
                    <img id="github" alt="github" class="image" src="/img/github.png" data-src="/img/githubHover.png" />
                    <img id="githubHover" alt="githubHover" class="image" src="/img/githubHover.png" />
                </div>
            </a>
        </div>
        <div class="element">
            <a href="https://www.linkedin.com/in/marc-terradas-zapata/" target="_blank" rel="noopener">
                <div class="imageContainer">
                    <img id="linkedin" alt="linkedin" class="image" src="/img/linkedin.png" data-src="/img/linkedinHover.png" />
                    <img id="linkedinHover" alt="linkedinHover" class="image" src="/img/linkedinHover.png" />
                </div>
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
    height: 50px;
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

            .imageContainer {
                position: relative;
                height: 40px;
                width: 40px;

                .image {
                    height: 40px;
                    width: 40px;

                    &#github,
                    &#linkedin {
                        transition: opacity 0.6s ease;
                    }

                    &#githubHover,
                    &#linkedinHover {
                        position: absolute;
                        top: 0;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        object-fit: contain;
                        opacity: 0;
                        transition: opacity 0.6s ease;
                    }
                }

                &:hover {
                    .image {
                        &#githubHover,
                        &#linkedinHover {
                            opacity: 1;
                        }

                        &#github,
                        &#linkedin {
                            opacity: 0;
                        }
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
