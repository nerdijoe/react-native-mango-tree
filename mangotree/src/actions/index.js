import {
  GAME_START,
  GAME_OVER,
  HARVEST,
  CLEAR_STATE
} from './constants'

export const gameStart = (data) => {
  return {
    type: GAME_START,
    data
  }
}

export const gameOver = (age) => {
  return {
    type: GAME_OVER,
    age
  }
}

export const harvest = (fruits) => {
  return {
    type: HARVEST,
    fruits
  }
}

export const clearState = () => {
  return {
    type: CLEAR_STATE
  }
}
