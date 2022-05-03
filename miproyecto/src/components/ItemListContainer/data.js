const productosList = [
    {
        id: 1,
        categoria: 'nacional',
        nombre: 'River Plate',
        descripcion: 'Camiseta principal de River Plate temporada 2022',
        imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-river-adidas-oficial-blanca-100020fq7660001-_3_1.jpg',
        stock: 7,
        precio: '$12.000',
    },
    {
        id: 2,
        categoria: 'nacional',
        nombre: 'Boca Juniors',
        descripcion: 'Camiseta principal de Boca Juniors temporada 2022',
        imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-boca-adidas-oficial-azul-24965351-100020gu1883001-1.jpg',
        stock: 7,
        precio: '$12.000',
    },
    {
        id: 3,
        categoria: 'nacional',
        nombre: 'Ferro Carril Oeste',
        descripcion: 'Camiseta principal de Ferro Carril Oeste temporada 2022',
        imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSUc4ZQ9eBEYVSQCuhSyFUyyihqECjBPJ3UzOx6mJ1wWauGe9ADOkr4Pn8Mso62Ca-tWX22HycRtddmBhSEw50vN_xcZ_Ap6rWNXgs1gltl96NRYM3moAA&usqp=CAE',
        stock: 7,
        precio: '$12.000',
    },
    {
        id: 4,
        categoria: 'nacional',
        nombre: 'Racing Club',
        descripcion: 'Camiseta principal de Racing Club temporada 2022',
        imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-racing-kappa-oficial-blanca-85569411-3950235165zw801-1.jpg',
        stock: 7,
        precio: '$15.000',
    },
    {
        id: 5,
        categoria: 'internacional',
        nombre: 'Sampdoria',
        descripcion: 'Camiseta principal de Sampdoria temporada 2021/2022',
        imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgOkETUuGEQDi06UKHGMxjitcNl-e6I-SjKZ-q9b3iSA3_XHm9FQie67JbAgJ1mMI63drAHwhu7yaRuqDlDPv_jq3XBoTDbnPuDxT-TsqZ4Qb6Xhu62tcv&usqp=CAE',
        stock: 7,
        precio: '$15.000',
    },
    {
        id: 6,
        categoria: 'internacional',
        nombre: 'Barcelona',
        descripcion: 'Camiseta principal de Barcelona temporada 2021/2022',
        imagen: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7bc7f0de/products/NI_DB5896-406/NI_DB5896-406-1.JPG',
        stock: 7,
        precio: '$15.000',
    },
    {
        id: 7,
        categoria: 'internacional',
        nombre: 'Arsenal',
        descripcion: 'Camiseta titular de Arsenal temporada 2021/2022',
        imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1df6811cd9624417bb92ab7400d693ff_9366/Camiseta_Local_Arsenal_Granate_FH7816_01_laydown.jpg',
        stock: 7,
        precio: '$9.499',
    },
    {
        id: 8,
        categoria: 'seleccion',
        nombre: 'Colombia',
        descripcion: 'Camiseta titular de la Selección Colombia Mundial 2018',
        imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb35ee48b2f94e45b0e2aada0122f040_9366/Camiseta_de_visitante_Colombia_Azul_FI5295_01_laydown.jpg',
        stock: 7,
        precio: '$10.999',
    },
    {
        id: 8,
        categoria: 'seleccion',
        nombre: 'Argentina',
        descripcion: 'Camiseta principal de la Selección Argentina Mundial 2018',
        imagen: 'https://sporting.vteximg.com.br/arquivos/ids/261478-1500-1500/6FS6565-000-1.jpg?v=637521098468570000',
        stock: 7,
        precio: '$10.999',
    }
]

const getData = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productosList)
    }, 2000);
});
export default getData