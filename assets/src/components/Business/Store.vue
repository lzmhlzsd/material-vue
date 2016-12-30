<template>
    <div>
        <tee-layout class="form-filed">
            <div slot="content">
                <mu-flexbox>
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control"></mu-flexbox-item>

                </mu-flexbox>
                <mu-flexbox class="mt8">
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control"></mu-flexbox-item>
                </mu-flexbox>
                <mu-flexbox class="mt8">
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-lable">
                        字段描述1:
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <input type="text" />
                    </mu-flexbox-item>
                    <mu-flexbox-item class="flex-demo flex-control">
                        <mu-raised-button label="查询" class="demo-raised-button" primary @click="search"/>
                    </mu-flexbox-item>
                </mu-flexbox>
                <div style=" 
    position: absolute;
    margin: auto;
    right: 50%;">
                    <mu-circular-progress style="display: block" :size="60" :strokeWidth="5"/>
                </div>
                
                <mu-table :fixedFooter="fixedFooter" :height="height" :fixedHeader="fixedHeader" :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox" @rowClick="clickitem">
                    <mu-thead slot="header">
                        <mu-tr>
                            <mu-th>姓名</mu-th>
                            <mu-th>手机号</mu-th>
                            <mu-th>上次成交</mu-th>
                            <mu-th>本周笔数</mu-th>
                            <mu-th>本周总额</mu-th>
                        </mu-tr>
                    </mu-thead>
                    <mu-tbody>
                        <mu-tr v-for="item,index in tableData" :selected="item.selected"  >
                            <mu-td>{{item.name}}</mu-td>
                            <mu-td>{{item.phone}}</mu-td>
                            <mu-td>{{item.last_amount}}</mu-td>
                            <mu-td>{{item.week_count}}</mu-td>
                            <mu-td>{{item.week_amount}}</mu-td>
                        </mu-tr>
                    </mu-tbody>
                    
                </mu-table>
                <div style="float: right;">
                    <mu-pagination :total="total" :current="current" :showSizeChanger="showSizeChanger" :pageSizeOption="pageSizeOption" 
                    @pageSizeChange="pageSizeChange">
                    </mu-pagination>
                </div>
                <mu-popup position="right" popupClass="demo-popup-right" :open="rightPopup" @close="close('right')">
                    <mu-raised-button label="关闭弹框" @click="close('right')" primary fullWidth/>
                </mu-popup>
            </div>
        </tee-layout>
    </div>
</template>
<script>
import Menu from './../Menu'
import Layout from './../Layout'
export default {
    data() {
        return {
            tableData: [],
            fixedHeader: true,
            fixedFooter: true,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            showCheckbox: false,
            height: '500px',
            
            total: 1,
            current: 1,
            showSizeChanger: true,
            pageSizeOption: ['15', '20', '25', '30'],

            rightPopup: false
        }
    },
    created() {
         
    },
    components: {
        'tee-menu': Menu,
        'tee-layout': Layout
    },
    methods: {
        search() {
            this.$http.get('/api/cashier')
                      .then((res) => {
                            if (res.body.code == '1000') {
                                this.tableData = res.body.data;
                            } else {

                            }
                        })
                        .catch((res) => {
                            console.log(res)
                        })
        },
        pageSizeChange (newIndex) {

        },
        clickitem(index, item){

            this.rightPopup= true;
        },
        rowHover(){

        },
        close(){
            this.rightPopup= false;
        }
    }
}
</script>
<style lang="stylus">
.mt8
    margin-top 8px
.flex-demo 
    height 40px
    text-align center
    line-height 40px
.flex-lable 
    text-align right
    font-size 1.4rem
    flex 1 !important
.flex-control
    text-align left
    flex 4 !important
.flex-control input
    padding-left 5px
    padding-right 5px
    width 80%   
.form-filed input:focus
    outline none  
    border 1px solid #709de0  
.form-filed input
    height 32px
    font-size 1.4rem
.mu-th 
    font-size 1.4rem
    font-weight 900
    color #303030
.demo-popup-right 
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 375px;
    align-items: center;
    padding: 24px;

</style>
