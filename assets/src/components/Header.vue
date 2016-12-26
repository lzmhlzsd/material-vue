<template>
    <div class="header" v-show="!login">
        <mu-row>
            <mu-col width="50" tablet="30" desktop="50" style="padding: 1rem;">
                <img src="./../img/logo.png" style="float: left;margin-right: 1rem;" />
                <div style="line-height: 20px;float: left;">
                    <span class="title-sub">天工收银</span>
                    <br/>
                    <span class="title-main">上海商派网络科技有限公司</span>
                </div>
            </mu-col>
            <mu-col width="50" tablet="20" desktop="50">
                <mu-icon-button ref="button" @click="toggle" style="width: 5.8rem;height: 5.8rem;float: right;margin-right: 1rem;">
                    <img src="./../img/avatar.png" style="width: 4rem;
                        border-radius: 2rem;
                        border: 1px solid #cdcdcd;" />
                </mu-icon-button>
                <mu-popover :trigger="trigger" :open="open" @close="handleClose">
                    <mu-menu>
                        <mu-menu-item title="个人信息" @click="" />
                        <mu-menu-item title="退出" @click="logout" />
                    </mu-menu>
                </mu-popover>
            </mu-col>
        </mu-row>
        <mu-dialog :open="dialog" title="提示" @close="close" dialogClass="logout-dialog">
            确认退出系统？
            <mu-flat-button slot="actions" @click="close" primary label="取消" />
            <mu-flat-button slot="actions" primary @click="ok" label="确定" />
        </mu-dialog>
    </div>
</template>
<script>
import {
    mapGetters
} from 'vuex'
export default {
    name: 'App',
    data() {
        return {
            open: false,
            trigger: null,
            dialog: false
        }
    },
    mounted() {
        this.trigger = this.$refs.button.$el
    },
    computed: {
        ...mapGetters([
            'login'
        ])
    },
    methods: {
        toggle() {
            console.log('123')
                //this.open = !this.open
            this.open = true;
        },
        handleClose(e) {
            this.open = false
        },
        logout() {
            this.open = false
            this.dialog = true
        },
        close() {
            this.dialog = false

        },
        ok() {
            this.dialog = false
            this.$store.dispatch('delBaseInfo')
            const self = this
            setTimeout(function() {
                self.$router.replace({
                    path: '/'
                });
            }, 200)
        }
    }
}
</script>
<style lang="stylus">
	.logout-dialog{
		width 500px
	}
</style>
