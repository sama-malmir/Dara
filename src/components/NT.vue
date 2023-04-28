<template>
    <div class="flex justify-center">
        <div class="style">
            <div class="inline-flex items-center">
                <label>دسته‌بندی</label>
            </div>

            <div class="inline-flex items-center">
                <label>مبلغ</label>
                <input  class="mr-14 border my-3 py-3 px-4 rounded-xl h-8 text-slate-950" type="number">
            </div>
            <div class="inline-flex items-start  ">
                <label class="mt-3">توضیحات</label>
                <input class="mr-6 border my-3 py-3 px-4 rounded-xl h-52 text-slate-950" type="text">
            </div>
            </div>
            
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
}
</script>
<style scoped>
.style {
    @apply bg-main-color w-1/2 h-500 border rounded-xl -mt-435 px-6 pt-8 text-secondary-color flex flex-col
}

.stylelists {
    @apply border my-3 py-3 px-4 rounded-full inline-flex justify-between
}
</style>