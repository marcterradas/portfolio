<template>
    <div id="home">
        <div id="aboutMe">
            <div class="avatar"></div>
            <div class="name">Marc Terradas Zapata</div>
            <div class="description">Full Stack Developer</div>
        </div>
        <div id="information">
            <Work></Work>
            <Education></Education>
            <AboutMe></AboutMe>
        </div>
    </div>
</template>

<script>
import Work from '@/components/resume/Work'
import Education from '@/components/resume/Education'
import AboutMe from '@/components/resume/AboutMe'

export default {
    name: 'Home',
    components: {
        Work,
        Education,
        AboutMe
    }
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
            border-radius: 4px;
            border: 1px solid $grey;
            padding: 20px 0;
            cursor: pointer;

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
    }
}
</style>
