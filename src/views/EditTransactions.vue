<template>
    <div class="flex justify-center">
        <div class="style">
            <div class="inline-flex items-center">
                <label class="ml-6">دسته‌بندی <span class="text-red-600 text-2xl">*</span></label>
                <select v-model="dastebandi" name="category" class="-mr-1 my-3 px-3 w-56 h-8 rounded-xl text-black">
                    <option v-for="category in categoris" :value="category.id" class="text-black">
                        {{ category.name }}</option>
                </select>
                <p v-if="isWrongCategory">
                    <b class="text-red-600 text-lg mr-5">لطفا دسته‌بندی را وارد کنید</b>
                </p>
            </div>
            <div class="inline-flex items-center">
                <label>نوع تراکنش <span class="text-red-600 text-2xl">*</span></label>
                <select v-model="transactionType" class="mr-3 my-3 px-4 rounded-xl h-8 w-56 text-black">
                    <option value="depoist">واریز</option>
                    <option value="withdraw">برداشت</option>
                </select>
            </div>
            <div class="inline-flex items-center">
                <label>مبلغ <span class="text-red-600 text-2xl">*</span></label>
                <div class="flex flex-col">
                    <input @change="isWrongAmount = false; isSuccess = false" type="number" dir="ltr" v-model="mablagh"
                        :class="[isWrongAmount == true ? 'border-red-600 border-2' : 'border-gray-600']"
                        class="mr-14 border my-3 py-3 px-4 rounded-xl h-8 text-slate-950 w-56">
                    <div class="ml-4" dir="ltr" v-if="mablagh > 0">{{ mablagh.toLocaleString() }}</div>
                </div>
                <p v-if="isWrongAmount">
                    <b class="text-red-600 text-lg mr-5">لطفا مبلغ را وارد کنید</b>
                </p>
            </div>
            <div class="inline-flex items-start">
                <label class="mt-3">توضیحات</label>
                <textarea v-model="tozihat" class="mr-9 border my-3 py-3 px-4 rounded-xl h-52 text-slate-950 w-56"
                    type="text" cols="23" rows="5"></textarea>
            </div>
            <div class="inline-flex justify-end">
                <button @click="editData()" class="h-9 border w-16 rounded-xl bg-secondary-color text-main-color font-bold -mt-7">
                    ویرایش
                </button>
            </div>
        </div>
    </div>
    <div v-if="isSuccess" class="text-green-500 font-bold text-2xl mt-11 text-center">
        ویرایش با موفقیت انجام شد
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
            transactionType: null,
            isSuccess: false,
            transactionId: null
           
        }
    },
    methods: {
        getData() {
            fetch('http://193.70.91.1:3000/api/v1/wallet_transaction/' + this.$route.params.transactionId)
                .then(response => response.text())
                .then(response => JSON.parse(response))
                .then(response => {
                    this.tozihat = response.data.description
                    this.mablagh = response.data.amount
                    this.dastebandi = response.data.category_id
                    this.selectTransactionType()
                });
        },
        getCategory() {
            fetch('http://193.70.91.1:3000/api/v1/category')
                .then(response => response.text())
                .then(response => JSON.parse(response))
                .then(response => {
                    this.categoris = response.data

                })
        },
        selectTransactionType() {
            if (this.mablagh <= 0) {
                this.transactionType = 'withdraw'
                this.mablagh = -this.mablagh
            } else {
                this.transactionType = 'depoist'
            }
        },
        editData() {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: this.mablagh, description: this.tozihat, category_id: this.dastebandi })
            };
            fetch('http://193.70.91.1:3000/api/v1/wallet_transaction/' + this.$route.params.transactionId, requestOptions)
                .then(response => {
                    if (response.status === 204) {
                        this.isSuccess = true;
                        this.$emit('updateWallet')
                    }
                   
                })
        },
    },
    created() {
        this.getCategory()
        this.getData()

    }
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