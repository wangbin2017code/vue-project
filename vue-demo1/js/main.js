/**
 * Created by Administrator on 2018/02/14.
 */

var app = new Vue({

    el:'#app',
    data:{
        name:'',
        age:null,
        sex:null,
        school:'wangbin',
        fruit:'apple',
        password:'1233',
        money:'2541',
        sex1:'female',
        sex2:['male'],
        from:null,
        dest:[],
        role:'hr',
        math:80,
        physics:90,
        english:92,
        article:'窗外风起了，雨开始滴答滴答地落了，那时候的我总是矫情地投向你的怀抱中，或许这是一种爱的习惯，喜欢聆听你心房的声音，感受你手心的温度，在那些有你的阴冷的雨天里，心中似乎多了一丝暖意。回首时光的长廊，曾几何时我与你相识在雨天，我们的爱犹如那朦胧的细雨这般缠绵不已，我多想它一直下个不停，我多想它能够延续，这样我们就还可以继续走下去。',
        //foodList:['hello','hi','你好']
        foodList:[
            {
                name:'葱',
                price:21,
                discount:.6
            },
            {
                name:'姜',
                price:15,
                discount:.2
            },
            {
                name:'蒜',
                price:10
            }
        ],

        url:'http://www.taobo.com',
        img:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3062734635,4183904616&fm=96',
        linkStyle:'btn btn-default',
        isActive:true
    },
    methods:{
        onClick:function(){
            console.log("click ...");
        },
        onEnter:function(){
          console.log("enter...");
        },
        onLeave:function(){
            console.log("leave....");
        },
        onSubmit:function(){
            console.log("submit ...");
        },
        onSubmit1:function(e){
            e.preventDefault();
            console.log("onSubmit1....");
        },
        onKeyUp_enter:function(){
            console.log("keyup ...enter");
        }
    },
    computed:{
        sum:function(){
            return this.math+this.physics+this.english;
        },
        average:function(){
            return Math.round((this.sum/3));
        }
    }
});