<template>
    <div>
        <div class="header">
            <div class="top">
                <div class="w-headbar-logo">

                    <img src="./../../../common/images/w-md-logo.png" alt="">
                </div>
                <div class="title">
                    <img src="./../../../common/images/w-logo-title.png" alt="用大数据洞察传播">
                </div>
                <div class="user">
                    <ul>
                        <li @click="$router.push('/login')">登录/注册</li>
                        <li>
                            <Dropdown @on-click="menuClick">
                                <a href="javascript:void(0)">
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                                    <span style="padding: 0 1rem;">木江湖</span>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="gout">退出</DropdownItem>
                                    <DropdownItem name="mine">个人中心</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li class="select">热点发现</li>
                    <li>案例库</li>
                    <li>大数据报告</li>
                    <li>信息监测</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{

            }
        },
        mounted() {
            let {id} = this.$route.params;
            // eslint-disable-next-line no-console
            console.log(id);
        },
        methods: {

        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
     .header {
        position absolute
        width: 100%
        left: 0
        top: 0
        height: 11.6rem
         background-color: rgba(28, 38, 84, 1);
        transition all .3s
        cursor pointer

        > .top {
            position relative
            width: 100%
            height: 5.7rem
            border-bottom: .1rem solid rgba(255, 255, 255, 0.16);
            display flex

            > .title {
                display flex
                align-items center
                border-left: .1rem solid rgba(255, 255, 255, 0.16);
                padding: 0 3rem

                > img {

                }
            }

            > .user {
                position absolute
                right: 0
                top: 0
                height: 100%
                padding: 0 2rem

                > ul {
                    display flex
                    height: 100%

                    > li {
                        height: 100%
                        padding: 0 2rem
                        display flex
                        align-items center
                        justify-content center
                        color white

                        &:hover {
                            color #ff890f
                        }
                    }
                }
            }

            > .w-headbar-logo {
                padding: 1.3rem 3rem
                display: inline-block;

                > img {
                    width: 9.6rem
                }
            }
        }

        > .bottom {
            width: 100%
            height: 5.7rem
            border-bottom: .1rem solid rgba(255, 255, 255, 0.16);
            padding: 0 2rem
            overflow: hidden;

            > ul {
                display flex
                height: 100%

                > li {
                    height: 100%
                    padding: 0 2rem
                    display flex
                    align-items center
                    justify-content center
                    color white

                    &:hover, &.select {
                        color #ff890f
                    }
                }
            }
        }
    }
</style>
