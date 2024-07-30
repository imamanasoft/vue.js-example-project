import { describe, expect, it } from 'vitest'
import counter from '@/store/counter.js'

// destructure assign `mutations`
const { increment, decrement } = counter.mutations

describe('mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state = { count: 0 }
    // apply mutation
    increment(state)
    // assert result
    expect(state.count).to.equal(1)
  })

  it('DECREMENT', () => {
    // mock state
    const state = { count: 40 }
    // apply mutation
    decrement(state)
    // assert result
    expect(state.count).to.equal(39)
  })
})