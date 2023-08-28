<template>
    <div class="container-fluid list-tags">
        <div class="row">
            <!-- Table part with a list of tag -->
            <table class="table table-striped table-bordered mt-5">
                <thead>
                    <tr class="list-tags__header text-center">
                        <td scope="col">Tags</td>
                        <td scope="col">Présentation</td>
                        <td scope="col">Commandes</td>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="tag in listTags" :key="tag.id" class="list-tags__body">
                        <td class="text-center"><span :style="tag.style" class="badge">{{ tag.name }}</span></td>
                        <td>{{tag.presentation }}</td>
                        <!-- Button for delete and update the tag -->
                        <td class="text-center">
                            <button type="submit" class="btn btn-warning me-1" @click="updateTag(tag.id)">update</button>
                            <button type="submit" class="btn btn-danger" @click="deleteTag(tag.id)">delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- Button for add the tag-->
            <div class="text-center">
                <button type="submit" class="btn btn-warning m-2" data-bs-toggle="modal" data-bs-target="#tagModal">Creer un nouveau tag</button>
            </div>
            <!-- model of creation of tag-->
            <div class="modal" id="tagModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ titleForCreationOrUpdateTag }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-6 p-2">
                                    <label for="tagNameInput" class="form-label">Nom du tag</label>
                                    <input class="form-control" id="tagNameInput" v-model="newTag.name" />
                                    </div>
                                    <div class="col-lg-6 p-2">
                                        <label for="tagStyleBackgroundColorInput" class="form-label col-lg-12">Couleur du fond</label>
                                        <input class="col-lg-12" type="color" id="tagStyleBackgroundColorInput" v-model="newTag.style.backgroundColor" />
                                    </div>
                                    <div class="col-lg-6 p-2">
                                        <label for="tagPresentationInput" class="form-label">Presentation du tag</label>
                                        <textarea class="form-control" id="tagPresentationInput" v-model="newTag.presentation" placeholder="Ecrivez votre message ici" :rows="10"></textarea>
                                    </div>
                                    <div class="col-lg-6 p-2">
                                        <label for="tagStyleColorInput" class="form-label col-lg-12">Couleur écriture</label>
                                        <input class="col-lg-12" type="color" id="tagStyleColorInput" v-model="newTag.style.color" />
                                    <div class="row">
                                        <span class="test-center p-2 col-lg-12">Representation du tag</span>
                                        <div>
                                            <button :style="newTag.style" class="badge btn-sm">{{ newTag.name }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="createTag()">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const listTags = ref([
    {
        id: `1jhl`,
        name: `vie du club`,
        presentation: `concerne la vie du club`,
        style: {
            backgroundColor: `red`
        }
    },
    {
        id: `1lkhl`,
        name: `actu competition`,
        presentation: `concerne la competition`,
        style: {
            backgroundColor: `green`
        }
    },
    {
        id: `dfdsfdf`,
        name: `armement`,
        presentation: `concerne le arme`,
        style: {
            backgroundColor: `yellow`
        }
    }
])

const newTag = ref({
    name: ``,
    presentation: ``,
    style: {
        backgroundColor: `gray`
    }
})

const titleForCreationOrUpdateTag = ref(``)
/**
 * Update the tag
 * @param {*} tagId
 */
function updateTag(tagId) {
    titleForCreationOrUpdateTag.value = 'Modification du tag'
    newTag.value = listTags.value.filter(tag => tag.id == tagId)[0]
    deleteTag(tagId)
}

/**
 * Delete the tag
 * @param mixed tagId
 *
 */
function deleteTag(tagId) {
    listTags.value = listTags.value.filter(tag => tag.id != tagId)
}


/**
 * show a modal for new tag
 */
function showCreateTag() {
    titleForCreationOrUpdateTag.value = 'Creation du tag'
}

/**
 * Create the new tag and push in the list of tags
 */
function createTag() {
    listTags.value.push({
        id: `fdsfd`,
        name: newTag.value.name,
        presentation: newTag.value.presentation,
        style: newTag.value.style
    })

    //reset the tag
    cancelTag()
}

/**
 * Cancel the creation or the update of tag
 */
function cancelTag(){
    //reset the tag
    newTag.value = {
        name: ``,
        presentation: ``,
        style: {
            backgroundColor: `gray`
        }
    }

    showCreateTag()
}

</script>
