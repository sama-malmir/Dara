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
                    @click="deleteTransaction()">حذف</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        
    },
    props: {
        dastebandiha: Object,
        mablagh: String,
        tozihat: String,
        tarikh: String,

    },
    methods: {
       
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