test('should match snapshot', () => 

{
const data = {name: 'John',age: 30,email: 'john@example.com'};
expect(data).toMatchSnapshot();
});

