<template>
    <div class="mb-36" v-for="transaction in transactions">
      <FinancialTransaction  @update-wallet="doClick()" :id="transaction.id"  :mablagh="transaction.amount" :tozihat="transaction.description" :tarikh="transaction.at_date" :dastebandiha="transaction.category.name" />
    </div>
  </template>
  <script >
  import FinancialTransaction from '../components/FinancialTransaction.vue'
  export default {
    data(){
        return{
           transactions: {}
        };
    },
   components:{
    FinancialTransaction,
     },  
   methods:{
    getMT(){
      fetch('http://193.70.91.1:3000/api/v1/wallet/2/wallet_transaction')
        .then(responseMT=>responseMT.json())
        .then(responseMT=>{
            this.transactions = responseMT.data
        });
     },
     doClick() {
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
