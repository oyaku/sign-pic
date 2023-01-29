<template>
  <div class="sign-main">
    <canvas ref="cav" :style="`width: ${width}px;height: ${height}px;background:${background}`"></canvas>
    <div class="btnGroup" v-if="showBtn" :style="'justify-content: flex-start'">
      <span @click="clear">清除</span>
      <span @click="compelete">保存</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sign',
  data () {
    return {
      dataBase: ''
    }
  },
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 200
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeColor: {
      type: String,
      default: 'red'
    },
    background: {
      type: String,
      default: 'transparent'
    },
    showBtn: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    this.$refs['cav'].addEventListener('touchmove', e => {
      e.preventDefault()
      e.stopPropagation()
    })
    const angel =
      window.orientation || window.orientation === 0
        ? window.orientation
        : screen.orientation.angle
    console.log('angel', angel)
    this.canvasInit(angel)
    window.addEventListener('orientationchange', event => {
      console.log(event)
      console.log(event.orientation || angel)
      this.$nextTick(() => {
        this.canvasInit(event.orientation || angel)
      })
    })
  },
  methods: {
    canvasInit (rotate) {
      const cav = this.$refs['cav']
      if (!cav) {
        return false
      }
      cav.height = cav.clientHeight
      cav.width = cav.clientWidth
      const offsetY = cav.offsetTop
      const offsetX = cav.offsetLeft
      const ctx = cav.getContext('2d')
      ctx.lineWidth = this.lineWidth
      ctx.strokeStyle = this.strokeColor
      const start = {}
      cav.ontouchstart = event => {
        if (rotate > 0) {
          start.x = event.touches[0].clientX - offsetX
          start.y = event.touches[0].clientY - offsetY
        } else {
          start.x = event.touches[0].clientX - offsetX
          start.y = event.touches[0].clientY - offsetY
          // start.x = event.touches[0].clientY - offsetY
          // start.y =
          //   cav.clientHeight -
          //   event.touches[0].clientX +
          //   screen.availWidth -
          //   cav.clientHeight -
          //   offsetY
        }
      }
      cav.ontouchmove = event => {
        this.hasWrite = true
        let x = 0
        let y = 0
        if (rotate > 0) {
          x = event.touches[0].clientX - offsetX
          y = event.touches[0].clientY - offsetY
        } else {
          x = event.touches[0].clientX - offsetX
          y = event.touches[0].clientY - offsetY
          // cav.clientHeight -
          // event.touches[0].clientY +
          // screen.availWidth -
          // cav.clientHeight -
          // offsetY
        }

        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.closePath()
        start.x = x
        start.y = y
      }
      cav.ontouchup = event => {
        console.log('up')
      }
      cav.ontouchend = event => {
        console.log('uend')
        if (!this.showBtn) {
          this.compelete()
        }
      }
    },
    clear () {
      const cav = this.$refs['cav']
      const ctx = cav.getContext('2d')
      ctx.clearRect(0, 0, cav.width, cav.height)
      this.hasWrite = false
    },
    compelete () {
      const cav = this.$refs['cav']
      this.dataBase = cav.toDataURL('image/png')
      console.log('this.dataBase', this.dataBase)
      this.$emit('complete', this.dataBase)
    }
  }
}
document.addEventListener('touchmove', function (e) {
  e.preventDefault()
}, { passive: false })
</script>

<style>
.sign-main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.sign-main .btnGroup {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.btnGroup span {
  margin-right: 15px;
  padding: 5px 13px;
  background: #409eff;
  color: #fff;
  border-radius: 4px;
}
</style>
