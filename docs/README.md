---
pageLayout: home
config:
  -
    type: hero
    full: true
    background: tint-plate
    hero:
      name: WE ARE
      tagline: Control System Lab
      text: The Control Systems Laboratory is dedicated to advancing control theory, system modeling, and their applications in challenging environments. Our research primarily focuses on Unmanned Aerial Vehicles (UAVs), Robotics, Additive Manufacturing, and Industrial Automation. We explore novel actuation techniques for dynamic interactions, design innovative solutions to enhance system mobility and versatility, and develop cutting-edge control and optimization algorithms for locomotion and manipulation. Drawing inspiration from applied mathematics and bionics, we aim to foster robust and autonomous control systems capable of thriving in real-world scenarios. Our work strives to create intelligent solutions for complex systems, pushing the boundaries of what’s possible in the field of control engineering.
<div class="decomposable-paragraph">
  <LabRhythm theme="cyberpunk">
    <Bar frequency="core" amplitude="120%"> 
      ▣ 驾驭复杂系统的控制韵律  
    </Bar>
    
    <HarmonicSwiper>
      <Slide v-for="(focus, i) in researchFocus" :key="i">
        <div class="frequency-spectrum">
          <span class="fundamental">{{focus.domain}}</span>
          <Overtones>
            <li v-for="(o, j) in focus.specs" 
                :style="{order: j}">{{o}}</li>
          </Overtones>
        </div>
      </Slide>
    </HarmonicSwiper>
  </LabRhythm>

  ![Wave Generator](./control-wave.svg)
</div>
      actions:
        -
          theme: alt
          text: More About Us →
          link: /notes/our-member.md
---
