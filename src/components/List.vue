<template>
    <div>
        <div class=" pt-10 gap-2">
           <RouterLink to="/financial-transactions" >
                <div class="listStyle">
                    تراکنش‌های مالی
                </div>
            </RouterLink>
            <RouterLink to="/new-transaction" >
                <div class="listStyle">
                    تراکنش جدید
                </div>
            </RouterLink>
            <RouterLink to="/budgets" >
                <div class="listStyle">
                    بودجه بندی 
                </div>
            </RouterLink>
            <div class="listStyle">
                لیست تراکنش ها 
            </div>
            <div class="listStyle">
                لیست تراکنش ها 
            </div>
            <div class="listStyle">
                لیست تراکنش ها 
            </div>
            <div class="listStyle">
                لیست تراکنش ها 
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>

    .listStyle{
        @apply text-secondary-color border my-3 py-3 px-4 rounded-full w-40;
    }

</style>