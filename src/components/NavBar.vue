<template>
    <div class="text-end relative">
        <div class="bg-secondary-color h-24 -mx-28"></div>
        <div class="Account "> 
            <p> سماء مالمیر </p>
            <div class="AccountAvatar"></div>
        </div>
    </div>
</template>
<script>
export default{
    
}
</script>
<style scoped>
.Account{
    @apply absolute left-8 top-3 inline-flex  py-1 pr-1 pl-3 w-48 rounded-full ring-2 ring-offset-main-color flex-row-reverse justify-between items-center;
}
.AccountAvatar{
    @apply w-14 h-14 bg-gray-400 rounded-full;
}
</style>