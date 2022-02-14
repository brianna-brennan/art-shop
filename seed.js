require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Canvas', sortOrder: 20 },
		{ name: 'Prints', sortOrder: 20 },
		{ name: 'Supplies', sortOrder: 30 },
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		{
			title: 'Mountains',
			image: 'https://live.staticflickr.com/65535/51875928396_ee85867620_z.jpg',
			description: 'Acrylic painting on canvas.',
			price: 52,
			category: categories[0],
		},
		{
			title: 'Flower Print',
			image: 'https://live.staticflickr.com/65535/51881231554_d70431e2b6_z.jpg',
			description: '5x10 print on photo paper.',
			price: 22,
			category: categories[1],
		},
		{
			title: 'Blue Abstract',
			image: 'https://live.staticflickr.com/65535/51880892041_973047360a_z.jpg',
			description: '10x14 painting on canvas.',
			price: 55,
			category: categories[0],
		},
		{
			title: 'Mid Century',
			image:
				'https://res.cloudinary.com/mixtiles-art/image/private/f_auto,t_front_portrait_black/artists/Nouveau%20Prints/Abstract%20N%201%20%5Btop10%5D',
			description: '10x14 painting on canvas.',
			price: 55,
			category: categories[0],
		},
		{
			title: 'Pink Abstract ',
			image:
				'https://static.greatbigcanvas.com/images/singlecanvas_thick_none/jewel-branding/african-abstract,2627561.jpg',
			description: '10x14 painting on canvas.',
			price: 55,
			category: categories[1],
		},
		{
			title: 'Self Portrait',
			image:
				'https://fydn.imgix.net/m%2Fgen%2Fart-print-std-portrait-p1%2Fe5b541a8-8d45-4bf4-8e29-919d879f0bb3.jpg?ar=1%3A1&auto=format%2Ccompress&crop=top&fit=crop&q=75&w=1280',
			description: '10x14 painting on canvas.',
			price: 55,
			category: categories[0],
		},
		{
			title: 'Self Portrait',
			image:
				'https://fydn.imgix.net/m%2Fgen%2Fart-print-std-portrait-p1%2Fe5b541a8-8d45-4bf4-8e29-919d879f0bb3.jpg?ar=1%3A1&auto=format%2Ccompress&crop=top&fit=crop&q=75&w=1280',
			description: '10x14 painting on canvas.',
			price: 55,
			category: categories[1],
		},
		{
			title: 'Mid Century Small',
			image:
				'https://res.cloudinary.com/mixtiles-art/image/private/f_auto,t_front_portrait_black/artists/Nouveau%20Prints/Abstract%20N%201%20%5Btop10%5D',
			description: '5x7 painting on canvas.',
			price: 55,
			category: categories[1],
		},
		{
			title: 'Mountains Print',
			image: 'https://live.staticflickr.com/65535/51875928396_ee85867620_z.jpg',
			description: 'Acrylic painting on canvas.',
			price: 52,
			category: categories[1],
		},
	]);

	console.log(items);

	process.exit();
})();
