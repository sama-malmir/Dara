<template>
    <div>
        <div class="flex justify-center">
            <div class="style w-2/3">
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> تسهیلات </label>
                    <input type="text" class="stylelists w-44">
                </div>
                <div class="inline-flex items-start flex-col">
                    <div class="inline-flex">
                        <img @click="loans++" class="w-6 h-6 ml-2 bg-white rounded-full" src="../assets/addd.png" alt="add">
                        <label class="mb-3"> تعداد قسط </label>
                    </div>
                    <div v-for="loan in loans"  class="inline-flex mb-2">
                        <input type="number" class="stylelists w-9 ml-2">
                        <input type="number" class="stylelists w-36">
                    </div>
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> مبلغ </label>
                    <input type="number" class="stylelists w-36">
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> تاریخ </label>
                    <input type="number" class="stylelists w-36">
                </div>
                <div class="flex mt-auto mb-4">
                    <button class="h-9 border w-16 rounded-xl bg-secondary-color text-main-color font-bold "> ثبت </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            loans:1
        }
    }
}
</script>
<style scoped>
.style{
    @apply h-415 mr-52 justify-around items-start pt-9 border rounded-xl text-secondary-color flex flex-row -mt-96 
}
.stylelists{
    @apply h-8 flex items-center border rounded-xl text-main-color
}
</style>