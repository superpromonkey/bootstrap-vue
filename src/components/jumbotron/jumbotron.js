import Vue from 'vue'
import { mergeData } from 'vue-functional-data-merge'
import { stripTags } from '../../utils/html'
import Container from '../layout/container'

export const props = {
  fluid: {
    type: Boolean,
    default: false
  },
  containerFluid: {
    type: Boolean,
    default: false
  },
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerTag: {
    type: String,
    default: 'h1'
  },
  headerLevel: {
    type: [Number, String],
    default: '3'
  },
  lead: {
    type: String,
    default: null
  },
  leadHtml: {
    type: String,
    default: null
  },
  leadTag: {
    type: String,
    default: 'p'
  },
  tag: {
    type: String,
    default: 'div'
  },
  bgVariant: {
    type: String,
    default: null
  },
  borderVariant: {
    type: String,
    default: null
  },
  textVariant: {
    type: String,
    default: null
  }
}

// @vue/component
export default Vue.extend({
  name: 'BJumbotron',
  functional: true,
  props,
  render(h, { props, data, slots }) {
    // The order of the conditionals matter.
    // We are building the component markup in order.
    let childNodes = []
    const $slots = slots()

    // Header
    if (props.header || $slots.header || props.headerHtml) {
      childNodes.push(
        h(
          props.headerTag,
          {
            class: {
              [`display-${props.headerLevel}`]: Boolean(props.headerLevel)
            }
          },
          $slots.header || props.headerHtml || stripTags(props.header)
        )
      )
    }

    // Lead
    if (props.lead || $slots.lead || props.leadHtml) {
      childNodes.push(
        h(
          props.leadTag,
          { staticClass: 'lead' },
          $slots.lead || props.leadHtml || stripTags(props.lead)
        )
      )
    }

    // Default slot
    if ($slots.default) {
      childNodes.push($slots.default)
    }

    // If fluid, wrap content in a container/container-fluid
    if (props.fluid) {
      // Children become a child of a container
      childNodes = [h(Container, { props: { fluid: props.containerFluid } }, childNodes)]
    }
    // Return the jumbotron
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'jumbotron',
        class: {
          'jumbotron-fluid': props.fluid,
          [`text-${props.textVariant}`]: Boolean(props.textVariant),
          [`bg-${props.bgVariant}`]: Boolean(props.bgVariant),
          [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
          border: Boolean(props.borderVariant)
        }
      }),
      childNodes
    )
  }
})
