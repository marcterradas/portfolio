<template>
    <div id="education">
        <div class="elementContainer">
            <div class="element">
                <div class="degree">{{ $t('education_description.daw.degree') }}</div>
                <div class="place">{{ $t('education_description.daw.place') }}</div>
                <div class="duration">{{ $t('education_description.daw.duration') }}</div>
                <div class="description" v-html="$t('education_description.daw.description')"></div>
            </div>
        </div>
        <div class="elementContainer">
            <div class="element">
                <div class="degree">{{ $t('education_description.smx.degree') }}</div>
                <div class="place">{{ $t('education_description.smx.place') }}</div>
                <div class="duration">{{ $t('education_description.smx.duration') }}</div>
                <div class="description" v-html="$t('education_description.smx.description')"></div>
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
        }
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
