<template>
    <div id="projects">
        <div class="project">
            <div class="title">GitHub Pages Deployer</div>
            <div class="url">https://github.com/marcterradas/githubpages-deployer</div>
            <div class="tools"><b>Vue.js</b>,<b>Vite.js</b>,<b>JavaScript</b>,<b>SCSS</b>,<b>HTML</b></div>
            <div class="description">{{ $t('projects.deployer.description') }}</div>
        </div>
        <div class="project">
            <div class="title">Portfolio</div>
            <div class="url">https://github.com/marcterradas/portfolio</div>
            <div class="tools"><b>Node.js</b>,<b>TypeScript</b>,<b>JEST</b></div>
            <div class="description">{{ $t('projects.portfolio.description') }}</div>
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
    .project {
        b {
            font-weight: bold;
        }
    }
}
</style>
