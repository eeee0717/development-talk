<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <div  grid="~ cols-3 rows-2 gap-4">    
    <div >
      <video h-150px overflow="hidden" autoplay loop muted playsinline src="/projects/subtitle.mp4"  />
      <h4>Subtitle-Translator-CLI</h4>
    </div>
    <div >
      <video h-150px overflow="hidden" autoplay loop muted playsinline src="/projects/podwise.mp4"  />
      <h4>Podwise-AI</h4>
    </div>   
     <div >
      <img  src="/projects/project1.png"  />
      <h4>核电站管道故障检测系统</h4>
    </div>
    <div >
      <img   src="/projects/project1.png"  />
      <h4>医疗标签打印系统</h4>
    </div>
    <div >
      <img   src="/projects/project1.png"  />
      <h4>精密车床控制系统</h4>
    </div>
    <div>
      <a target="_blank" href="https://www.bilibili.com/video/BV1iz4y1E7sC/?vd_source=e69adc4cbcbf14d298fc66f0ae53c5c8">
        <img  src="/projects/project2.png"  />
        <h4>"知音"智能家居系统</h4>
      </a>
    </div>
</div>
</template>
