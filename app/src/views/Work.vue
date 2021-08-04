<template>
    <div id="work">
        <div class="element">
            <div class="row">
                <div class="position">{{ $t('work_description.intowin.position') }}</div>
            </div>
            <div class="row">
                <div class="company">{{ $t('work_description.intowin.company') }}</div>
                <div class="separator">·</div>
                <div class="type">{{ $t('work_description.intowin.type') }}</div>
            </div>
            <div class="row">
                <div class="duration">{{ $t('work_description.intowin.duration') }}</div>
                <div class="separator">·</div>
                <div class="years">{{ intowinYears }}</div>
            </div>
            <div class="row">
                <div class="location">{{ $t('work_description.intowin.location') }}</div>
            </div>
            <div class="row">
                <div class="description" v-html="$t('work_description.intowin.description')"></div>
            </div>
        </div>

        <div class="element">
            <div class="row">
                <div class="position">{{ $t('work_description.kriter.position') }}</div>
            </div>
            <div class="row">
                <div class="company">{{ $t('work_description.kriter.company') }}</div>
                <div class="separator">·</div>
                <div class="type">{{ $t('work_description.kriter.type') }}</div>
            </div>
            <div class="row">
                <div class="duration">{{ $t('work_description.kriter.duration') }}</div>
                <div class="separator">·</div>
                <div class="years">{{ $t('work_description.kriter.duration2') }}</div>
            </div>
            <div class="row">
                <div class="location">{{ $t('work_description.kriter.location') }}</div>
            </div>
            <div class="row">
                <div class="description" v-html="$t('work_description.kriter.description')"></div>
            </div>
        </div>

        <div class="element">
            <div class="row">
                <div class="position">{{ $t('work_description.hospital.position') }}</div>
            </div>
            <div class="row">
                <div class="company">{{ $t('work_description.hospital.company') }}</div>
                <div class="separator">·</div>
                <div class="type">{{ $t('work_description.hospital.type') }}</div>
            </div>
            <div class="row">
                <div class="duration">{{ $t('work_description.hospital.duration') }}</div>
                <div class="separator">·</div>
                <div class="years">{{ $t('work_description.hospital.duration2') }}</div>
            </div>
            <div class="row">
                <div class="location">{{ $t('work_description.hospital.location') }}</div>
            </div>
            <div class="row">
                <div class="description" v-html="$t('work_description.hospital.description')"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work',
    computed: {
        intowinYears: function () {
            const currentYear = new Date().getFullYear()
            const currentMonth = new Date().getMonth() + 1

            const startYear = 2019
            const startMonth = 6

            const years = currentYear - startYear
            const months = currentMonth < 6 ? currentMonth + startMonth + 1 : currentMonth - startMonth + 1

            const duration = this.$tc('work_description.intowin.duration2', months, { y: years, m: months })

            return duration
        }
    }
}
</script>

<style lang="scss">
#work {
    padding: 40px;

    .element {
        border-radius: 4px;
        padding: 20px;
        box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.15);
        background-color: $white;
        margin-bottom: 20px;

        .row {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;

            .position {
                font-family: Roboto-BoldItalic;
                font-size: 18px;
                width: 100%;
                margin-bottom: 16px;
            }

            .duration {
                font-family: Roboto-Italic;
                font-size: 14px;
            }

            .years {
                font-family: Roboto-Italic;
                font-size: 14px;
            }

            .location {
                font-family: Roboto-Italic;
                font-size: 14px;
                margin-bottom: 16px;
            }

            .separator {
                margin: 0 5px;
            }
        }
    }
}
</style>
