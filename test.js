describe("pow", function(){

    it("raises to n-th power - Empty base & power ", function(){
        assert.isNaN( pow() );
    });

    it("raises to n-th power - Base non-negetive", function(){
        assert.isNaN( pow(0, 0) );
    });

    it("raises to n-th power - Power non-negetive", function(){
        assert.isNaN( pow(2, -3) );
    });

    it("raises to n-th power - Power decimal", function(){
        assert.isNaN( pow(2, 1.5) );
    });

    it("raises to n-th power", function(){
        assert.equal( pow(2, 3), 8);
    });

    it("raises to n-th power", function(){
        assert.equal( pow(5, 3), 125);
    });
    
});