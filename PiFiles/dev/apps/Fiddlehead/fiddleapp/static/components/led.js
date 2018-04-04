/* JS Single File component:
link from html as follows:
    {% load static %}
<script type="module" src="{% static "components/<component>.js" %}></script>

register component in vue instance components: { <component> }
html: <component></component>
*/

Vue.component('led', {
  template: `<div class="led"></div>`,
  data() {
    return {
    }
  }
})
