 <template>
  <div class="detail_page">
    <head-top :head-title="question.title" go-back='true'></head-top>
    <section v-html="markdownText" class="markdown"></section>
  </div>
</template>

<script>
import headTop from 'src/components/header/head'
import { mapState, mapMutations } from 'vuex'
import showdown from 'showdown'

export default {
  data() {
    return {

    }
  },
  components: {
    headTop,
  },
  computed: {
    ...mapState([
      'question',
    ]),
    markdownText: function () {
      let converter = new showdown.Converter();
      return converter.makeHtml(this.question.detail);
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin';

.detail_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 202;
  padding-top: 1.95rem;
  overflow-y: auto;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.markdown {
  font-size: 0.65rem;
  padding: 0 0.7rem;
  color: #666;
  padding-bottom: 2rem;
}
</style>
