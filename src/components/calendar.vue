<template>
	<div class="pt-3 pb-3" id="calendar">
		<calendar-view
			:show-date="showDate"
			:items="items"
			class="theme-default holiday-us-traditional holiday-us-official">
			<template #header="{ headerProps }">
				<calendar-view-header
					:header-props="headerProps"
					@input="setShowDate" />
			</template>
		</calendar-view>
	</div>
</template>

<script>
	import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
	import "../../node_modules/vue-simple-calendar/dist/style.css"
	// The next two lines are optional themes
	import "../../node_modules/vue-simple-calendar/dist/css/default.css"
	import "../../node_modules/vue-simple-calendar/dist/css/holidays-us.css"

	export default {
		name: `calendar`, 
		props: {
			items: {
				type: Array,
				required: true
			}
		},
		components: {
			CalendarView,
			CalendarViewHeader,
		},
		data() {
			return { 
				showDate: new Date()
			}
		},
		methods: {
			/**
			 * Gives a date to highlight (today's date)
			 * @param {*} d 
			 */
			setShowDate(d) {
				this.showDate = d;
			},
		}
	}
</script>
<style>
	#calendar {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 60vh;
		width: 80vw;
		margin-left: auto;
		margin-right: auto;
	}
	.cv-wrapper {
		border-radius: 15px;
	}
</style>