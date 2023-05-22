<template>
    <div class="flex justify-center">
        <div class="style w-3/4" :class="[mablagh > 0 ? 'bg-sky-700' : 'bg-yellow-600']">
            <div class="inline-flex items-center flex-col">
                <label>دسته‌بندی</label>
                <div class="stylelists w-32"> {{ dastebandiha }} </div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label>نوع تراکنش</label>
                <div class="stylelists w-24" type="text" v-if="mablagh < 0">برداشت</div>
                <div class="stylelists w-24" type="text" v-if="mablagh > 0">واریز</div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label>تاریخ</label>
                <div class="stylelists w-40"> {{ tarikh }} </div>
            </div>
            <div class="inline-flex items-center flex-col ">
                <label>مبلغ</label>
                <div class="stylelists w-36"> {{ Math.abs(mablagh).toLocaleString() }} </div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label>توضیحات</label>
                <div class="stylelists w-40"> {{ tozihat }}</div>
            </div>
            <div class="flex items-center mr-8">
                <button class="h-8 border w-16 rounded-xl bg-secondary-color text-main-color font-bold mt-10"
                    @click="deleteTransaction(id)">حذف</button>
            </div>
            <div class="inline-flex items-start flex-col">
                <div v-if="Errors" class="text-red-400 font-bold text-2xl  text-center">
                    عملیات با خطا روبرو شد
                </div>
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
    props: {
        dastebandiha: Object,
        mablagh: String,
        tozihat: String,
        tarikh: String,
        id: Number,


    },
    methods: {
        deleteTransaction(transactionId) {
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            };
            fetch('http://193.70.91.1:3000/api/v1/wallet_transaction/' + transactionId, requestOptions)
                .then(response => {
                    if (response.status === 204) {
                        this.$emit('updateWallet')
                        this.$emit('delete')

                    }
                })
        },
       doClick(){

       }
    },


}

</script>
<style scoped>
.style {
    @apply mr-52 h-32 border rounded-xl -mt-435 px-1 pt-4 text-secondary-color flex flex-row
}

.stylelists {
    @apply flex items-center mr-14 border my-3 py-3 px-4 rounded-xl h-8 bg-white text-main-color
}
</style>