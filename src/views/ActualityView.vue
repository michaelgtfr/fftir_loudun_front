<template>
    <main>
        <div class="row block-actuality mb-5">
            <!-- Last articles -->
            <h2 class="col-lg-10 offset-lg-1 p-3">Les derniers article</h2>
            <!-- Principal article-->
            <div class="block-actuality__last-actuality col-lg-6 offset-lg-1">
                <actualityCard :actuality="actualities[0]"/>
            </div>
            <!-- two articles -->
            <div class="col-lg-4">
                <div class="block-actuality__second-actuality mb-3" v-for="actuality in filterByNumberOfArticles(1, 3)" :key="actuality.id">
                    <actualityCard class="block-actuality__second-actuality__block" :actuality="actuality"/>
                </div>
            </div>

            <!-- List of artices sort by tags -->
            <div class="block-actuality__old-actuality col-lg-6 offset-lg-1 mb-5">
                <div class="row">
                    <h2 class="col-lg-4 p-3">Ancienne articles</h2>
                    <div class="col-lg-8 p-3">
                        <div class="block-actuality__old-actuality__filter-bar d-flex justify-content-start">
                            <ul v-for="tag in tags" :key="tag.name">
                                <li @click="choiceTag(tag.name)">{{ tag.name }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-12 m-2" v-for="actuality in filterByNumberOfArticles(3, 10)" :key="actuality.id">
                        <presentationCard class="block-actuality__old-actuality__article" :actuality="actuality"/>
                    </div>
                </div>
            </div>

            <!-- Acutality of club-->
            <div class="col-lg-4 ms-2 block-actuality__actuality-of-club mb-5">
                <h2 class="col-lg-12 p-3">Actualité du club</h2>
                <div class="col-lg-12 m-2" v-for="actuality in filterByNumberOfArticles(3, 10)" :key="actuality.id">
                    <presentationCard class="block-actuality__old-actuality__article" :actuality="actuality"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import actualityCard from "@/components/actualyCard.vue"
import presentationCard from "@/components/presentationCard.vue"


const choiceTagForOldPresentation = ref(`tous les articles`)
const tags = ref([
    {
        name: `tous les articles`,
    },
    {
        name: `vie du club`,
    },
    {
        name: `armement`,
    },
    {
        name: `competition`,
    }
])

const actualities = ref([
    {
        id: `idfofref`,
        title: `Carabine 22Lr RUGER Precision Rimfire ''BRONZE'' lunette HAWKE Vantage 3-9x40 Mildot IR`,
        chapo: `arme calibre 22lr`,
        content: `Modèle: PRECISION RIMFIRE
                Cal.22 lr
                Finition cerakote BURNT BRONZE
                Canon lourd de 46cm

                Pas de rayure 1:16"

                Filetage pour silencieux 1/2 X 28
                Crosse et poignée type AR-15 Tactical noire ergonomique ultra légère, réglable en longueur et busc réglable .
                Rail de picatinny pour montage de lunette
                Levier de culasse surdimensionné
                Garde main allégé M-LOK MAGPUL
                Chargeur rotatif 10 cartouches
                Canon forgé à froid ultra précis.`,
        dateCreate: new Date('May 19, 2023').toDateString(),
        tags: [
            {
                name: `vie du club`,
                style: {
                    backgroundColor: `red`
                }
            },
            {
                name: `armement`,
                style: {
                    backgroundColor: `#09b794`
                }
            }
        ]
    },
    {
        id: `idfofref`,
        title: `Carabine 22Lr RUGER Precision Rimfire ''BRONZE'' lunette HAWKE Vantage 3-9x40 Mildot IR`,
        chapo: `arme calibre 22lr`,
        content: `carabine de petit calibre`,
        dateCreate: new Date('May 19, 2023').toDateString(),
        tags: [
            {
                name: `vie du club`,
                style: {
                    backgroundColor: `red`
                }
            },
            {
                name: `armement`,
                style: {
                    backgroundColor: `#09b794`
                }
            }
        ]
    },
    {
        id: `idfofref`,
        title: `Carabine 22Lr RUGER Precision Rimfire ''BRONZE'' lunette HAWKE Vantage 3-9x40 Mildot IR`,
        chapo: `arme calibre 22lr`,
        content: `carabine de petit calibre`,
        dateCreate: new Date('May 19, 2023').toDateString(),
        tags: [
            {
                name: `vie du club`,
                style: {
                    backgroundColor: `red`
                }
            },
            {
                name: `armement`,
                style: {
                    backgroundColor: `#09b794`
                }
            }
        ]
    },
    {
        id: `idfofref`,
        title: `Carabine 22Lr RUGER Precision Rimfire ''BRONZE'' lunette HAWKE Vantage 3-9x40 Mildot IR`,
        chapo: `arme calibre 22lr`,
        content: `carabine de petit calibre`,
        dateCreate: new Date('May 19, 2023').toDateString(),
        tags: [
            {
                name: `vie du club`,
                style: {
                    backgroundColor: `red`
                }
            },
            {
                name: `armement`,
                style: {
                    backgroundColor: `#09b794`
                }
            }
        ]
    },
    {
        id: `idfofref`,
        title: `Carabine 22Lr RUGER Precision Rimfire ''BRONZE'' lunette HAWKE Vantage 3-9x40 Mildot IR`,
        chapo: `arme calibre 22lr`,
        content: `carabine de petit calibre`,
        dateCreate: new Date('May 19, 2023').toDateString(),
        tags: [
            {
                name: `vie du club`,
                style: {
                    backgroundColor: `red`
                }
            },
            {
                name: `armement`,
                style: {
                    backgroundColor: `#09b794`
                }
            }
        ]
    },
    {
        id: `idfofref`,
        title: `Carabine 22Lr RUGER Precision Rimfire ''BRONZE'' lunette HAWKE Vantage 3-9x40 Mildot IR`,
        chapo: `arme calibre 22lr`,
        content: `carabine de petit calibre`,
        dateCreate: new Date('May 19, 2023').toDateString(),
        tags: [
            {
                name: `vie du club`,
                style: {
                    backgroundColor: `red`
                }
            },
            {
                name: `armement`,
                style: {
                    backgroundColor: `#09b794`
                }
            }
        ]
    },
    {
        id: `idfofref`,
        title: `Carabine 22Lr RUGER Precision Rimfire ''BRONZE'' lunette HAWKE Vantage 3-9x40 Mildot IR`,
        chapo: `arme calibre 22lr`,
        content: `carabine de petit calibre`,
        dateCreate: new Date('May 19, 2023').toDateString(),
        tags: [
            {
                name: `vie du club`,
                style: {
                    backgroundColor: `red`
                }
            },
            {
                name: `armement`,
                style: {
                    backgroundColor: `#09b794`
                }
            }
        ]
    },
    {
        id: `idfofref`,
        title: `Carabine 22Lr RUGER Precision Rimfire ''BRONZE'' lunette HAWKE Vantage 3-9x40 Mildot IR`,
        chapo: `arme calibre 22lr`,
        content: `carabine de petit calibre`,
        dateCreate: new Date('May 19, 2023').toDateString(),
        tags: [
            {
                name: `vie du club`,
                style: {
                    backgroundColor: `red`
                }
            },
            {
                name: `armement`,
                style: {
                    backgroundColor: `#09b794`
                }
            }
        ]
    },
])

/**
 * Provide the number of items requested
 * @param start
 * @param end
 */
function filterByNumberOfArticles(start: number, end: number) {
    const voir = actualities.value.slice(start, end)

    return voir
}

function choiceTag(name: string) {
    choiceTagForOldPresentation.value = name
}
</script>
