<template>
  <div>
    <Table border :columns="columns7" :data="data6"></Table>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';
export default {
  data () {
          return {
              columns7: [
                  {
                      title: 'Name',
                      key: 'name',
                      render: (h, params) => {
                          return h('div', [
                              h('Icon', {
                                  props: {
                                      type: 'person'
                                  }
                              }),
                              h('strong', params.row.name)
                          ]);
                      }
                  },
                  {
                      title: 'Age',
                      key: 'age'
                  },
                  {
                      title: 'Address',
                      key: 'address'
                  },
                  {
                      title: 'Action',
                      key: 'action',
                      width: 150,
                      align: 'center',
                      render: (h, params) => {
                          return h('div', [
                              h('Button', {
                                  props: {
                                      type: 'primary',
                                      size: 'small'
                                  },
                                  style: {
                                      marginRight: '5px'
                                  },
                                  on: {
                                      click: () => {
                                          this.show(params.index)
                                      }
                                  }
                              }, 'View'),
                              h('Button', {
                                  props: {
                                      type: 'error',
                                      size: 'small'
                                  },
                                  on: {
                                      click: () => {
                                          this.remove(params.index)
                                      }
                                  }
                              }, 'Delete')
                          ]);
                      }
                  }
              ],
              data6: [
                  {
                      name: 'John Brown',
                      age: 18,
                      address: 'New York No. 1 Lake Park'
                  },
                  {
                      name: 'Jim Green',
                      age: 24,
                      address: 'London No. 1 Lake Park'
                  },
                  {
                      name: 'Joe Black',
                      age: 30,
                      address: 'Sydney No. 1 Lake Park'
                  },
                  {
                      name: 'Jon Snow',
                      age: 26,
                      address: 'Ottawa No. 2 Lake Park'
                  }
              ]
          }
      },
      mounted () {
           new Swiper ('.swiper-container', {
        
            loop: true, // 循环模式选项
            
            slidesPerView: 3, //         
            // 如果需要分页器
            pagination: {
             el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        
        })  
      },
      methods: {
          show (index) {
              this.$Modal.info({
                  title: 'User Info',
                  content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
              })
          },
          remove (index) {
              this.data6.splice(index, 1);
          }
      }
}
</script>

<style>
    .swiper-container {
        width: 600px;
        height: 300px;
        margin: 0 auto;
        
    }  
    .swiper-slide {
        background: burlywood;
        border:1px solid #ddd;
    }
</style>
