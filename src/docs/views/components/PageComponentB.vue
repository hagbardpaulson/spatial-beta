<template>
    <div class="page">
        <h1>Component B</h1>

        <h2>Usage</h2>
        <code>
            {{htmlExample}}
        </code>
        <!-- <component-b/> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                htmlExample: `
                <component-b/>
                `,
            };
        },
    };
</script>
