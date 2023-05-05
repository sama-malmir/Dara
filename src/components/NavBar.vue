<template>
    <div class="text-end relative">
        <div class="bg-secondary-color h-24 -mx-28"></div>
        <div class="Account"> 
            <p class="text-main-color"> کیف پول {{ name }} </p>
            <p class="text-main-color">  {{ wallet.toLocaleString() }} تومان </p>
        </div>
    </div>
</template>
<style scoped>
.Account{
    @apply absolute left-8 top-3 inline-flex  py-1 pr-1 pl-3 w-48 rounded-full ring-2 ring-offset-main-color flex-col justify-between items-center;
}
.AccountAvatar{
    @apply text-main-color;
}
</style>
<script>
export default{
 props:{
   name:String,
   wallet:String
},
methods:{
    formatNumber(){
        
    
    }
}
}
</script>