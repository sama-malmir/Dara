<template>
  <div class="relative">
   <div v-if="isSuccess" class="text-green-400 font-bold text-2xl text-center absolute left-36 -top-478">
                    عملیات با موفقیت انجام شد
                </div>
    <div class="mb-36" v-for="transaction in transactions">
      <FinancialTransaction @update-wallet="afterDelete()" :id="transaction.id" :mablagh="transaction.amount" :tozihat="transaction.description" :tarikh="transaction.at_date" :dastebandiha="transaction.category.name" />
    </div>
  </div>
  </template>
  <script >
  import FinancialTransaction from '../components/FinancialTransaction.vue'
  export default {
    data(){
        return{
          transactions: {},
          isSuccess:false,
        };
    },
   components:{
    FinancialTransaction,
     },  
   methods:{
    getMT(){
      fetch('http://193.70.91.1:3221/api/v1/wallet/2/wallet_transaction')
        .then(responseMT=>responseMT.json())
        .then(responseMT=>{
            this.transactions = responseMT.data
        });
     },
     afterDelete(){
      this.isSuccess=true
      this.getMT()
      this.$emit('updateWallet')
     }
    
   },
   created(){
        this.getMT()
    },
  };
  </script>
  
  <style>
  
  
  </style>
