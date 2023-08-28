<template>
    <div class="container-fluid">
        <div class="row">
            <table class="table table-striped table-bordered mt-5">
                <thead>
                    <tr class="text-center">
                        <td scope="col">Date d'ouverture</td>
                        <td scope="col">horaire d'ouverture</td>
                        <td scope="col">Stand de tir</td>
                        <td scope="col">Responsable(s) de la séance</td>
                        <td scope="col">Commandes</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="shootingRange in listShootingRange" :key="shootingRange.id">
                        <td>
                            {{ shootingRange.date }}
                        </td>
                        <td>
                            <p>Horaire de début de séance: {{ shootingRange.timeStart }}</p>
                            <p>Horaire de fin de séance: {{ shootingRange.timeEnd }}</p>
                        </td>
                        <td>
                            {{ shootingRange.shootingRange }}
                        </td>
                        <td>
                            <div v-for="responsable in shootingRange.responsable" :key="responsable.id">
                                {{ responsable.name }}
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="submit" class="btn btn-warning me-1" @click="updateShootingRange(responsable.id)">update</button>
                            <button type="submit" class="btn btn-danger" @click="deleteShootingRange(responsable.id)">delete</button>
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
                            <h5 class="modal-title">titre</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div>
                                    <label for="FormDateInput" class="form-label col-lg-12">Couleur du fond</label>
                                    <input class="col-lg-12" type="date" id="FormDateInput" v-model="shootingRange.date" />
                                </div>
                                <div class="col-lg-6">
                                    <label for="startTimeInput" class="form-label col-lg-12">Debut de séance</label>
                                    <input class="col-lg-12" type="time" id="startTimeInput" v-model="shootingRange.timeStart" />
                                </div>
                                <div class="col-lg-6">
                                    <label for="endTimeInput" class="form-label col-lg-12">fin de séance</label>
                                    <input class="col-lg-12" type="time" id="endTimeInput" v-model="shootingRange.timeEnd" />
                                </div>
                                <div>
                                    <label for="choiceShootingRange" class="form-label col-lg-12">Stand de tir</label>
                                    <select class="col-lg-12" id="choiceShootingRange" v-model="shootingRange.shootingRange">
                                        <option v-for="choiceShootingRange in choiceShootingRange" v-bind:value="choiceShootingRange" :key="choiceShootingRange">
                                                {{ choiceShootingRange }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="createShootingRange()">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const listShootingRange = ref([
    {
        id: `sdsqdsqd`,
        date: '2023-08-18',
        shootingRange: 'stand de saint leger',
        timeStart: '10:00',
        timeEnd: '12:00',
        responsable: [
            {   id: `fgfgfgf`,
                name: 'sqdsdqaasdsd'
            }
        ]
    },
    {
        id: `sd4564sqdd`,
        date: '2023-08-18',
        shootingRange: 'stand de loudun',
        timeStart: '10:00',
        timeEnd: '12:00',
        responsable: [
            {   id: `fgfdvsfdgfgf`,
                name: 'sqdsdqdffdsfaasdsd'
            },
            {   id: `fgfgfgf`,
                name: 'sqdsdqaasdsd'
            }
        ]
    },
    {
        id: `354sdsqdsdfdfd`,
        date: '2023-08-18',
        shootingRange: 'stand de saint leger',
        timeStart: '10:00',
        timeEnd: '12:00',
        responsable: [
            {   id: `fgfgfgf`,
                name: 'sqdsdqaasdsd'
            }
        ]
    }
])

const choiceShootingRange = ref([
    'stand de saint leger',
    'stand de loudun'
])

const shootingRange = ref({})

function createShootingRange()
{
    listShootingRange.value.push({
        id: 'dsfds',
        date: shootingRange.value.date,
        shootingRange: shootingRange.value.shootingRange,
        timeStart: shootingRange.value.timeStart,
        timeEnd: shootingRange.value.timeEnd,
        responsable: shootingRange.value.responsable
    })
}
</script>
