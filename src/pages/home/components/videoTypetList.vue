<template>
    <div class="scroll-wrap">
        <div class="img-wrap" @click="drawer = true">
            <img src="../../../assets/icon/yingyong.png" style=" width: 30px;height: 30px;"/>
        </div>
        <!--电影类型开始-->
        <div class="container" @mousedown="startDrag" @mousemove="drag" @mouseup="endDrag" ref="container">
            <div class="items">
                <div v-for="(item, index) in items" v-bind:key="index" class="item">
                    <div :class="active===index ? 'activeClass2' : 'activeClass1'"
                         @click="isClick(index,item.type)">{{item.name}}
                    </div>
                </div>
            </div>
        </div>
        <!--电影类型结束-->
    </div>
</template>

<script>
    export default {
        name: "videoTypetList",
        data(){
            return {
                active: -1,
                activeName: 'second',
                isDragging: false,
                startPosX: null,
                scrollLeft: null,
                items: [{
                    name:"推荐",
                    type:1,
                },{
                    name:"电影",
                    type:2,
                },{
                    name:"电视剧",
                    type:3,
                },{
                    name:"动画",
                    type:4,
                },{
                    name:"推荐",
                    type:1,
                },{
                    name:"电影",
                    type:2,
                },{
                    name:"电视剧",
                    type:3,
                },{
                    name:"动画",
                    type:4,
                },{
                    name:"推荐",
                    type:1,
                },{
                    name:"电影",
                    type:2,
                },{
                    name:"电视剧",
                    type:3,
                },{
                    name:"动画",
                    type:4,
                },{
                    name:"推荐",
                    type:1,
                },{
                    name:"电影",
                    type:2,
                },{
                    name:"电视剧",
                    type:3,
                },{
                    name:"动画",
                    type:4,
                },{
                    name:"推荐",
                    type:1,
                },{
                    name:"电影",
                    type:2,
                },{
                    name:"电视剧",
                    type:3,
                },{
                    name:"动画",
                    type:4,
                },
                ]
            }

        },
        methods: {
            // 传入视频类型的type(类型id) 来获取相应视频
            isClick(index,type) {
                console.log(index)
                console.log(type)
                this.active = index
                axios.get('/api/v1/videos/hot').then(this.getHomeHotsSucc)
                console.log(typeof(this.avtive))
            },

            startDrag(event) {
                // console.log("点击了.....................")
                this.isDragging = true
                this.startPosX = event.pageX - this.$refs.container.offsetLeft
                this.scrollLeft = this.$refs.container.scrollLeft
            },
            drag(event) {
                if (!this.isDragging) return
                const currentPosX = event.pageX - this.$refs.container.offsetLeft
                const diff = currentPosX - this.startPosX
                this.$refs.container.scrollLeft = this.scrollLeft - diff
            },
            endDrag(e) {
                // console.log(e)
                this.isDragging = false
            },
        }
    }
</script>

<style scoped>
    .container {
        height: 40px;
        width: 100%;
        overflow-x: hidden;
        display: flex;
        align-items: center;
        margin-left: 10px;

    }

    .items {
        display: flex;
        flex-wrap: nowrap;
        user-select: none;


    }

    .item {
        /*width: ;*/
        margin-right: 15px;
        white-space: nowrap;
        text-align: center;
    }

    .img-wrap {
        padding: 5px;

    }

    .scroll-wrap {
        display: flex;
        flex-direction: row;
    }

    .activeClass1 {
        user-select: none;
        cursor: pointer;
    }

    .activeClass2 {
        /*width: 60px;*/
        /*height: 30px;*/
        color:skyblue ;
        user-select: none;
        cursor: pointer;
        /*background-color: skyblue;*/
    }
</style>