<template>
    <div>
        <div class="flex justify-center">
            <div class="style w-3/4">
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> تسهیلات </label>
                    <input type="text" class="stylelists w-36">
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> شماره قسط </label>
                    <input type="number" class="stylelists w-36">
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> مبلغ قسط </label>
                    <input type="number" class="stylelists w-36">
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> وضعیت </label>
                    <input type="text" class="stylelists w-36">
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3">  تاریخ سررسید </label>
                    <input type="number" class="stylelists w-36">
                </div>
                <button class="h-9 border w-16 rounded-xl bg-secondary-color text-main-color font-bold mt-auto mb-6">
                     پرداخت
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style scoped>
.style{
    @apply h-44 mr-52 justify-around items-start pt-9 border rounded-xl text-secondary-color flex flex-row -mt-96
}
.stylelists{
    @apply h-8 flex items-center border rounded-xl text-main-color 
}
</style>