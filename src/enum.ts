enum Color {
  Red = 'red',
  LightRed = 'light red',
  Green = 'green',
  LightGreen = 'light green',
  Orange = 'orange',
  Pink = 'pink',
  Cyan = 'cyan',
  Black = 'black',
  White = 'white',
}

const colors: Color[] = [Color.Red, Color.Black, Color.Cyan];
// const colorsWIthError: Color[] = [Color.Red, Color.Black, 'white']; Type '"white"' is not assignable to type 'Color'.ts(2322)
