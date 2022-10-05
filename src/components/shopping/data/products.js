const products = [
	{
		id: 1,
		name: "Camisa Ambar Estampada Blanca",
		price: 17700,
		type: "camisa",
		image: {
			imgA: "https://cardon.com.ar/wp-content/uploads/2022/03/240188193GN_01-1154-1000x1353.jpg",
			imgB: "https://cardon.com.ar/wp-content/uploads/2022/03/240188193GN_01-1175-1000x1353.jpg"
		},
		description: "Esta camisa es de diseño contemporáneo y clásico a la vez, de impronta masculina, ideal para una mujer dinámica que debe estar impecable desde la mañana hasta la noche. Está confeccionada en rayón 100% estampado con diseños exclusivos florales, el tejido ideal para usar todo el año",
		shortInfo: ['Cuello clásico chico', 'Corte clásico holgado', 'Cartera entera', 'Manga larga', 'Sin pinzas', 'Botones de nácar', 'Rayón 100%']
	},
	{
		id: 2,
		name: "Campera Clásica de Jean",
		price: 13650,
		type: "campera",
		image: {
			imgA: "https://www.ossira.com/eshop/uploads/products/medium/20220930-071551.jpg",
			imgB: "https://www.ossira.com/eshop/uploads/products/medium/20220930-071611_rollover.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Manga larga', 'Botones metalizados']
	},
	{
		id: 3,
		name: "Camisa Alba Blanca",
		price: 18990,
		type: "camisa",
		image: {
			imgA: "https://cardon.com.ar/wp-content/uploads/2022/09/241402029GN_01-1642-1000x1353.jpg",
			imgB: "https://cardon.com.ar/wp-content/uploads/2022/09/241402029GN_01-1654-1000x1353.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Manga larga']
	},
	{
		id: 4,
		name: "Blusa Perimol Broderie",
		price: 27750,
		type: "blusa",
		image: {
			imgA: "https://cardon.com.ar/wp-content/uploads/2022/09/241227000AC_01-0796-1000x1353.jpg",
			imgB: "https://cardon.com.ar/wp-content/uploads/2022/09/241227000AC_01-0813-1000x1353.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']
	},
	{
		id: 5,
		name: "Pantalón Cargo de Gabardina Camuflado",
		price: 12375,
		type: "pantalon",
		image: {
			imgA: "https://www.ossira.com/eshop/uploads/products/medium/20220819-032337.jpg",
			imgB: "https://www.ossira.com/eshop/uploads/products/medium/20220819-032410_rollover.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']
	},
	{
		id: 6,
		name: "Mono Corto Denim con Botones",
		price: 11745,
		type: "mono",
		image: {
			imgA: "https://www.ossira.com/eshop/uploads/products/medium/20220818-055319.jpg",
			imgB: "https://www.ossira.com/eshop/uploads/products/medium/20220822-030343_rollover.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']
	},
	{
		id: 7,
		name: "Camisa Turquesa Rosa",
		price: 17500,
		type: "camisa",
		image: {
			imgA: "https://cardon.com.ar/wp-content/uploads/2021/03/SI-240510002-52-5-1000x1353.jpg",
			imgB: "https://cardon.com.ar/wp-content/uploads/2021/03/SI-240510002-52-9-1000x1353.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']

	},
	{
		id: 8,
		name: "Pantalón de Vestir con Pinzas y Elastico",
		price: 14850,
		type: "pantalon",
		image: {
			imgA: "https://www.ossira.com/eshop/uploads/products/medium/20220818-033743.jpg",
			imgB: "https://www.ossira.com/eshop/uploads/products/medium/20220818-033759_rollover.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']
	},
	{
		id: 9,
		name: "Kimono Mainque Negro",
		price: 42950,
		type: "blusa",
		image: {
			imgA: "https://cardon.com.ar/wp-content/uploads/2022/09/264510012GF_99-0078-1000x1353.jpg",
			imgB: "https://cardon.com.ar/wp-content/uploads/2022/09/264510012GF_99-0081-1000x1353.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']
	},
	{
		id: 10,
		name: "Pantalón de Lino con Elastico",
		price: 12900,
		type: "pantalon",
		image: {
			imgA: "https://www.ossira.com/eshop/uploads/products/medium/20220819-065900.jpg",
			imgB: "https://www.ossira.com/eshop/uploads/products/medium/20220819-065922_rollover.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']

	},
	{
		id: 11,
		name: "Pantalón Trendy Gabardina Print",
		price: 11900,
		type: "pantalon",
		image: {
			imgA: "https://www.ossira.com/eshop/uploads/products/medium/20220819-015932.jpg",
			imgB: "https://www.ossira.com/eshop/uploads/products/medium/20220819-015957_rollover.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']

	},
	{
		id: 12,
		name: "Blusa Rayada",
		price: 27300,
		type: "blusa",
		image: {
			imgA: "https://cardon.com.ar/wp-content/uploads/2022/09/241640014AC_33-4204-1000x1353.jpg",
			imgB: "https://cardon.com.ar/wp-content/uploads/2022/09/241640014AC_33-4209-1000x1353.jpg"
		},
		description: "No hay descripción disponible",
		shortInfo: ['Descripcion 1', 'Descripcion 2', 'Descripcion 3']

	},
]

export { products }