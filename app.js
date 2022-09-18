//how to format numbers like 1.2K or 2.3M

const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    style: 'currency',
    currency: 'Rupees'
})

let n = formatter.format(505_123);

console.log(n)