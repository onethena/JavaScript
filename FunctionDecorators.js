
// Higher order function
function functionComposer(a,b)
{
    return function(c)
    {
        return a(b(c));
    }
}

function addTwo(x)
{
    return x+2;
}

function multiplyByTwo(y)
{
    return y*2;
}

const addTwoMultiplyTwo = functionComposer(addTwo, multiplyByTwo);

//console.log(addTwoMultiplyTwo(4));


// Function decorator
function decoratorFunction(func)
{
    return function(...args)
    {
        func.apply(this, args);
        return this;
    }
}
function ParentClass(){};
ParentClass.prototype.setName = decoratorFunction(function(name){
    this.name = name;
});
ParentClass.prototype.getName = decoratorFunction(function()
{
    return this.name;
});

const o = new ParentClass();
console.log(o.setName("Vandana").getName().setName("ABC").getName());