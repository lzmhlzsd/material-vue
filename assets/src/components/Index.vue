<template>
    <tee-layout>
        <div slot="content">
            index
            <div class="demo-grid">
                <mu-row gutter>
                    <mu-col desktop="100">col-100
                        <br/>tablet-50
                        <br/>desktop-100
                    </mu-col>
                </mu-row>
                <mu-row gutter>
                    <mu-col width="50" tablet="30" desktop="33">col-50
                        <br/>tablet-30
                        <br/>desktop-25</mu-col>
                    <mu-col width="50" tablet="30" desktop="33">col-50
                        <br/>tablet-30
                        <br/>desktop-25</mu-col>
                    <mu-col width="50" tablet="20" desktop="33">col-50
                        <br/>tablet-20
                        <br/>desktop-25</mu-col>
                </mu-row>
            </div>
        </div>
    </tee-layout>
</template>
<script>
import Menu from './Menu'
import Layout from './Layout'
export default {
    data() {
            return {
                firstname: 'lkj'
            }
        },
        created() {

        },
        watch: {
            'firstname': function() {
                alert(1231321)
            }
        },
        methods: {
            fetchData() {
                alert(12)
            }
        },
        components: {
            'tee-menu': Menu,
            'tee-layout': Layout
        }
}
</script>
<style lang="stylus">
	.demo-grid div[class*="col-"] 
		background: #fff;
		text-align: center;
		color: #000;
		border: 1px solid #ddd;
		padding: 8px;
		margin-bottom: 8px;

</style>
