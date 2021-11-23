<template>
    <div id="projects">
        <div class="row">
            <div class="project">
                <div class="title">GitHub Pages Deployer</div>
                <div class="url">https://github.com/marcterradas/githubpages-deployer</div>
                <div class="tools"><b>Vue.js</b>,<b>Vite.js</b>,<b>JavaScript</b>,<b>SCSS</b>,<b>HTML</b></div>
                <div class="description">{{ $t('projects.deployer.description') }}</div>
            </div>
        </div>
        <div class="row">
            <div class="project">
                <div class="title">Portfolio</div>
                <div class="url">https://github.com/marcterradas/portfolio</div>
                <div class="tools"><b>Node.js</b>,<b>TypeScript</b>,<b>JEST</b></div>
                <div class="description">{{ $t('projects.portfolio.description') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style lang="scss">
#projects {
    padding: 40px;
    height: fit-content;

    .row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .project {
            border-radius: 4px;
            padding: 20px;
            box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.15);
            background-color: $white;
            margin-bottom: 20px;
            width: 450px;
            display: block;

            b {
                font-weight: bold;
            }
        }
    }
}
</style>
