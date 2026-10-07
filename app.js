function greet(name)   {
    return `Hello, ${name}!`;
}

const names = [
    'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan',
    'Fiona', 'George', 'Hannah', 'Isaac', 'Julia',
    'Kevin', 'Lily', 'Mason', 'Nora', 'Oliver',
    'Penelope', 'Quentin', 'Ruby', 'Samuel', 'Tara'
];

names.forEach(name => console.log(greet(name)));
