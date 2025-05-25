{
    //scope-1
    let vehicles = 5;
    var roadvehicle = "CAR";
    var airvehicle = "PLANE";
    var watervehicle = "BOAT";

    console.log(roadvehicle)

    { //scope-2
        let temples = ["GOVINDA", "SIVA", "BABA",
            {
                place: "TIRUPATHI",
                state: "ANDHRA",
            }
        ]
        console.log(temples[3].state)

        {//scope-3
            var typesoftransport = (one, two, three) => {
                console.log(two)
            }
            typesoftransport("ROAD", "WATER", "AIR")
            console.log(watervehicle)
            console.log(roadvehicle)
            console.log(vehicles)
            console.log(temples[3].place)
        }
    }
}