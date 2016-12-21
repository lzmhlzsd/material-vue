<template>
    <div>
        <tee-layout>
            <div slot="content">
                Cashier
                <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox">
                    <mu-thead slot="header">
                        <mu-tr>
                            <mu-th tooltip="ID">ID</mu-th>
                            <mu-th tooltip="名称">Name</mu-th>
                            <mu-th tooltip="状态">Status</mu-th>
                        </mu-tr>
                    </mu-thead>
                    <mu-tbody>
                        <mu-tr v-for="item,index in tableData" :selected="item.selected">
                            <mu-td>{{index + 1}}</mu-td>
                            <mu-td>{{item.name}}</mu-td>
                            <mu-td>{{item.status}}</mu-td>
                        </mu-tr>
                    </mu-tbody>
                    <!-- <mu-tfoot slot="footer">
                        <mu-tr>
                            <mu-td>ID</mu-td>
                            <mu-td>Name</mu-td>
                            <mu-td>Status</mu-td>
                        </mu-tr>
                    </mu-tfoot> -->
                </mu-table>
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
            multiSelectable: true,
            enableSelectAll: false,
            showCheckbox: true
        }
    },
    created() {
    	 this.$http.get('/api/cashier')
        .then((res) => {
            if (res.body.code == '1004') {
                this.tableData = res.body.data;
            } else {

            }
        })
        .catch((res) => {
            console.log(res)
        })
    },
    components: {
        'tee-menu': Menu,
        'tee-layout': Layout
    }
}
</script>
<style lang="stylus">
	.demo-table-settings
		width: 200px;
		overflow: hidden;
		margin: 20px auto 0px;

</style>
