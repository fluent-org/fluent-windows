import * as CSS from 'csstype'
import { deepMerge } from '../utils'

export interface Transitions {
  button?: CSS.TransitionProperty
  navigation?: CSS.TransitionProperty
}

const baseTransition = 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'

function createTransition(transitions: Transitions): Transitions {
  const defaultTransitions: Transitions = {
    button: baseTransition,
    navigation: baseTransition
  }
  return deepMerge(transitions, defaultTransitions)
}

export default createTransition
