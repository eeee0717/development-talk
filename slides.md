---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: ChenTao's Journey
description: ChenTao's journey of development.
favicon: /me.jpg
fonts:
  sans: LXGW WenKai Mono TC
---

# ChenTao's Roads to Development

---
layout: intro
glowSeed: 14
---

# 陈 涛
<div class="[&>*]:important-leading-10 opacity-80">

导师：石照耀教授<br>
专业：机械工程<br>
{Leetcode-master} {BewlyBewly} 贡献者<br>
{MicaApps} 成员<br>
</div>
<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://www.chentao0717.cn" target="_blank" class="border-none! font-300">chentao0717.cn</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/eeee0717" target="_blank" class="border-none! font-300">eeee0717</a></div>
  <div i-ri-bilibili-line op50 ma text-xl ml4/>
  <div><a href="https://space.bilibili.com/52423255" target="_blank" class="border-none! font-300" ws-nowrap>槑囿脑袋</a></div>
</div>

<img src="/me.jpg"  absolute top-30 right-45 w-40 rounded-full />
<img src="/GitHub.png" absolute top-75 right-8 w-110  />

---

# 项目长廊
<ListProjects />

---
layout: cover
title: Anthony's Roads to Open Source
class: pl20
---

<div
  flex="~ gap-3 col" mt--5
  origin-bottom-left transition duration-500
  :class="$clicks <= 2 ? 'scale-150 translate-y-10' : ''"
>
  <img src="/me.jpg" rounded-full w-15 h-15 v-click="1" />
  <div flex="~ col">
    <div text-3xl flex="~ items-center gap-2" mb1 v-click="1" >
      <span>陈 涛的开发之路</span>
    </div>
    <div text-xl>
      <span v-click op50>ChenTao's Roads to </span>
      <span
        inline-block transition duration-500
        :class="$clicks === 0 ? 'scale-150 translate-y--5 translate-x-8' : 'op75'"
      >Development </span>
    </div>
  </div>
</div>

---

# 学习编程的例子

<div mt-4 />

<div grid="~ cols-[4fr_2fr] gap-2">

<v-clicks>

- 你今天打算<span text-red>学习C#</span>
- 打开B站搜索<span text-orange>C#教学</span>；
- 花了几个小时安装好了<br><span text-green>Visual Studio和.NET框架</span>；
- 花了一个星期学习C#基础语法：<br><span text-violet>变量</span>，<span text-yellow>基本类型</span>，<span text-blue>流程控制</span>，<span text-teal>结构体与类</span> 等等；
- 一段时间后<span text-fuchsia>看</span>完了视频...
- 准备动手做一个东西的时候发现...
- 好像什么都学了但又好像什么也<span text-amber>没学会</span>...
- 于是你又重新换一个<span text-rose>C#视频</span>学习...

</v-clicks>
<div v-click>
  <CodeExample scale-80 />
</div>
</div>
---
glowSeed: 10
---

# 如何学习「编程」?

<div v-click>以<span v-mark.orange="2">项目</span>为目标可以很好的帮助我们学习「编程」</div>
<div v-click/>
<div flex="~ col gap-7" py10>

<div v-click><div flex="~ inline" text-blue mr2 px2 rounded bg-blue:10>需求</div>从自己的需求出发，对问题有更深入的理解</div>
<div v-click><div flex="~ inline" text-rose mr2 px2 rounded bg-rose:10>动力</div>解决自己的问题，同时或许也可以帮助到其他人</div>
<div v-click><div flex="~ inline" text-yellow mr2 px2 rounded bg-yellow:10>验证</div>你的需求很可能也是别人的需求，通过社区验证你的想法</div>
<div v-click><div flex="~ inline" text-green mr2 px2 rounded bg-green:10>迭代</div>社区讨论与贡献，完善设计</div>

</div>

<div absolute left-150 top-20>
  <div
    absolute w-50 h-50 left-0 top-28 border="~ blue rounded-full"
    bg-blue:20 text-xl text-blue flex="~ items-center justify-center"
    v-click="3"
  >
    <div :class="{pr15: $clicks>2, pt8: $clicks>3}" transition-all duration-400>你擅长的</div>
  </div>
  <div
    absolute w-50 h-50 left-34 top-28 border="~ rose rounded-full"
    bg-rose:20 text-xl text-rose flex="~ items-center justify-center"
    v-click="4"
  >
    <div pl15 :class="{pt8: $clicks>3}" transition-all duration-400>你享受的</div>
  </div>
  <div
    absolute w-50 h-50 left-17 top-0 border="~ amber rounded-full"
    bg-amber:20 text-xl text-amber flex="~ items-center justify-center"
    v-click="5"
  >
    <div pb10>大家需要的</div>
  </div>
  <Arrow v-click="6" x1="160" y1="340" x2="170" y2="175" color-green  />
  <div
    v-click="6"
    absolute top-85 left-5 ws-nowrap
    border="~ green rounded-full" px3 py1
    bg-green:20 text-xl text-green
  >实用且可持续发展的开源项目</div>
</div>


---
glow: right
---

# 开源工具发想与实现流程

<div flex="~ col gap-1" py5>
  <div v-click flex="~ items-center gap-2"><div text-2xl i-ph-lightbulb-duotone text-yellow /> 理解问题，考虑可能的解决方案</div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-magnifying-glass-duotone text-blue /> 寻找市面上已经存在的库</div>
  <div v-click absolute left-76 top-40 bg-blue:10 border="~ blue/50 rounded-lg" p2 py1>
    <div text-sm text-blue2>
      参与贡献，提出建议
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div flex="~ items-center gap-2">
    <div text-2xl i-ph-code-duotone text-green v-after />
    <span v-after>本地实现 MVP；验证方案可行性；保持接口解耦的想法进行设计；</span>
    <span v-click text-yellow font-bold flex="~ gap-1 items-center" ml--2>及时回归<div i-ph-arrow-square-out-duotone /></span>
  </div>
  <div v-click absolute left-134 top-32 bg-yellow:10 border="~ yellow/50 rounded-lg" p2 w-54>
    <div text-sm text-yellow2>
      避免「深度优先陷阱」，完成必要的功能后及时回归主线任务。日后再继续深入细节。
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-books-duotone text-teal /> 抽离实现成为库；添加简要的文档与动机；开源仓库发布包</div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-megaphone-duotone text-rose /> 适当的宣传；搜集社区反馈</div>
  <div v-click absolute left-80 top-77 bg-rose:10 border="~ rose/50 rounded-lg" p2 py1>
    <div text-sm text-rose2>
      鼓励总结成技术博客
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-chats-circle-duotone text-violet /> 交由社区验证</div>
    <div v-click flex="~ items-center gap-2" pl-4 mt4><div i-ph-arrow-elbow-down-right op25 ml-1 text-sm /><div text-2xl i-ph-seal-question-duotone text-gray /> 无人问津：解决了自己的问题、总结了解决方案，也是不错的收获</div>
    <div v-click flex="~ items-center gap-2" pl-4 mt4><div i-ph-arrow-elbow-down-right op25 ml-1 text-sm /><div text-2xl i-ph-treasure-chest-duotone text-orange /> 诶好像还不错：社区参与讨论、报错、贡献等；帮助到了更多也帮到了自己</div>
</div>


---
glow: bottom
---

# 对开源的期待

<div grid="~ cols-3 gap-2" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-violet:15 text-violet1>
    <div text-2xl i-ph-gift-duotone text-violet mb2 />
    <div>开源是一种礼物</div>
    <div text-xs op50>Open Source is a Gift</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-2xl i-ph-target-duotone text-orange mb2 />
    <div>互惠不是目的</div>
    <div text-xs op50>Reciprocity is not the Goal</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-rose:15 text-rose1>
    <div text-2xl i-ph-hand-heart-duotone text-rose mb2 />
    <div>享受分享和合作的过程</div>
    <div text-xs op50>Enjoy the Sharing and Collaboration</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-green:15 text-green1>
    <div text-2xl i-ph-hand-waving-duotone text-green mb2 />
    <div>开源不只有代码</div>
    <div text-xs op50>Open Source is more than Code</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-2xl i-ph-users-three-duotone text-blue mb2 />
    <div>开源的核心是社区</div>
    <div text-xs op50>The Core of Open Source is Community</div>
  </div>
</div>

<div absolute bottom-10 v-click>
<div op75 mb1>文章推荐</div>

- [Open-Source is a Gift](https://www.redotheweb.com/2011/11/13/open-source-is-a-gift.html)<span op50 text-sm> - François Zaninotto</span>
- [The open source gift exchange](https://world.hey.com/dhh/the-open-source-gift-exchange-2171e0f0)<span op50 text-sm> - David Heinemeier Hansson</span>
- [开源的心理建设](https://antfu.me/posts/mental-health-oss-zh)<span op50 text-sm> - Anthony Fu</span>


</div>


---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Happy Coding!

<p pt-2 op50>谢谢！有关编程的问题欢迎一起交流讨论！</p>
