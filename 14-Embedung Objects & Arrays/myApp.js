var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "BMW",
        fuel: "petrol",
        pistons: [{maker: "BMW"}, {maker: "Audi"}]
    },
    drive: function(){return "drive";}
};

var array = [
    "string", 
    100, 
    ["embeded",200],
    {car: "ford"},
    function(){return "drive";}
];