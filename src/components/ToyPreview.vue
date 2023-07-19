<template>
    <li class="toy-preview">
        <ul>{{ toy.name }}</ul>
        <ul>${{ toy.price }}</ul>
        <ul>
            <li v-for="label in toy.labels" :key="label">{{ label }}</li>
        </ul>

        <div class="actions">
            <button @click="$emit('removed')" class="btn">
                <span>x</span>
            </button>
            <RouterLink :to="'/toy/edit/' + toy._id" class="btn">
                <span>Edit</span>
            </RouterLink>
            <RouterLink :to="'/toy/details/' + toy._id" class="btn">
                <span>Details</span>
            </RouterLink>
        </div>

    </li>
</template>

<script>
import { toyService } from '../services/toy.service.js'
export default {
    name: 'ToyPreview',
    props: ['toy'],
    computed: {
        
    },
}
</script>


