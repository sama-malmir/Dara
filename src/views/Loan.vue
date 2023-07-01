<template>
    <div>
        <div class="relative">
            <div class="flex flex-col justify-around absolute  bottom-415 left-36">
                <RouterLink to="/new-loan">
                    <div class="flex mr-8">
                        <button class="h-9 border w-32 rounded-xl bg-secondary-color text-main-color font-bold">
                            تسهیلات جدید
                        </button>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="style w-3/4">
                    <div class="inline-flex items-start flex-col">
                        <label class="mb-3"> تسهیلات </label>
                        <input type="number" class="stylelists w-44">
                    </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> تعداد قسط </label>
                    <input type="number" class="stylelists w-24">
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> مبلغ کل </label>
                    <input type="number" class="stylelists w-36">
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> مبلغ باقی مانده </label>
                    <input type="number" class="stylelists w-36">
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> توضیحات </label>
                    <input type="number" class="stylelists w-44">
                </div>
                <div class="inline-flex mt-auto mb-4">
                    <button class="ml-4 h-9 border w-16 rounded-xl bg-secondary-color text-main-color font-bold "> حذف
                    </button>
                    <button class="h-9 border w-16 rounded-xl bg-secondary-color text-main-color font-bold "> ویرایش
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.style {
    @apply h-44 mr-52 justify-around items-start pt-9 border rounded-xl text-secondary-color flex flex-row -mt-96
}

.stylelists {
    @apply h-8 flex items-center border rounded-xl text-main-color
}</style>