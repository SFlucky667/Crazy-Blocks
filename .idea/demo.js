//1.构造函数，用于初始化一个逻辑对象
function Index(){
    this.score=0;
    this.lastScore=0;
    this.speed=2;
    this.color=['#cc66cc','#99ff66','#66ffcc','#FF7F24'];
    this.dom={title:$('.title'),
              main:$('.main'),
              author:$('.Author')
    };
    this.bindEvent();
    this.timer1={};//动态产生DIV定时器，用于产生动画
    this.timer2={};//动态检测得分，增加速度
}
Index.prototype.bindEvent=function(){
    var self=this;
    var topValue=-150;
    self.dom.title.on('click',function(){
        self.dom.title.css('display','none');
        self.dom.author.hide();
        self.creatBlock(0);
        self.timer1=setInterval(function(){
            var main=self.dom.main;
            topValue+=self.speed;
            if(main.children().length>=6){
                for(var i=0;i<4;i++){
                    if(main.cjildren().eq(5).children().eq(i).attr('class')=='target')
                    {
                       alert('game over 你的得分为'+self.score);
                       clearInterval(self.timer1);
                       clearInterval(self.timer2);
                       return;
                    }
                }
                main.children.eq(5).remove();
            }
               if(parseInt(main.css('top'))>0){
                    main.css('top','-150px');
                    topValue=-150;
                    self.creatBlock(1);
                    return;
               }
               main.css({
                   'top':topValue+'px',
               })
        },10)
    })


}
