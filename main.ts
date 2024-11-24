// 1.1
// let InputValue:(string | null) = prompt("Nimadir Kiriting!")
// let inputArr:string[] = []
// if(InputValue == null) {
// 	console.log("Siz hech narsa kiritmadingiz, nimadir kiriting.");
// } else {
// 	inputArr.push(InputValue)
// }
// console.log(inputArr);



// 1.2
// let numList: Array<number> = [1, 2, 3, 4, 5, 6, 7]
// let max: number = numList[0]
// function findMaxNumber(num: number[]) {
// 	for (const n of num) {
// 		if (n > max) {
// 			max = n;
// 		}
// 	}
// 	return console.log(max);
// }
// findMaxNumber(numList)



// 1.3
// let inputValue: (string | null) = prompt("ixtiyoriy soz kiriting")
// let stringList: string[] = ["word1", "word2", "word3"]
// if (inputValue == "") {
// 	alert("nimadir kiriting");
// }
// function findInList(list: string[], value: (string | null)): void {
// 	list.forEach(item => item == value ? console.log("bor") : console.log("yoq"))
// }
// findInList(stringList, inputValue)	



// 1.4
// let numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let evenList: number[] = []
// function findEvenNumber(list: number[], evenNum: number[]): void {
// 	list.forEach(item => {
// 		if (item % 2 == 0) {
// 			evenNum.push(item)
// 		}
// 	});
// 	console.log(evenNum);
// }
// findEvenNumber(numberList, evenList)



// 1.5
// let NumberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum: number = 0
// function findSum(list: number[]): void {
// 	for (let i = 0; i <= list[i]; i++) {
// 		if (sum += i) {
// 			console.log(sum);
// 		}
// 	}
// }
// findSum(NumberList)



// 1.6
// type User = {
// 	id: number,
// 	name: string,
// 	gmail: string,
// 	password: string,
// 	address: string
// }
// const users: User[] = [
// 	{ id: 1, name: "userName1", gmail: "userEmail1", password: "userPassword1", address: "userAddress1" },
// 	{ id: 2, name: "userName2", gmail: "userEmail2", password: "userPassword2", address: "userAddress2" },
// 	{ id: 3, name: "userName3", gmail: "userEmail3", password: "userPassword3", address: "userAddress3" }
// ]
// function getNameAddress(users: User[]): { name: string; address: string }[] {
// 	return users.map(item => ({
// 		name: item.name,
// 		address: item.address
// 	}))
// }
// const result = getNameAddress(users)
// console.log(result);



// 1.7
// type UserType = {
// 	id: number,
// 	address: string
// }
// const idList: number[] = [1, 2, 3, 4, 5]
// const UsersList: UserType[] = [
// 	{id: 1, address: "address1"},
// 	{id: 2, address: "address2"},
// 	{id: 3, address: "address3"},
// 	{id: 4, address: "address4"},
// 	{id: 5, address: "address5"}
// ]
// function findFallId(List: number[], UList: UserType[]): string[] {
// 	return UList.filter(user => List.includes(user.id)).map(user => user.address)
// }
// const addresses = findFallId(idList, UsersList)
// console.log(addresses)



// 1.8
// type UserType = {
// 	id: number, 
// 	name: string
// }
// let usersList:UserType[] = [
// 	{id: 1, name: "userName1"},
// 	{id: 2, name: "userName2"},
// 	{id: 3, name: "userName3"}
// ]
// function getNames(list: UserType[]): string[] {
// 	return list.map(list => list.name)
// }
// const names = getNames(usersList)
// console.log(names)



// 1.9
// function findLargestNumbers(arr1: number[], arr2: number[]): string {
// 	const max1:number = Math.max(...arr1)
// 	const max2:number = Math.max(...arr2)
// 	const result = `${max1}, ${max2}`
// 	return result
// }
// const array1:number[] = [1, 2, 3, 4, 5]
// const array2:number[] = [6, 7, 8, 9, 10]
// const largestNumbersString = findLargestNumbers(array1, array2)
// console.log(largestNumbersString);



// 1.10
// function divideEvenOdd(numbers: number[]): { evens: number[], odds: number[] } {
// 	const evens: number[] = [];
// 	const odds: number[] = [];
// 	for (const num of numbers) {
// 		if (num % 2 === 0) {
// 			evens.push(num)
// 		} else {
// 			odds.push(num)
// 		}
// 	}
// 	return { evens, odds }
// }
// const numberList:number[] = [-3, -2, -1, 0, 1, 2, 3]
// console.log(divideEvenOdd(numberList))



// 2.1 
// function reverseNumber(num: number): (number | string) {
// 	if (num < 100 || num > 999) {
// 		return "Iltimos, 3 xonali son kiriting."
// 	}
// 	const reversedNum:string = num.toString().split('').reverse().join('')
// 	return parseInt(reversedNum)
// }
// const inputNumber:number = 433
// const result:(number | string) = reverseNumber(inputNumber)
// console.log(result)



// 2.2 
// function factorial(n: number): (number | string) {
// 	if (n < 0) {
// 		return "Manfiy sonlar uchun faktorial aniqlanmaydi."
// 	}
// 	if (n === 0) {
// 		return 1
// 	}
// 	let result: number = 1
// 	for (let i: number = 1; i <= n; i++) {
// 		result *= i
// 	}
// 	return result
// }
// const inputNumber: number = 6
// const result: (number | string) = factorial(inputNumber)
// console.log(`Faktorial: !${inputNumber} = ${result}`)



// 2.3
// type PersonType = {
// 	name: string,
// 	age: number
// }
// function compareAges(person1: PersonType, person2: PersonType): string {
// 	if (person1.age > person2.age) {
// 		return person1.name
// 	} else if (person2.age > person1.age) {
// 		return person2.name
// 	} else {
// 		return "Yoshlar teng"
// 	}
// }
// const personA: PersonType = { name: "humanA", age: 25 };
// const personB: PersonType = { name: "humanB", age: 30 };
// const olderPerson:string = compareAges(personA, personB);
// console.log(`Yoshi katta odam: ${olderPerson}`); 



// 2.4 
// function Numbers(n: number): void {
// 	if (n > 0) {
// 		Numbers(n - 1)
// 		console.log(n)
// 	}
// }// Natija: 8
// const inputNumber:number = 5
// Numbers(inputNumber)



// 2.5
// let userName: { name: string } = { name: "Person1" }
// let userAge: { age: number } = { age: 25 }
// let useJob: { job: string } = { job: "developer" }
// let totalObj: { name: string, age: number, job: string } = Object.assign({}, userName, userAge, useJob)
// console.log(totalObj)



// 2.7 
// let numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let maxNumber:number = Math.max(...numbers)
// console.log(maxNumber)