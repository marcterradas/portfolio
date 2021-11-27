<template>
    <div id="education">
        <div class="elementContainer">
            <div class="element">
                <div class="degree">{{ $t('education.daw.degree') }}</div>
                <div class="place">{{ $t('education.daw.place') }}</div>
                <div class="duration">{{ $t('education.daw.duration') }}</div>
                <div class="description" v-html="$t('education.daw.description')"></div>
            </div>
        </div>
        <div class="elementContainer">
            <div class="element">
                <div class="degree">{{ $t('education.smx.degree') }}</div>
                <div class="place">{{ $t('education.smx.place') }}</div>
                <div class="duration">{{ $t('education.smx.duration') }}</div>
                <div class="description" v-html="$t('education.smx.description')"></div>
            </div>
        </div>
        <div class="elementContainer">
            <div class="element certificate">
                <div class="degree">{{ $t('education.b2.degree') }}</div>
                <div class="place">{{ $t('education.b2.place') }}</div>
                <div class="duration">{{ $t('education.b2.certificated') }}</div>
                <div class="link">
                    <a href="https://drive.google.com/file/d/1y1qKp5r3NS-lVC19Be6tuJTgKYusuzHq/view" target="_blank">{{ $t('education.b2.link') }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Education',
    components: {},
    computed: {}
}
</script>

<style lang="scss">
#education {
    padding: 40px;
    height: fit-content;

    .elementContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .element {
            border-radius: 4px;
            padding: 20px;
            box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.15);
            background-color: $white;
            margin-bottom: 20px;
            width: 450px;
            display: block;

            .degree {
                font-family: Roboto-BoldItalic;
                font-size: 18px;
                width: 100%;
                margin-bottom: 16px;
            }

            .place {
                font-family: Roboto-Italic;
                font-size: 14px;
            }

            .duration {
                font-family: Roboto-Italic;
                font-size: 14px;
                margin-bottom: 10px;
            }

            .link {
                a {
                    color: $black;
                }
            }

            &.certificate {
                background-color: $blue;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        padding-bottom: 70px;
    }

    @media screen and (max-width: 720px) {
        .elementContainer {
            .element {
                width: 100%;
            }
        }
    }
}
</style>
