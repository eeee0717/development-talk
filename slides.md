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
fonts:
  sans: LXGW WenKai Mono TC 
---

ChenTao's Roads to Development

---
layout: intro
class: pl-30
glowSeed: 14
---

# 陈 涛
<div class="[&>*]:important-leading-10 opacity-80">

导师：石照耀教授<br>
专业：机械工程<br>
{Leetcode-master} {BewlyBewly} 贡献者<br>
{Podwise-AI} {Subtitle-Translator-CLI} 作者<br>

</div>
<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://www.chentao0717.cn" target="_blank" class="border-none! font-300">chentao0717.cn</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/eeee0717" target="_blank" class="border-none! font-300">eeee0717</a></div>
  <div i-ri-bilibili-line op50 ma text-xl ml4/>
  <div><a href="https://space.bilibili.com/52423255" target="_blank" class="border-none! font-300" ws-nowrap>槑囿脑袋</a></div>
</div>

<img src="/me.jpg"  absolute top-36 right-35 w-40 rounded-full />
---


# Projects Gallery
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
