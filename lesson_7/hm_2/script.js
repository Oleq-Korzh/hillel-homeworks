function carrying(x) {
	return y => x + y;
}

const initial = carrying(5);

console.log(initial(7));
