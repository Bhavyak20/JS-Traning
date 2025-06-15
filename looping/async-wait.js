
// //example-1
// function rrrmoviedetails() {
// //     return new Promise((resolve) => {

// //         setTimeout(() => {
// //             resolve("RRR")
// //         }, 5000)
// //     })
// // }

// // let bombaymoviedetails = new Promise((resolve) => {

// //     setTimeout(() => {
// //         resolve("BOMBAY")
// //     }, 2000)
// // })

// // async function totalmovies() {
// //     await rrrmoviedetails().then((result) => {
// //         console.log(result)
// //     })
// //     let bobaymovie = await bombaymoviedetails;
// //     console.log(bobaymovie)
// //     // await bombaymoviedetails.then((data)=>{
// //     //   console.log(data)
// //     // })
// //     console.log("The two movies are directed by SSR and Mani Ratanam")
// // }
// // totalmovies()

// //example-2
let tamilmoviedetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        let tamil = true
        if (tamil) {
            resolve("BOMBAY is wonderfull movie.Directed by MANI RATNAM.")
        }
        else {
            reject("No Tamil movie details.")
        }
    }, 5000)

})

let telugumoviedetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        let telugu = true
        if (telugu) {
            resolve("RRR is telugu movie,directed by SSR.")
        }
        else {
            reject("No Telugu movie details.")
        }
    }, 8000)

})

async function moviedeails() {
    let detailsavailable = true
    await tamilmoviedetails.then((result) => {
        console.log(result)
    }).catch((nodata) => {
        console.log(nodata)
    })

    await telugumoviedetails.then((result) => {
        console.log(result)
    }).catch((nodata) => {
        console.log(nodata)
    })
    if (detailsavailable) {
        console.log("Above are the two movie details available.")
    }
    else {
        console.log("No movie details available.")
    }
}

moviedeails()


