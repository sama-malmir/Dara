<template>
    <div class="flex justify-center">
        <div class="style">
            <div class="inline-flex items-center">
                <label class="ml-6">دسته‌بندی</label>
                <select v-model="dastebandi" name="category" class="my-3 px-3 w-52 h-8 rounded-xl text-black">
                    <option class="text-black" v-for="category in categoris" :value="category.id" :key="category.id">{{
                        category.name }}</option>
                </select>
            </div>
            <div class="inline-flex items-center">
                <label>نوع تراکنش</label>
                <select v-model="transactionType" class="mr-3 my-3 px-4 rounded-xl h-8 w-52 text-black">
                    <option value="depoist">واریز</option>
                    <option value="withdraw">برداشت</option>
                </select>
            </div>

            <div class="inline-flex items-center">
                <label>مبلغ</label>
                <input v-model="mablagh" class="mr-14 border my-3 py-3 px-4 rounded-xl h-8 text-slate-950" type="number">
            </div>
            <div class="inline-flex items-start">
                <label class="mt-3">توضیحات</label>
                <input v-model="tozihat" class="mr-6 border my-3 py-3 px-4 rounded-xl h-52 text-slate-950" type="text">
            </div>
            <div class="inline-flex justify-end">
                <button class="h-9 border w-16 rounded-xl  bg-secondary-color text-main-color font-bold mt-2"
                    @click="newTransaction()">ثبت</button>
            </div>
        </div>
    </div>
    <div v-if="isSuccess" class="text-secondary-color font-bold text-2xl mt-11 mr-96">
        عملیات با موفقیت انجام شد
    </div>
</template>
<script>
export default {
    data() {
        return {
            categoris: [],
            mablagh: null,
            tozihat: null,
            dastebandi: null,
            isSuccess: false,
            error: false,
            transactionType: 'withdraw',
        }
    },
    methods: {
        getCategory() {
            fetch('http://193.70.91.1:3000/api/v1/category')
                .then(response => response.text())
                .then(response => JSON.parse(response))
                .then(response => {
                    this.categoris = response.data

                }
                )
        },
        newTransaction() {
            if(this.transactionType === 'withdraw'){
                this.mablagh = -this.mablagh
            }
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: this.mablagh, description: this.tozihat, category_id: this.dastebandi })
            };
            fetch('http://193.70.91.1:3000/api/v1/wallet/2/wallet_transaction', requestOptions)
                .then(response => {
                    if (response.status === 204) {
                        this.isSuccess = true;

                    }
                })
        },
        withdrawAndDeposit() {
            if (this.amount >= 1) {
                this.accountDetails = this.deposit
            } else {
                if (this.amount <= 0) {
                    this.accountDetails = this.withdraw

                }
            }

        }
    },

    created() {
        this.getCategory()
    }
}

</script>
<style scoped>
.style {
    @apply bg-main-color w-1/2 h-500 border rounded-xl -mt-435 px-6 pt-8 text-secondary-color flex flex-col
}

.stylelists {
    @apply border my-3 py-3 px-4 rounded-full inline-flex justify-between
}</style>