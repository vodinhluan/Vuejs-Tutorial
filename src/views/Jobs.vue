<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id  }}">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobs: [
                   { title: 'Lập trình viên Website', id: 1, details: 'web'},
                   { title: 'Lap trình viên Di động', id: 2, details: 'mobile'},
                   { title: 'Lap trinh viên Front End', id: 3, details: 'front end'},
                ]
            }
        }
    }
</script>