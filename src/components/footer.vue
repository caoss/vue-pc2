<template>
  <footer id="footer">
    <div class="bottom">
      Copyright© 2018 - {{nowYear}} | Author <a class="authorLink" href="https://neveryu.github.io/neveryu/">Never Yu</a> | All Rights Reserved | Power by <a class="vueLink" href="javascript:;">Vue</a> & <a class="vueLink" href="javascript:;">SSR</a>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'MyFooter',
    created() {
      this.nowYear = new Date().getFullYear()
    }
  }
</script>
<style scoped lang="stylus">
  #footer
    position absolute
    bottom 0
    width 100%
    min-width 800px
    height 320px
    background-color #222
    color #ccc
    clear both
    .top
      width 1263px
      height 240px
      margin 0 auto
      text-align center
      .top-item
        display inline-block
        width 410px
        height 280px
        text-align left
        vertical-align top
        .weiboLink
          color #fc0
        .emailLink
          color #f66
          text-decoration none
        .guestbook
          color #42b983
        h2
          font-size 24px
          font-weight normal
          padding 20px 0 0 20px
        hr
          width 90%
          border 1px dashed #333
        ul
          font-size 18px
          color #777
          text-indent 20px
          line-height 2
      .vue-sell
        position absolute
        top 20px
        left 20px
      .vue-music
        position absolute
        top 20px
        right 20px
    .bottom
      height 80px
      line-height 80px
      text-align center
      color #777
      background-color #000
      border-top 1px solid #444
      .authorLink
        color #f36
      .vueLink
        color #42b983
</style>
