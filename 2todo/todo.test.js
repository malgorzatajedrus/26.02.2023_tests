const todo = require("./todo");

describe("Todo", () => {
	beforeEach(() => {
		todo.list = [];
	}); //przywrocenie listy do stanu poczatkowego

	it("should add item to list", () => {
		//only tylko on bedzie puszczany, skip - pomin w tescie - npm run test w terminalu //
		const item = "clean";
		todo.add(item);
		expect(todo.list.length).toBe(1);
		expect(todo.list).toEqual([item]);
		console.log(todo.list);
	});

	it("should have empty list", () => {
		expect(todo.list.length).toBe(0);
	});

	it("should remove item from list", () => {
		console.log("list", todo.list);
		todo.add("wash");
		todo.add("clean");
		todo.add("cook");
		console.log("list2", todo.list);
		todo.remove("cook");
		expect(todo.list.length).toBe(2);
		expect(todo.list).toEqual(["wash", "clean"]);
		console.log("list3", todo.list);
	});
    it.only("should return the proper value", () => {
        expect(todo.game(3)).toBe("Fizz");
        expect(todo.game(5)).toBe("Buzz");
        expect(todo.game(15)).toBe("FizzBuzz");
        expect(todo.game(4)).toBe(4);
     })
});
