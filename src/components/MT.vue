<template>
    <div class="flex justify-center">
        <div class="style">


            <div class="inline-flex items-center flex-col">
                <label>دسته‌بندی</label>
                <div  class="flex items-center mr-14 border my-3 py-3 px-4 rounded-xl h-8 bg-white text-main-color w-48" > {{ dastebandiha }} </div>
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
   
}
}
</script>
<style scoped>
.style{
    @apply  bg-main-color mr-72 h-32   border rounded-xl -mt-435 px-3 pt-8 text-secondary-color flex flex-row
}
.stylelists{
    @apply border my-3 py-3 px-4 rounded-full  inline-flex justify-between
}

</style>