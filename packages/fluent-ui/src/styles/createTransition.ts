import * as CSS from 'csstype'
import { deepMerge } from '../utils'

export interface Transitions {
  default?: CSS.TransitionProperty
  button?: CSS.TransitionProperty
  input?: CSS.TransitionProperty
  checkbox?: CSS.TransitionProperty
  toggle?: CSS.TransitionProperty
  radio?: CSS.TransitionProperty
  navigation?: CSS.TransitionProperty
}

export const createBaseTransition = (type: string[]): CSS.TransitionProperty =>
  type.map((v): CSS.SingleTransition => `${v} 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`).join(',')

const baseTransition = createBaseTransition(['all'])

function createTransition(transitions: Transitions): Transitions {
  const defaultTransitions: Transitions = {
    default: baseTransition,
    button: baseTransition,
    input: baseTransition,
    checkbox: baseTransition,
    toggle: baseTransition,
    radio: baseTransition,
    navigation: baseTransition
  }
  return deepMerge(transitions, defaultTransitions)
}

export default createTransition
