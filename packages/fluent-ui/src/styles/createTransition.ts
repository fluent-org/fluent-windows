import * as CSS from 'csstype'
import { deepMerge } from '../utils'

export interface Transitions {
  default?: CSS.TransitionProperty
  button?: CSS.TransitionProperty
  input?: CSS.TransitionProperty
  checkbox?: CSS.TransitionProperty
  navigation?: CSS.TransitionProperty
}

const baseTransition = 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'

function createTransition(transitions: Transitions): Transitions {
  const defaultTransitions: Transitions = {
    default: baseTransition,
    button: baseTransition,
    input: baseTransition,
    checkbox: baseTransition,
    navigation: baseTransition
  }
  return deepMerge(transitions, defaultTransitions)
}

export default createTransition
