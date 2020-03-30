console.log('Client side javascript file is loaded!')

const address = 'nagpur'

fetch(`http://localhost:3000/weather?address=${address}`)
    .then((res) => {
        const resJson = res.json()
            .then((data) => {
                if(data.error) {
                    console.log(error)
                } else {
                    console.log(data)
                }
            })
    })
