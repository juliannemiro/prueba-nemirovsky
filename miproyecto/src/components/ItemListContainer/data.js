const productosList = [
    {
        id: 1,
        destino: 'Córdoba',
        imagen: 'https://images.pexels.com/photos/4057646/pexels-photo-4057646.jpeg?cs=srgb&dl=pexels-sesinando-4057646.jpg&fm=jpg',
        duracion: '7 días',
        hotelEstrellas: 3,
        precio: '$55.000',
        traslado: 'Avión',
    },
    {
        id: 2,
        destino: 'Mendoza',
        imagen: 'https://images.pexels.com/photos/573122/pexels-photo-573122.jpeg?cs=srgb&dl=pexels-diego-rezende-573122.jpg&fm=jpg',
        duracion: '7 días',
        hotelEstrellas: 5,
        precio: '$60.000',
        traslado: 'Avión'
    },
    // {
    //     id: 3,
    //     destino: 'Santa Cruz',
    //     iamgen: 'https://images.pexels.com/photos/2864014/pexels-photo-2864014.jpeg?cs=srgb&dl=pexels-anand-dandekar-2864014.jpg&fm=jpg',
    //     duracion: '10 días',
    //     hotelEstrellas: 5,
    //     precio: '$10.000',
    //     traslado: 'Avión'
    // },
    {
        id: 4,
        destino: 'Misiones',
        imagen: 'https://images.pexels.com/photos/1296396/pexels-photo-1296396.jpeg?cs=srgb&dl=pexels-luis-poletti-1296396.jpg&fm=jpg',
        duracion: '6 días',
        hotelEstrellas: 4,
        precio: '$40.000',
        traslado: 'Avión'
    },
    // {
    //     id: 5,
    //     destino: 'Gualeguaychí',
    //     imagen: 'https://www.istockphoto.com/es/foto/playa-con-gente-ba%C3%B1%C3%A1ndose-en-el-r%C3%ADo-gualeguaychu-entre-r%C3%ADos-argentina-gm1295552299-389245764',
    //     duracion: '4 días',
    //     hotelEstrellas: 3,
    //     precio: '$10.000',
    //     traslado: 'Micro'
    // },
]

const getData = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productosList)
    }, 2000);
});
export default getData