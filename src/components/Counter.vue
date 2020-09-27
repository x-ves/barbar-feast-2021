<template>
    <div class="counter">
        <h3 class="counter__title">{{ $t("counter.gates") }}</h3>
        <div class="counter__time">
            <div class="counter__time__days">
                <span class="counter__time__num">{{ displayDays }}</span>
                <span>{{$t("counter.days")}}</span>
            </div>
            <div class="counter__time__hours">
                <span class="counter__time__num">{{ displayHours }}</span>
                <span>{{$t("counter.hours")}}</span>
            </div>
            <div class="counter__time__minutes">
                <span class="counter__time__num">{{ displayMinutes }}</span>
                <span>{{$t("counter.minutes")}}</span>
            </div>
            <div class="counter__time__seconds">
                <span class="counter__time__num">{{ displaySeconds }}</span>
                <span>{{$t("counter.seconds")}}</span>
            </div>
        </div>

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
        display: flex;
        flex-direction: column;
        margin: 1rem 0;

        &__title {
            margin: 0 0 1rem 0;
            font-size: 1.4rem;
            font-weight: 400;
        }

        &__time {
            display: flex;
            justify-content: space-evenly;

            &__days, &__hours, &__minutes, &__seconds {
                display: flex;
                flex-direction: column;
                align-content: center;
                padding: 0.25rem;
                border: 1px solid black;
                background: rgb(255, 255, 255);
                border-radius: 3px;

                & span:nth-of-type(2) {
                    letter-spacing: 1px;
                    color: rgb(100, 100, 100);
                    font-size: 0.9rem;
                }
            }

            &__num {
                font-size: 1.5rem;
            }
        }

@media only screen and (min-width: 768px) {

    .counter {
        margin: 2rem auto;
        width: 22rem;
        display: flex;
        flex-direction: column;

        &__title {
            margin: 0 0 0.5rem 0;
            font-size: 1.5rem;
            font-weight: 400;
        }

        &__time {
            display: flex;
            justify-content: center;

            &__days, &__hours, &__minutes, &__seconds {
                display: flex;
                flex-direction: column;
                align-content: center;
                margin: 0.25rem;
                padding: 0.5rem;
                border: 1px solid black;
                border-radius: 3px;

                & span:nth-of-type(2) {
                    letter-spacing: 1px;
                    color: rgb(100, 100, 100)
                }
            }

            &__num {
                font-size: 2rem;
            }
        }
}
}}

@media only screen and (min-width: 1024px) {

}

@media only screen and (min-width: 1440px) {

}

</style>