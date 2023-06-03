<template>
    <div class="flex justify-center">
        <div class="style w-2/3">
            <div class="inline-flex items-center flex-col">
                <label class="-mr-28">دسته‌بندی</label>
                <select v-model="category" name="category" class="mr-3 my-3  w-56 h-8 rounded-xl text-black">
                    <option class="text-black" v-for="category in categoris" :value="category.id" :key="category.id">
                        {{ category.name }}</option>
                </select>
            </div>
            <div class="inline-flex items-center flex-col">
                <label class="-mr-7">مبلغ</label>
                <input v-model="amount" type="number" name="amount" class="stylelists w-36" dir="ltr">
            </div>
            <div class="inline-flex justify-center mr-auto mt-7 ml-5">
                <button @click="newBudget()"
                    class="h-9 border w-16 rounded-xl bg-secondary-color text-main-color font-bold ">
                    ثبت
                </button>
            </div>
        </div>
    </div>
    <div class="relative">
        <div class=" absolute left-36 bottom-415">
            <h1 class="text-xl text-secondary-color"> این بودجه برای ماه خرداد سال ۱۴۰۲ می باشد </h1>
        </div>
    </div>
    <div v-if="isSuccess" class="text-secondary-color font-bold text-2xl -mt-48 text-center">
        عملیات با موفقیت انجام شد
    </div>
</template>
<script>
export default {
    data() {
        return {
            category: null,
            categoris: [],
            amount: null,
            isSuccess: false,
            
        }
    },
    methods: {
        getCategory() {
            fetch('http://193.70.91.1:3000/api/v1/category')
                .then(response => response.json())
                .then(response => {
                    this.categoris = response.data
                }
                )
        },
        newBudget() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ category_id: this.category, amount: this.amount, year: 1402, month: 3 })
            };
            fetch('http://193.70.91.1:3000/api/v1/wallet/2/budget', requestOptions)
                .then(response => {
                    if (response.status === 204) {
                        this.isSuccess = true

                    }
                })
        },
    
    },
    created() {
        this.getCategory()
    }
}
</script>
<style scoped>
.style {
    @apply mr-52 h-32 border rounded-xl -mt-96 px-1 pt-4 text-secondary-color flex flex-row
}

.stylelists {
    @apply flex items-center mr-14 border my-3 py-3 px-4 rounded-xl h-8 bg-white text-main-color
}
</style>