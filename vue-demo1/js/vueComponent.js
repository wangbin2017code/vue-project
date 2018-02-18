/**
 * Created by Administrator on 2018/02/18.
 */

// 全局组件
/*Vue.component("alert",{

    template:'<button @click="onClick">点我</button>',
    methods:{
        onClick:function(){
            alert("hello");
        }
    }
});*/

var alertComponent = {
    template:'<button @click="onClick">点我</button>',
    methods:{
        onClick:function(){
            alert("hello");
        }
    }
};

new Vue({
    el:'#componentDemo',
    components:{// 局部组件
        alert:alertComponent
    }
});

/*new Vue({
    el:'#componentDemo1'
});*/

// 自定义一个点赞组件
new Vue({
    el:'#likeComponent',
    components:{
        like:{
            template:'<button :class="{liked:like_flag}" @click="onLikeClick">点赞: {{like_count}}</button>',
            data:function(){
                return {
                    like_count:100,
                    like_flag:false
                }
            },
            methods:{
                onLikeClick:function(){
                    if(!this.like_flag){
                        this.like_count++;
                    }else{
                        this.like_count--;
                    }
                    this.like_flag = !this.like_flag;
                }
            },
        }
    },
});

Vue.component("golabl_like",{
    template:'#gobalLikeComponetId',// 模板
    data:function(){
        return {
            like_count:100,
            like_flag:false
        }
    },
    methods:{
        onLikeClick:function(){
            if(!this.like_flag){
                this.like_count++;
            }else{
                this.like_count--;
            }
            this.like_flag = !this.like_flag;
        }
    },
});
new Vue({
    el:"#gobalLikeComponent"
});

new Vue({
    el:'#parentToSonContactId',
    components:{
        alertmsg:{
            template:'<button @click="onclick">点我</button>',
            props:['msg'],// 父组件向子组件传递信息
            methods:{
                onclick:function(){
                    alert(this.msg);//
                }
            }
        },
        user:{
            template:'<a :href="\'/user/\'+username">{{username}}</a>',
            props:['username']
        }
    },

});

/*new Vue({
    el:'#sonToParentConcatId',
    components:{
        balance:{
            template:

                '<show></show>'

        },
        show:{
            template:'<button @click="showBalance">显示余额</button>',
            methods:{
                showBalance:function(){

                }
            }
        }
    }
});*/

Vue.component('balance',{
    template:'<div><show @show_balance="show_balance">' +   //父组件监听子组件的事件
    '</show>' +'<div v-if="show">你的余额100$.</div>'+
    '</div>',
    data:function(){
        return{
            show:false
        }
    },
    methods:{
        show_balance:function(data){
            this.show = true;
            console.log(data);// 子组件向父组件传递的参数信息
        }
    }
});
Vue.component('show',{
    template:'<button @click="showBalance">显示余额</button>',
    methods:{
        showBalance:function(){
            this.$emit("show_balance",{a:1,b:2});// 子组件向父组件传递事件
        }
    }
});

new Vue({
    el:'#sonToParentConcatId'
});
