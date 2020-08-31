export interface Product {
  brand: string,
  taste: string,
  capacity: number,
  present: number,
  weight: number,
  notification: string,
  amount: number,
  happiness: boolean
}

export default [
  {
    brand: `Нямушка`,
    taste: `с фуа-гра`,
    capacity: 10,
    present: 1,
    weight: 0.5,
    notification: `Вкусная фуа-гра`,
    amount: 25,
    happiness: false
  },
  {
    brand: `Нямушка`,
    taste: `с рыбой`,
    capacity: 40,
    present: 2,
    weight: 2,
    notification: `Головы щучьи с чесноком да свежайшая сёмгушка.`,
    amount: 13,
    happiness: false
  },
  {
    brand: `Нямушка`,
    taste: `с курой`,
    capacity: 100,
    present: 5,
    weight: 5,
    notification: `Вкусная курочка`,
    amount: 0,
    happiness: true
  }
]