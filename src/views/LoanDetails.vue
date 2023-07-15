<template>
    <div>
        <div v-for="data in installments" class="flex justify-center">
            <div  class="style w-3/4">
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> مبلغ قسط </label>
                    <div class="stylelists w-36"> {{ data.amount }} </div>
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3"> وضعیت </label>
                    <div class="stylelists w-36"> {{ data.status }} </div>
                </div>
                <div class="inline-flex items-start flex-col">
                    <label class="mb-3">  تاریخ سررسید </label>
                    <div class="stylelists w-36"> {{ data.due_date }} </div>
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
data(){
    return{
        installments:[],
        id:null,
        loan_id:null,
        amount:null,
        status:null,
        due_date:null,
        loanId:null
    }
},
methods:{
    getData(){
        fetch('http://193.70.91.1:3000/api/v1/loan/'+ this.$route.params.loanId +'/installment')
        .then(response => response.json())
        .then(response =>{
            this.installments = response.data
        });
    },
},
created(){
    this.getData()
}

}
</script>
<style scoped>
.style{
    @apply h-44 mr-52 justify-around items-start pt-9 border rounded-xl text-secondary-color flex flex-row -mt-96
}
.stylelists{
    @apply h-8 flex items-center border rounded-xl text-main-color pr-3 bg-white
}
</style>