<template>
    <div class="map"></div>
</template>

<script>
import gmapsInit from "@/util/gmaps";
export default {
    name: "GoogleMap",
    async mounted() {
        try {
            const google = await gmapsInit();
            const geocoder = new google.maps.Geocoder();
            const map = new google.maps.Map(this.$el);
            const locations = [
                {
                    position: {
                        lat: 59.222549,
                        lng: 25.032600
                    }
                }
            ];

            geocoder.geocode({ address: "Viikingite küla" }, (results, status) => {
                if (status !== "OK" || !results[0]) {
                    throw new Error(status);
                }

                map.setCenter(results[0].geometry.location);
                map.fitBounds(results[0].geometry.viewport);
            });

            const marker = locations
            .map (x => new google.maps.Marker({ ...x, map }));

            marker;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style lang="scss">
    .map {
        width: 500px;
        height: 300px;
    }
</style>