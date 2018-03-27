let operand = 5;

function square() {
	return operand * operand;
}

square();

%OptimizeFunctionOnNextCall(square);

square();

%OptimizeFunctionOnNextCall(square);
operand = 3.01;
square();