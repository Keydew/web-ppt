<template>
  <div class="hello">
    <div class="reveal">
      <div class="slides">
        <section
          :data-markdown="`/static/markdown/${markdown}.md`"
          data-separator-vertical="^\r?\n--\r?\n$"
        ></section>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
export default {
  name: "HelloWorld",
  props: {
    markdown: {
      type: String,
      default: "main",
    },
  },
  data() {
    return {
      loadList: [
        // "/static/markdown/main.md",
        // "/static/markdown/base.md",
        "/static/markdown/selector.md",
        // "/static/markdown/box.md"
      ],
      load: "",
    };
  },
  created() {
    console.log(this.markdown);
    console.log(this.$route.params);
  },
  mounted() {
    Reveal.initialize({
      plugins: [Markdown, Highlight],
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  width: 100%;
  height: 100%;
}

.hello .reveal {
  font-size: 36px;
}

.hello .reveal .emphasis {
  color: #ff5555;
}
.hello .reveal .normal {
  font-size: 22px;
}
</style>
