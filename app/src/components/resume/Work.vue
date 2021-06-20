<template>
    <div class="element" id="work">
        <div class="title">{{ $t('work') }}</div>
        <div class="icon"></div>
        <div class="resume">
            <div class="job">
                <div class="position">{{ $t('work_description.intowin.position') }}</div>
                <div class="company">{{ $t('work_description.intowin.company') }}</div>
                <div class="duration">{{ $t('work_description.intowin.duration') }}</div>
            </div>
            <div class="job">
                <div class="position">{{ $t('work_description.kriter.position') }}</div>
                <div class="company">{{ $t('work_description.kriter.company') }}</div>
                <div class="duration">{{ $t('work_description.kriter.duration') }}</div>
            </div>
            <div class="job">
                <div class="position">{{ $t('work_description.hospital.position') }}</div>
                <div class="company">{{ $t('work_description.hospital.company') }}</div>
                <div class="duration">{{ $t('work_description.hospital.duration') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work'
}
</script>

<style lang="scss">
#work {
    .icon {
        background-image: url('../../../public/img/work-dark.png');
    }

    .resume {
        .job {
            width: 100%;
            padding: 20px 0 0 10px;

            .position {
                font-family: Roboto-Bold;
                font-size: 16px;
                margin-bottom: 3px;
            }

            .company {
                font-size: 14px;
            }

            .duration {
                font-family: Roboto-Italic;
                font-size: 12px;
            }
        }
    }
}
</style>
