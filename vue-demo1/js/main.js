/**
 * Created by Administrator on 2018/02/14.
 */

var app = new Vue({

    el:'#app',
    data:{
        name:'',
        age:null,
        sex:null,

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
    }
});