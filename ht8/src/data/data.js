const data = [
	{
		"id": 1,
		"title": "Leche Entera",
		"description": "Leche fresca y nutritiva",
		"category": "Lácteos",
		"price": 2.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/389439-1200-900?v=638279914860800000&width=1200&height=900&aspect=true"
	},
	{
		"id": 2,
		"title": "Yogur Natural",
		"description": "Yogur sin azúcar añadida",
		"category": "Lácteos",
		"price": 1.29,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/256112-1200-900?v=637834414329070000&width=1200&height=900&aspect=true"
	},
	{
		"id": 3,
		"title": "Queso Cheddar",
		"description": "Queso cheddar maduro",
		"category": "Lácteos",
		"price": 4.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/315774-1200-900?v=638028274340000000&width=1200&height=900&aspect=true"
	},
	{
		"id": 4,
		"title": "Mantequilla",
		"description": "Mantequilla cremosa",
		"category": "Lácteos",
		"price": 2.79,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/170140-1200-900?v=637605835356500000&width=1200&height=900&aspect=true"
	},
	{
		"id": 5,
		"title": "Huevos",
		"description": "Docena de huevos frescos",
		"category": "Lácteos",
		"price": 2.49,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/362976-1200-900?v=638195241932130000&width=1200&height=900&aspect=true"
	},
	{
		"id": 6,
		"title": "Pan Integral",
		"description": "Pan saludable con granos enteros",
		"category": "Panadería",
		"price": 1.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/350169-1200-900?v=638154527376170000&width=1200&height=900&aspect=true"
	},
	{
		"id": 7,
		"title": "Galletas de Chocolate",
		"description": "Galletas con trozos de chocolate",
		"category": "Panadería",
		"price": 2.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/394165-1200-900?v=638296438525570000&width=1200&height=900&aspect=true"
	},
	{
		"id": 8,
		"title": "Pan de Centeno",
		"description": "Pan de centeno recién horneado",
		"category": "Panadería",
		"price": 3.49,
		"image": "https://ds1e83w8pn0gs.cloudfront.net/fotosmultisite/4594-1.jpg"
		// "image": "https://walmartgt.vtexassets.com/arquivos/ids/272952-1200-900?v=637889386566870000&width=1200&height=900&aspect=true"
	},
	{
		"id": 9,
		"title": "Bagels de Queso",
		"description": "Bagels con queso suave",
		"category": "Panadería",
		"price": 2.49,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/349632-500-auto?v=638152799432130000&width=500&height=auto&aspect=true"
	},
	{
		"id": 10,
		"title": "Donas Glaseadas",
		"description": "Donas con glaseado dulce",
		"category": "Panadería",
		"price": 1.79,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/213790-1200-675?v=637709895937270000&width=1200&height=675&aspect=true"
	},
	{
		"id": 11,
		"title": "Manzanas",
		"description": "Manzanas frescas y jugosas",
		"category": "Frutas",
		"price": 0.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/284889-1200-675?v=637926646308600000&width=1200&height=675&aspect=true"
	},
	{
		"id": 12,
		"title": "Peras",
		"description": "Peras frescas y jugosas",
		"category": "Frutas",
		"price": 1.29,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/254698-1200-675?v=637831498103900000&width=1200&height=675&aspect=true"
	},
	{
		"id": 13,
		"title": "Plátanos",
		"description": "Plátanos maduros y listos para comer",
		"category": "Frutas",
		"price": 0.79,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/295857-1200-675?v=637970713456300000&width=1200&height=675&aspect=true"
	},
	{
		"id": 14,
		"title": "Fresas",
		"description": "Fresas frescas y deliciosas",
		"category": "Frutas",
		"price": 3.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/266727-1200-675?v=637872214220230000&width=1200&height=675&aspect=true"
	},
	{
		"id": 15,
		"title": "Naranjas",
		"description": "Naranjas jugosas y llenas de vitamina C",
		"category": "Frutas",
		"price": 1.29,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/261302-1200-675?v=637848022311200000&width=1200&height=675&aspect=true"
	},
	{
		"id": 16,
		"title": "Pechuga de Pollo",
		"description": "Pechuga de pollo sin hueso y piel",
		"category": "Carnes",
		"price": 6.49,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/342762-1200-675?v=638109597934470000&width=1200&height=675&aspect=true"
	},
	{
		"id": 17,
		"title": "Salmón Fresco",
		"description": "Filete de salmón fresco del Atlántico",
		"category": "Carnes",
		"price": 9.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/360777-1200-675?v=638187575051500000&width=1200&height=675&aspect=true"
	},
	{
		"id": 18,
		"title": "Carne Molida de Res",
		"description": "Carne molida de res magra",
		"category": "Carnes",
		"price": 7.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/346638-1200-675?v=638139082306070000&width=1200&height=675&aspect=true"
	},
	{
		"id": 19,
		"title": "Pollo Entero",
		"description": "Pollo entero fresco",
		"category": "Carnes",
		"price": 5.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/315025-1200-675?v=638025144059300000&width=1200&height=675&aspect=true"
	},
	{
		"id": 20,
		"title": "Pavo Ahumado",
		"description": "Pavo ahumado de calidad premium",
		"category": "Carnes",
		"price": 8.49,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/314057-1200-675?v=638022333996700000&width=1200&height=675&aspect=true"
	},
	{
		"id": 21,
		"title": "Café Molido",
		"description": "Café tostado y molido",
		"category": "Bebidas",
		"price": 4.49,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/323457-1200-675?v=638044150172200000&width=1200&height=675&aspect=true"
	},
	{
		"id": 22,
		"title": "Cerveza IPA",
		"description": "Cerveza India Pale Ale artesanal",
		"category": "Bebidas",
		"price": 5.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/398584-1200-675?v=638307348921330000&width=1200&height=675&aspect=true"
	},
	{
		"id": 23,
		"title": "Agua Mineral",
		"description": "Agua mineral natural sin gas",
		"category": "Bebidas",
		"price": 1.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/273853-1200-675?v=637892087922430000&width=1200&height=675&aspect=true"
	},
	{
		"id": 24,
		"title": "Coca Cola",
		"description": "Refresco coca cola clásico",
		"category": "Bebidas",
		"price": 2.49,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/393414-1200-675?v=638291903128500000&width=1200&height=675&aspect=true"
	},
	{
		"id": 25,
		"title": "Jugo de Naranja",
		"description": "Jugo de naranja fresco y natural",
		"category": "Bebidas",
		"price": 3.99,
		"image": "https://walmartgt.vtexassets.com/arquivos/ids/241170-1200-675?v=637793375412570000&width=1200&height=675&aspect=true"
	}
];

export default data;
