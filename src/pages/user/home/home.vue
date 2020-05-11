<template>
    <div class="home">
        <!-- 背景粒子特效  -->
        <vue-particles
                color="#3d9bf4"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="star"
                :particleSize="4"
                linesColor="#3d9bf4"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="remove"
        >
        </vue-particles>
        <!--我是头部-->
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
        <!--我是网络传播热度指数-->
        <div class="zhishu">
            <h2>网络传播热度指数</h2>
        </div>
        <!--分类-->
        <div class="kind-box">
            <ul>
                <li class="select">热门事件</li>
                <li>重大事件</li>
            </ul>
        </div>
        <!--其他分类-->
        <div class="other-kind">
            <ul>
                <li style="color: white">热点类型：</li>
                <li v-for="(item, key) in otherArr" :key="item" :class="key === 0 ? 'select' : ''">{{item}}</li>
            </ul>
            <!--主图-->
            <section class="content">
                <div class="left">
                    <highcharts :options="chartOptions"></highcharts>
                </div>
                <div class="right">
                    <ul class="top">
                        <li>
                            <Tag color="#ff890f">全部</Tag>
                        </li>
                        <li @click="changeEvent(1)" :class="showCart === 1 ? 'select' : ''">数据概况</li>
                        <li :class="showCart === 2 ? 'select' : ''" @click="changeEvent(2)">热门事件Top5</li>
                        <li :class="showCart === 3 ? 'select' : ''" @click="changeEvent(3)">变化最大Top5</li>
                    </ul>
                    <div v-if="showCart === 1" class="dataAll">
                        数据概况
                    </div>
                    <div v-else-if="showCart === 2" class="hotData">
                        热门事件Top5
                    </div>
                    <div v-else class="changeData">
                        变化最大Top5
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {fetchData} from "../../../api";
    // eslint-disable-next-line no-unused-vars
    import {getRandomIntInclusive} from "../../../common/js/myFun";
    import {Chart} from 'highcharts-vue'

    export default {
        name: "home",
        data() {
            return {
                showCart: 1,
                otherArr: ['全部', '经济', '国际', '法治', '教育', '商业', '民生', '医疗', '交通', '文娱体育'],
                arrList: [],
                chartOptions: {
                    title: {
                        text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
                    },
                    subtitle: {
                        text: '数据来源：thesolarfoundation.com'
                    },
                    yAxis: {
                        title: {
                            text: '就业人数'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },
                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 2010
                        }
                    },
                    series: [],
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }
                },
                timer: null,
                chart: null,
            }
        },
        components: {
            highcharts: Chart
        },
        // 页面加载完毕后执行的函数
        mounted() {
            this.timer = setInterval(() => {
                this.chartOptions.series.length > 5 && this.chartOptions.series.shift();
                this.chartOptions.series.push({
                    name: `${getRandomIntInclusive(0, 5)}工人`,
                    data: [getRandomIntInclusive(40000, 150000),getRandomIntInclusive(40000, 150000),getRandomIntInclusive(40000, 150000),getRandomIntInclusive(40000, 150000),getRandomIntInclusive(40000, 150000),getRandomIntInclusive(40000, 150000),getRandomIntInclusive(40000, 150000),getRandomIntInclusive(40000, 150000)]
                })
            }, 1000);
        },
        destroyed() {
            clearInterval(this.timer)
        },
        // 所有方法都写在此处
        methods: {
            async fetchArrList() {
                // eslint-disable-next-line no-undef
                let data = await fetchData({
                    date: new Date(),
                    count: 3,
                });
                if (data.code === 200) {
                    this.arrList = data.arrList;
                    // eslint-disable-next-line no-empty
                } else {

                }
            },
            menuClick(name) {
                // eslint-disable-next-line no-console
                console.log(name);
            },
            changeEvent(showCart) {
                this.showCart = showCart;
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .home {
        position relative
        width: 100%
        height: 200rem
        background-color: #100B2A
        color white

        > .other-kind {
            position absolute
            width: 100%
            left: 0
            top: 33rem

            > .content {
                width: 100%
                padding: 2rem
                display flex

                > .left {
                    flex 6
                    padding 1.5rem 1rem
                }

                > .right {
                    flex 4
                    max-width 46rem
                    min-width 46rem
                    background-color: seagreen
                    padding .5rem 1rem
                    border: .1rem solid #0F6ACF;
                    position: relative;
                    background: rgba(1, 34, 116, 0.2);

                    > ul.top {
                        width: 100%
                        display flex
                        height: 6rem
                        align-items center

                        > li {
                            padding: 0 2rem
                            height: 100%
                            display flex
                            align-items center
                            justify-content center
                            cursor pointer

                            &:hover, &.select {
                                color #ff890f
                            }
                        }
                    }
                }
            }

            > ul {
                width: 100%
                height: 5.44rem
                display flex
                align-items center
                border-top: .1rem solid #2D3671;
                border-bottom: .1rem solid #2D3671;
                background: #0E1744

                > li {
                    display flex
                    justify-content center
                    align-items center
                    height: 100%
                    cursor pointer
                    transition all .3s
                    padding: 0 2rem
                    font-size: 1.6rem
                    color #a4abc6

                    &.select, &:hover {
                        color: #ff890f;
                    }
                }
            }
        }

        > .kind-box {
            position absolute
            width: 100%
            left: 0
            top: 25rem
            height: 5.8rem
            background-color: rgba(22, 20, 63, 0.5)

            > ul {
                width: 100%
                height: 100%
                display flex
                justify-content center
                align-items center

                > li {
                    display flex
                    justify-content center
                    align-items center
                    width: 20rem
                    height: 100%
                    cursor pointer
                    transition all .3s
                    font-size: 1.6rem
                    color #a4abc6

                    &.select {
                        color: #ffffff;
                        background: #111447;
                    }

                    &:hover {
                        background: rgba(17, 20, 71, 0.8);
                    }
                }
            }
        }

        > .zhishu {
            position absolute
            width: 100%
            left: 0
            top: 16rem
            display flex
            align-items center
            justify-content center

            > h2 {
                font-size: 2.8rem
                color: #ffffff;
                text-align: center;
                font-weight: 400;
            }
        }

        > .header {
            position absolute
            width: 100%
            left: 0
            top: 0
            height: 11.6rem
            background-color: transparent
            transition all .3s
            cursor pointer

            &:hover {
                background-color: rgba(28, 38, 84, 0.5);
            }

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
    }
</style>
