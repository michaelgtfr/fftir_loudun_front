<template>
    <div class="presentation-card row">
        <div class="col-lg-4">
            <img :src="imageHeader" class="card-img" alt="..." />
        </div>
        <div class="presentation-card__block-text col-lg-8">
            <div class="row">
                <div class="col-lg-12 d-flex justify-content-start">
                <div v-for="(tag, index) in actuality.tags" :key="tag">
                    <span :style="specifyStyleButton(index)" class="badge btn-sm">{{ tag.name }}</span>
                </div>
            </div>
            <h5 class="mt-2 col-lg-12">{{ actuality.title }}</h5>
            <p><small>{{ actuality.dateCreate }}</small></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import imageHeader from "../../src/assets/img/stand_de_tir_saint_leger.jpg"

const props = defineProps({
    actuality: Object
})

function specifyStyleButton(index)
{
    return props.actuality.tags[index].style
}

// voir pour creer des tag example 'le club' ,'armement', ....
// mettre en place les troi dernier article puis par tag
</script>
