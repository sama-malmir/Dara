<template>
    <div>
        <div class="flex justify-center">
            <div class="style w-2/3">
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> تسهیلات </label>
                    <input v-model="title" type="text" class="stylelists w-44">
                </div>
                <div class="inline-flex items-start flex-col">
                    <div class="inline-flex">
                        <img @click="increseLoan()" class="w-6 h-6 ml-2 bg-white rounded-full" src="../assets/addd.png"
                            alt="add">
                        <label class="mb-3"> تعداد قسط </label>
                    </div>
                    <div v-for="loan in loans" class="inline-flex mb-2">
                        <input v-model="installments[loan - 1].number_of_installment" type="number"
                            class="stylelists w-9 ml-2">
                        <input v-model="installments[loan - 1].amount" type="number" class="stylelists w-36">
                    </div>
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> تاریخ اولین قسط </label>
                    <input v-model="date" type="date" class="stylelists w-36 pl-3">
                </div>
                <div class="flex mt-auto mb-4">
                    <button @click="newLoan()"
                        class="h-9 border w-16 rounded-xl bg-secondary-color text-main-color font-bold ">
                        ثبت
                    </button>
                </div>
            </div>
        </div>
        <div v-if="isSuccess" class="text-secondary-color font-bold text-2xl -mt-32 mr-36 text-center">
            عملیات با موفقیت انجام شد
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loans: 0,
            title: null,
            date: null,
            isSuccess: false,
            installments: []
        }
    },
    methods: {
        increseLoan() {
            this.installments.push({ number_of_installment: null, amount: null })
            this.loans++
        },
        newLoan() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    loan: {
                        title: this.title,
                        due_date: this.date,
                        installments: this.installments
                    }
                })
            };
            fetch('http://193.70.91.1:3000/api/v1/wallet/2/loan', requestOptions)
                .then(response => {
                    if (response.status === 204) {
                        this.isSuccess = true;
                        this.clearPage()
                    }
                })
        },
        clearPage() {
            this.loans = 0
            this.installments = []
            this.title = null
            this.date = null
        },
    },
}
</script>
<style scoped>
.style {
    @apply h-48 mr-52 justify-evenly items-start pt-9 border rounded-xl text-secondary-color flex flex-row -mt-96
}

.stylelists {
    @apply h-8 flex items-center border rounded-xl text-main-color pr-3
}
</style>