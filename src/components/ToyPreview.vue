<template>
    <li class="toy-preview flex space-between">
        <p>
            {{ toy }}
        </p>

        <div class="tools flex">
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
import { toyService } from '../services/toy.service.local.js'
export default {
    name: 'ToyPreview',
    props: ['toy'],
    computed: {
        
    },
}
</script>


