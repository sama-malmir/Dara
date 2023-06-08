<template>
    <div class="relative">
        <div class="flex flex-col justify-around absolute  bottom-415 left-36">
            <RouterLink to="/new-budget">
                <div class="flex mr-8">
                    <button class="h-9 border w-32 rounded-xl bg-secondary-color text-main-color font-bold">
                        بودجه بندی جدید
                    </button>
                </div>
            </RouterLink>
        </div>
    </div>
    <div v-for="data in datas" class="flex justify-center mb-36">
        <div class="style w-2/3">
            <div class="inline-flex items-center flex-col">
                <label class="ml-3">دسته‌بندی</label>
                <div class="stylelists w-36"> {{ getCategoryName(data.category_id) }} </div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label class="ml-12">ماه</label>
                <div class="stylelists w-36"> {{ getMonth(data.month) }} </div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label class="ml-12">سال</label>
                <div class="stylelists w-36"> {{ data.year }} </div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label class="ml-12">مبلغ</label>
                <div class="stylelists w-36"> {{ data.amount.toLocaleString() }} </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datas: [],
            category_id: null,
            month: null,
            year: null,
            amount: null,
            categoris: []
        }
    },
    methods: {
        getBudgets() {
            fetch('http://193.70.91.1:3000/api/v1/wallet/2/budget')
                .then(response => response.text())
                .then(response => JSON.parse(response))
                .then(response => {
                    this.datas = response.data

                });
        },
        getMonth(x) {
            const month = {
                1: 'فروردین', 2: 'اردیبهشت', 3: 'خرداد',
                4: 'تیر', 5: 'مرداد', 6: 'شهریور',
                7: 'مهر', 8: 'آبان', 9: 'آذر',
                10: 'دی', 11: 'بهمن', 12: 'اسفند'
            };
            let esme_mah = month[x]
            return esme_mah
        },
        getCategory() {
            fetch('http://193.70.91.1:3000/api/v1/category')
                .then(response => response.json())
                .then(response => {
                    this.categoris = response.data
                })
        },
        getCategoryName(index) {
            let category_name = null
            this.categoris.forEach((category) => {
                if (category.id == index) {
                    category_name = category.name
                }
            })
            return category_name
        }
    },
    created() {
        this.getBudgets()
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