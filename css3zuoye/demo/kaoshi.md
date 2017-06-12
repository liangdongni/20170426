1.	聊一聊css3的新特性 ：把你知道的相关表达方式写出来
   边框：border-image/border-raduis
   背景:background-size/background-image background-origin/background-clip
   文本效果:text-shadow/box-shadow/text-overflow/word-wrap/word-break
   字体：font-family/font-size/font-weight/font-style
   2d:transform/transform-origin/translate()/roate()/scale()/skew()/matrix()
   3d:transform/transform-origin/transform-style/perspective/perspective-origin/backface-visibility/roateX()/roateY
   过渡:transition/transition-property/transition-duration/transition-timing-function/transition-delay
   动画:@keyframes/animation/animation-name/animation-duration/animation-timing-function/animation-delay/animation-iteration-count/animation-direction/animation-play-state
   多列:column-count/column-gap/column-rule-style/
   column-rule-width/column-rule-color/column-rule/column-span/column-width

2.	请列举在CSS中可以被继承和属性和不能被继承的属性
  有继承的属性：
   1、字体系列属性：
      font：组合字体/font-family：规定元素的字体系列/font-weight：设置字体的粗细/font-size：设置字体的尺寸/font-style：定义字体的风格/font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小/font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持/font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height
   2、文本系列属性
     text-indent：文本缩进/text-align：文本水平对齐/line-height：行高/word-spacing：增加或减少单词间的空白（即字间隔）/letter-spacing：增加或减少字符间的空白（字符间距）/text-transform：控制文本大小写/direction：规定文本的书写方向/color：文本颜色
   3、元素可见性：visibility
   4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout
   5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style
   6、生成内容属性：quotes
   7、光标属性：cursor
   8、页面样式属性：page、page-break-inside、windows、orphans
   9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation
不能被继承的属性
    1、display：规定元素应该生成的框的类型
    2、文本属性：vertical-align：垂直文本对/text-decoration：规定添加到文本的装饰/text-shadow：文本/white-space：空白符的处理/unicode-bidi：设置文本的方向
    3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left
    4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment
    5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index
    6、生成内容属性：content、counter-reset、counter-increment
    7、轮廓样式属性：outline-style、outline-width、outline-color、outline
   8、页面样式属性：size、page-break-before、page-break-after
   9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

3.	前端与后端通过ajax通信的具体操作流程是什么
4.	清除浮动的几种方式，各自的优缺点
     1、父级div定义height
      原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题
      优点：简单，代码少，容易掌握
       缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题
    2、结尾处加空div标签clear:both
        原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度
        优点：简单，代码少，浏览器支持好，不容易出现怪问题
        缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不爽
    3、父级div定义伪类:after和zoom
       原理：IE8以上和非IE浏览器才支持:after，原理和方法2有点类似，zoom(IE转有属性)可解决ie6,ie7浮动问题
       优点：浏览器支持好，不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）
       缺点：代码多，不少初学者不理解原理，要两句代码结合使用，才能让主流浏览器都支持
    4、父级div定义overflow:hidden
       原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度
       优点：简单，代码少，浏览器支持好
       缺点：不能和position配合使用，因为超出的尺寸的会被隐藏
    5、父级div定义overflow:auto
       原理：必须定义width或zoom:1，同时不能定义height，使用overflow:auto时，浏览器会自动检查浮动区域的高度
       优点：简单，代码少，浏览器支持好
       缺点：内部宽高超过父级div时，会出现滚动条。
    6、父级div也一起浮动
       原理：所有代码一起浮动，就变成了一个整体
       优点：没有优点
       缺点：会产生新的浮动问题。
    7、父级div定义display:table
       原理：将div属性变成表格
       优点：没有优点
       缺点：会产生新的未知问题
    8、结尾处加br标签clear:both
       父级div定义zoom:1来解决IE浮动问题，结尾处加br标签clear:both

5.	HTML5都有哪些新的JS API？
       多媒体：video、audio、
       游戏：canvas、webgl、
       存储：localstorage、sessonstorage、websql、indexedDB
       网络：websocket
6.	html5 的CSS3新增的伪类？
    :before/:after
7.	CSS3都有哪些新特性呢？
    CSS3 选择器（Selector）
    @Font-face 特性、
    Word-wrap & Text-overflow 样式
    Text-decoration
    多列布局（multi-column layout）
    边框和颜色，颜色支持透明度（color, border）
    渐变效果（Gradient）
    阴影（Shadow）和反射（Reflect）效果
    盒子模型  
    Transitions, Transforms 和 Animation
8.	标签上title与alt属性的区别是什么？
    alt是当你图片显示不出显示的文字
    title是你用鼠标放到图片上显示的文字
9.	描述css reset的作用和用途。
    Reset重置浏览器的css默认属性，浏览器的品种不同，样式不同，然后重置，让他们统一
10.	Document.write 和innerTHML区别
   document.write是直接写入到页面的内容，如果在写之前没有调用document.open，每次写完关闭之后重新调用函数，会导致页面被重写。
   innerhtml则是DOM页面元素的一个属性，代表该属性的html内容。你可以精确到某一个具体的元素来进行更改。
   如果想修改document的内容，则需要修改document.documentElement.innerElement。
   innerHTML将内容写入某个DOM节点，不会导致页面全部重绘
 
   innerHTML很多情况下都优于document.write，其原因在于其允许更精确的控制要刷新页面的那一个部分。
11.	split() join() 的区别
    join函数获取一批字符串，然后用分隔符字符串将它们连接起来，从而返回一个字符串。  
    split()函数获取一个字符串，然后在分隔符处将其断开，从而返回一批字符串。
    但是，这两个函数之间的区别在于join可以使用任何分割字符串将多个字符串连接起来，而split()只能使用一个字符分隔符将字符串断开。 
    简单地说，如果你用split()，是把一串字符串(根据某个分隔符)分成若干个元素存放在一个数组里。
    而join是把数组中的字符串连接成一个长串，可以大体上认为是split的逆操作。
12.	事件绑定和普通事件有什么区别
    事件绑定就是针对dom元素的事件，绑定在dom元素上
    普通事件即为非针对dom元素的事件;
    普通事件中的onclick是DOM0级事件只支持单个事件，会被其他onclick事件覆盖，而事件绑定中的addEventListener是DOM2级事件可以添加多个事件而不用担心被覆盖
13.	如何阻止事件冒泡和默认事件
     stopPropagation(); 阻止事件冒泡
     preventDefault();  阻止默认事件
14.	解释jsonp的原理
    ajax请求受同源策略影响，不允许进行跨域请求，而script标签src属性中的链接却可以访问跨域的js脚本，利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码，在src中进行了调用，这样实现了跨域。
15.	document load 和document ready的区别
    页面加载完成有两种事件，一是ready，表示文档结构已经加载完成（不包含图片等非文字媒体文件），二是onload，指示页面包含图片等文件在内的所有元素都加载完成。
16.	写一个正则验证URL
   /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i
17.	请写出下面分别弹出的值
     + function() {
            var a = 5;

            function a() {};
            alert(a);//5

            function b() {}
            b = 6;
            alert(b);//6
            var c = d = b;
        }();
        alert(d);//6
        alert(c);//not defined
18.	请写出如下点击li的输出值，并用三种办法正确输出li里的数字。
   var list_li = document.getElementsByTagName("li");

        // for (var i = 0; i < list_li.length; i++) {
        //     list_li[i].index = i;
        //     // console.log(i)
        //     list_li[i].onclick = function() {
        //         console.log(list_li[this.index].innerHTML);
        //     }

        // }


        // $.each(list_li, function(i) {
        //     $(this).click(function() {
        //         console.log($(this).html());
        //     })
        // })

        // for (var i = 0; i < list_li.length; i++) {
        //     (function(n) {
        //         list_li[n].onclick = function() {
        //             console.log(list_li[n].innerHTML);
        //         }
        //     })(i);
        // }
19.	请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等生以此类推。不允许使用if switch等。

请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么


   
   
    
    
    