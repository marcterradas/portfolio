<template>
    <div id="home">
        <div class="avatar"></div>
        <div class="name">Marc Terradas Zapata</div>
        <div class="description">Full Stack Developer</div>
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
</style>
