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

// 组件间互相通信
var Event = new Vue();
Vue.component('zhangsan',{
    template:
    '<div>我说:<input @keyup="on_change" type="text" v-model="i_said"></div>',

    data:function(){
        return {
            i_said:''
        }
    },
    methods:{
        on_change:function(){
            Event.$emit('zhangsan_said_word',this.i_said);
        }
    }
});

Vue.component('lisi',{
    template:'<div>zhangsan说:{{zhangsan_said}}</div>',
    data:function(){
        return {
            zhangsan_said:''
        }
    },

    mounted:function(){// 生命周期钩子
        var me = this;
        Event.$on('zhangsan_said_word',function(data){
           me.zhangsan_said = data;
        });
    }
});

new Vue({
    el:'#componentConcatId'
});

// 过滤器
Vue.filter('currency',function(val,unit){
    var val = val || 0;
    var unit = unit || '元';
    return val+unit;
});

Vue.filter('meter',function(val,unit){
    val = val || 0;
    unit = unit || 'm';
    return (val/1000).toFixed(3)+unit;
});

new Vue({
    el:'#vueFilterId',
    data:{
        goodPrice:20,
        length:100,
    }
});

// 自定义指令
Vue.directive('pin',function(el,binding){
    console.log(binding)
    var val = binding.value;
    var x = binding.modifiers;// 修饰符
    var y = binding.arg;// 参数
    console.log(y);
    /*console.log('val:',val);
    console.log('el:',el);*/
    if(val){
        el.style.color='yellow';
    }else{
        el.style.color = 'red'
    }
});
new Vue({
    el:'#selfDirectiveId',
    data:{
        card1_flag:true,
        card2_flag:false,
    }
});

//mixins混合（提取组件共通属性和方法）
var base ={
    methods:{
        show:function(){
            this.visible = true;
        },
        hide:function(){
            this.visible = false;
        }
    },
    data:function(){
        return {
            visible:false
        }
    }
};
Vue.component('tooltip',{
    template:'<div><div @mouseenter="show" @mouseleave="hide">王斌  <span v-if="visible">你好</span></div></div>',
    /*methods:{
        show:function(){
            this.visible = true;
        },
        hide:function(){
            this.visible = false;
        }
    },
    data:function(){
        return {
            visible:false
        }
    }*/
    mixins:[base]
});

new Vue({
    el:'#mixinsId'
});

Vue.component("panel",{
    template:'#soltTemplateId',
});
new Vue({
    el:'#slotId'
});

