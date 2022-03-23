function pow(x, n)
{
    if (n == 1)
    {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2,5));
console.log(pow(7,3));
console.log(pow(12,2));
console.log(pow(9,4));