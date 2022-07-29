const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)



function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}
const input = prompt();

console.log(reversedNum(input))