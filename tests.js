// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function(){
    it('should return Hello, World!', function (){
        expect(sayHello()).toBe("Hello, World!")
    })
    it('should be a defined function', function (){
        expect(typeof sayHello).toBe('function');
    });
    it('function should return a string', function (){
        expect(typeof sayHello()).toBe("string");
    })
    // it('should return Hello Jane when executed', function (){
    //     expect(sayHello("Jane")).toBe("Hello Jane")
    // })
    // it('should return Hello Alex when executed', function (){
    //     expect(sayHello("Alex")).toBe("Hello Alex")
    // })
    // it('should returns Hello Pat ', function (){
    //     expect(sayHello("Pat")).toBe("Hello Pat")
    // })
    it('should return Hello, World ', function (){
        expect(sayHello(2.3)).toBe("Hello, World!")
    })
    it('should return Hello, World ', function (){
        expect(sayHello(true)).toBe("Hello, World!")
    })
    it('should return Hello, World ', function (){
        expect(sayHello(false)).toBe("Hello, World!")
    })
    it('should return Hello, World ', function (){
        expect(sayHello(null)).toBe("Hello, World!")
    })
    it('should return Hello, World ', function (){
        expect(sayHello('')).toBe("Hello, World!")
    })
    it('should return Hello, World ', function (){
        expect(sayHello({})).toBe("Hello, World!")
    })
})

describe('isFive', function (){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true', function() {
        expect(isFive(5)).toBe(true);
    });

})
describe('isEven', function (){
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return false', function() {
        expect(isEven(5)).toBe(false);
    });
    it('should return true', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false', function() {
        expect(isEven(Infinity)).toBe(false);
    });


})

describe('isVowel', function (){
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return a true for a as input', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('should return a true for A as input', function() {
        expect(isVowel('A')).toBe(true);
    });
    it('should return a false', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return a false ', function() {
        expect(isVowel('banana')).toBe(false);
    });

})

describe('add', function (){
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return undefined ', function() {
        expect(typeof add()).toBe('number');
    });
    it('should return a true for a as input', function() {
        expect(add(2,3)).toBe(5);
    });
    it('should return a true for a as input', function() {
        expect(add(-2,-3)).toBe(-5);
    });

})