export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-8daa1a0e","v-79fdd481","v-0e503981","v-70c55780","v-016cc503","v-396543c2","v-2b548aac","v-bb632900","v-1ac704c5","v-15f4270a","v-39a8fa92"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-8daa1a0e","v-79fdd481","v-0e503981","v-70c55780"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
