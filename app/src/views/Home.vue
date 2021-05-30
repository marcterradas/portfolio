<template>
    <div id="home">
        <div id="aboutMe">
            <div class="avatar"></div>
            <div class="name">Marc Terradas Zapata</div>
            <div class="description">Full Stack Developer</div>
        </div>
        <div id="information">
            <div class="element" id="work">
                <div class="title">{{ $t('work') }}</div>
                <div class="icon"></div>
                <div class="resume"></div>
            </div>
            <div class="element" id="education">
                <div class="title">{{ $t('education') }}</div>
                <div class="icon"></div>
                <div class="resume"></div>
            </div>
            <div class="element" id="about_me">
                <div class="title">{{ $t('about_me') }}</div>
                <div class="icon"></div>
                <div class="resume"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss">
#home {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    #aboutMe {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;

        .avatar {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            border: 1px solid $grey;
            margin-bottom: 20px;
            background-image: url('../../public/img/marc.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center -20px;
        }

        .name {
            font-family: Roboto-Bold;
            font-size: 36px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }

        .description {
            font-family: Roboto-Italic;
            font-size: 24px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }

    #information {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;

        .element {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            border: 1px solid $grey;
            padding: 20px 0;

            .title {
                text-align: center;
                font-family: Roboto-BoldItalic;
                font-size: 20px;
                width: 100%;
                margin-bottom: 20px;
            }

            .icon {
                width: 100%;
                height: 40px;
                background-size: 40px;
                background-repeat: no-repeat;
                background-position: center;
            }
        }

        #work {
            .icon {
                background-image: url('../../public/img/work-light.png');
            }
        }

        #education {
            .icon {
                background-image: url('../../public/img/education-light.png');
            }
        }

        #about_me {
            .icon {
                background-image: url('../../public/img/about_me-light.png');
            }
        }
    }
}
</style>
