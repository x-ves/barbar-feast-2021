<template>
    <div class="counter">
        <h3>{{ $t("content.gates") }}</h3>
        <span>{{ displayDays }} : {{ displayHours }} : {{ displayMinutes }} : {{ displaySeconds }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0
        }
    },
    computed: {
        _seconds: () => 1000,
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        }
    },
    mounted() {
        this.showRemainingTime();
    },
    methods: {
        // if the number is less than 10, make it have a 0 in front (f.e 09, 08, 07...);
        formatNum : num => (num < 10 ? "0" + num : num),

        showRemainingTime() {
            const timer = setInterval(() => {
                const now = new Date();
                const deadline = new Date("July 8 2021 18:00:00 GMT+0300");
                const difference = deadline.getTime() - now.getTime();

                if (difference < 0) {
                    clearInterval(timer);
                    return;
                }

                const days = Math.floor(difference / this._days);
                const hours = Math.floor((difference % this._days) / this._hours);
                const minutes = Math.floor((difference % this._hours) / this._minutes);
                const seconds = Math.floor((difference % this._minutes) / this._seconds);

                this.displaySeconds = this.formatNum(seconds);
                this.displayMinutes = this.formatNum(minutes);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);

            }, 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
    .counter {
        margin: 2rem 0 0 0;

        h3 {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 400;
        }

        span {
            font-size: 2rem;
        }
    }
</style>