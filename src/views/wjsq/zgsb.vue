<template>
    <div class="zgsb">
        <!-- 缴获资产及作案工具：-->
        <div>
            <h2><i class="icon-lan"></i> 缴获资产及作案工具：</h2>
            <div class="zgsb-plu zcgj">
                <ul>
                    <!-- 枪支： -->
                    <li>
                        <div class="zcgj-tit">
                            <h3>枪支：</h3>
                            <Button @click="addItems('qz')">+</Button>
                        </div>
                        <ul class="zcgj-item qz-ac" v-for="(item, index) in objParams.zgqzgl" :key="item.id">
                            <li>
                                <label>枪支类型：</label>
                                <Select v-model="item.qzbh">
                                    <Option v-for="(item, ind) in qzlxDict" :value="item.code" :key="`qzlx_${ind}`">{{item.title}}</Option>
                                </Select>
                            </li>
                            <li style="position: relative;top: 9px;">
                                <uploadWs /> 
                                <i @click="delItem(index)">×</i>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>  
        
        <div class="footer" style="text-align: right">
            <Button type="primary" @click="save">保存</Button>
        </div>
    </div>
</template>
<script>
import uploadWs from './uploadWs.vue';
export default {
    components: {
        uploadWs
    },
    data () {
        return {
            js: 0,
            zbfxDict: [],
            zgztDict: [],
            ajgpdbDict: [],
            qzlxDict: [
                {
                    code: '1', title: 'xxx'
                },
                {
                    code: '2', title: 'xx2'
                }
            ],
            jbfsList: [],
            filesList: [],
            objParams: {
                zgfk: { //战果反馈
                    zlid: '',
                    zbfx: '',
                    zt: '',
                    shezzmc: '',
                    Xslymc: '',
                    ajgpdb: '',
                    xsnr: '',
                    jldx: '',
                    jbfs: '',
                    jlje: '',
                    jlrq: '',
                },
                zgzcgl: { // 战果资产
                    zlid: '',
                    xjjck: '',
                    yjzq: '',
                    jhdj: '',
                    qtzj: '',
                },
                zgclgl: [], // 战果车辆
                zgfcgl: [], //战果房屋
                zgqzgl: [], //战果枪支
                attach: [],
            }
        }
    },
    computed: {
        zlid () {
            return this.$route.query.id;
        }
    },
    methods: {
        addItems (type) {
           let obj = { qzbh: '' , id: +new Date() };
           this.objParams.zgqzgl.push(obj);
        },
        delItem (i) {
            this.objParams.zgqzgl.splice(i, 1);
        },
        save () {}
    }
}
</script>
<style lang="less" scoped>
    .zgsb {
        width: 100%;
        height: 100%;
        overflow: auto; 
        font-size: 14px;
        padding: 15px 0;
        background-color: #fff;
        /deep/.ivu-form .ivu-form-item-label {
            font-size: 14px;
        }
        .small-padding {
            /deep/.ivu-form-item-label {
                padding: 2px 12px 10px 0;
            }
            
        }
        .icon-lan {
			display: inline-block;
			background: #2d8cf0;
			width: 5px;
            height: 15px;
            margin: 0 2px 0 16px;
        }
        h2 {
            padding-bottom: 15px;
        }
        .ivu-form-item {
            margin-bottom: 20px;
        }
        &-plu {
            margin: 0 10px;
        }
        .zcgj {
            &-tit {
                display: flex;
                padding: 0 0 15px 40px;
                button {
                    padding: 0px 14px;
                }
            }
            &-item {
                // display: flex;
                // justify-content: space-around;
                margin-bottom: 15px;
                li {
                    width: 30%;
                    display: inline-block;
                    margin-right: 3%;
                    &>label {
                        width: 140px;
                        display: inline-block;
                        height: 32px;
                        line-height: 32px;
                        text-align: right;
                        padding: 0 6px;
                    }
                    &>div {
                        width: calc(~'100% - 140px');
                        float: right;
                    }
                }
                li:last-child {
                    position: relative;
                    i {
                        position: absolute;
                        right: -32px;
                        top: 0px;
                        font-size: 26px;
                        width: 32px;
                        height: 32px;
                        text-align: center;
                        line-height: 32px;
                        cursor: pointer;
                        display: none;
                    }
                }
            }
            .car-ac:hover li>i,.fw-ac:hover li>i,.qz-ac:hover li>i{
                display: inline-block;
            }
            .car-ac {
                .ivu-select-item {
                    display: block;
                }
            }
        }
    }
</style>


