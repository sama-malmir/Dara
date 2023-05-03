<template>
    <div class="flex justify-center">
        <div class="style w-3/4">
            <div class="inline-flex items-center flex-col">
                <label>دسته‌بندی</label>
                <div  class="flex items-center mr-14 border my-3 py-3 px-4 rounded-xl h-8 bg-white text-main-color w-40" > {{ dastebandiha }} </div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label>تاریخ</label>
                <div  class=" flex items-center mr-14 border my-3 py-3 px-4 rounded-xl h-8 bg-white text-main-color w-48"> {{ tarikh }} </div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label>مبلغ</label>
                <div  class="flex items-center mr-14 border my-3 py-3 px-4 rounded-xl h-8 bg-white text-main-color w-48"> {{ mablagh }} </div>
            </div>
            <div class="inline-flex items-center flex-col">
                <label >توضیحات</label>
                <div class="flex items-center mr-14 border my-3 py-3 px-4 rounded-xl h-8 bg-white text-main-color w-48"> {{ tozihat }}</div>
            </div>  
            <div class=" flex items-center mr-8">
                <button class="h-8 border w-16 rounded-xl  bg-secondary-color text-main-color font-bold mt-10" @click="deleteTransaction()">حذف</button>

            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
    return {
        
    }
},
props:{
    dastebandiha:Object,
    mablagh:String,
    tozihat:String,
    tarikh:String,
},
methods:{
    deleteTransaction(){

        
    }
}
}
</script>
<style scoped>
.style{
    @apply  bg-main-color mr-52 h-32   border rounded-xl -mt-435 px-1 pt-4 text-secondary-color flex flex-row
}
.stylelists{
    @apply border my-3 py-3 px-4 rounded-full  inline-flex justify-around
}

</style>