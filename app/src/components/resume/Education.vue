<template>
    <div class="element" id="educationResume" @click="$emit('selectedPage', 'education')">
        <div class="title">{{ $t('education') }}</div>
        <div class="icon"></div>
        <div class="resume">
            <div class="row">
                <div class="degree">{{ $t('education_description.daw.degree') }}</div>
                <div class="place">{{ $t('education_description.daw.place') }}</div>
            </div>
            <div class="row">
                <div class="degree">{{ $t('education_description.smx.degree') }}</div>
                <div class="place">{{ $t('education_description.smx.place') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Education'
}
</script>

<style lang="scss">
#educationResume {
    .icon {
        background-image: url('/img/education-dark.png');
    }

    .resume {
        .row {
            width: calc(100% - 20px);
            padding: 20px 0 0 10px;
            .degree {
                font-family: Roboto-Bold;
                font-size: 16px;
                margin-bottom: 3px;
            }

            .place {
                font-size: 14px;
            }
        }
    }
}
</style>
