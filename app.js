function greet(name)   {
    return `Hello, ${name}!`;
}

const names = [
    'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan',
    'Fiona', 'George', 'Hannah', 'Isaac', 'Julia',
    'Kevin', 'Lily', 'Mason', 'Nora', 'Oliver',
    'Penelope', 'Quentin', 'Ruby', 'Samuel', 'Tara',
    'Umar', 'Violet', 'William', 'Xena', 'Yusuf',
    'Zoe', 'Aaron', 'Bella', 'Caleb', 'Delilah',
    'Elijah', 'Faith', 'Gabriel', 'Hazel', 'Ian',
    'Jasmine', 'Kai', 'Leah', 'Miles', 'Naomi',
    'Owen', 'Paige', 'Ryan', 'Sofia', 'Theo',
    'Uma', 'Victor', 'Willow', 'Xavier', 'Yara'
];

names.forEach(name => console.log(greet(name)));
