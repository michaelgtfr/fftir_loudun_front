<template>
    <!-- pagination -->
        <div class="block-pagination d-flex justify-content-center" v-if="numberTotalOfItems > 20">
            <nav aria-label="navigation" class="m-0">
                <ul class="pagination m-0">
                    <li class="page-item" @click="previousPage()">
                        <p class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Précédent</span>
                        </p>
                    </li>
                    <li v-for="(page, index) in pagination" 
                        :key="index" 
                        :class="getStylePaginateButton(page)"
                        @click="requestedPage(page)"
                        ><p class="page-link">{{ page }}</p></li>
                    <li class="page-item" @click="nextPage()">
                        <p class="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Suivant</span>
                        </p> 
                    </li>
                </ul>
            </nav>
        </div>
</template>

<script>

export default {
    name: `paginate`,
    props: {
        numberTotalOfItems: {
            type: Number,
            required: false,
            default: 0
        },
        pageDisplay: {
            type: Number,
            required: false,
            default: 1
        },
        numberOfItemDisplayed: {
            type: Number,
            required: false,
            default: 20
        },
    },
    data() {
        return {
            pagination: []
        }
    },
    watch: {
        numberTotalOfItems() {
            this.getPagination()
        }
    },
    methods: {
        /**
         * Gives number of pages available
         */
        getNumberOfPageAvailable() {
            return Math.ceil(this.numberTotalOfItems / this.numberOfItemDisplayed)
        },
        /**
         * Create pagination relative to the number of existing items
         */
        getPagination() {
                const numberOfAvailablePages = this.getNumberOfPageAvailable()
                const currentPage = this.pageDisplay

                // Add the current page as the first page in pagination
                this.pagination.push(currentPage)

                // Determine the range of pages to display based on the current page and available pages
                const startPage = Math.max(2, currentPage - 2);
                const endPage = Math.min(numberOfAvailablePages, currentPage + 2)

                // Add pages within the range to the pagination
                for (let i = startPage; i <= endPage; i++) {
                    if (i !== currentPage) {
                        this.pagination.push(i)
                    }
                }

                // Add the last page if not already included
                if (endPage < numberOfAvailablePages) {
                    this.pagination.push(numberOfAvailablePages)
                }
        },
        /**
         * Request previous page
         */
        previousPage() {
            if (this.pageDisplay > 1) {
                const previousPage = this.pageDisplay - 1
                this.requestedPage(previousPage)
            }
        },
        /**
         * Request next page
         */
        nextPage() {
            if(this.pageDisplay < this.getNumberOfPageAvailable()) {
                const nextPage = this.pageDisplay + 1
                this.requestedPage(nextPage)
            }
        },
        /**
         * Provided a specific style to the button
         * @param {integer} page 
         */
        getStylePaginateButton(page)
        {
            if(page === this.pageDisplay) {
                return `page-item active`
            }
            return `page-item`
        },
        /**
         * Emits an event with the requested page number
         * @param {string} requestedPage 
         */
        requestedPage(requestedPage) {
            if(requestedPage != this.pageDisplay) {
                this.$emit(`pageSelected`, requestedPage)
            }
        }
    }
}
</script>
