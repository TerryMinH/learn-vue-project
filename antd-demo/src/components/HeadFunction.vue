<!--
 * @Author: TerryMin
 * @Date: 2021-09-08 14:08:08
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-09-08 15:13:33
 * @Description: file not
-->
<script>
export default {
  functional: true,
  props: ['level', 'title'],
  render (h, context) {
    console.log(context);
    let children = [];
    children = children.concat(context.children);
    const { title, level } = context.props;
    return h(
      "h" + level,
      { attrs: { title } },
      children
    )
  }
}
</script>