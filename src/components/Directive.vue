<script>
export default {
  name: 'HighlightDirective',
  bind(el: HTMLElement, binding: any, vnode: VNode) {
    // Thêm hiệu ứng CSS cho phần tử được tô sáng
    el.style.backgroundColor = 'yellow';
  },
};
</script>
