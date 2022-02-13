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
			image: '',
			description: '5x10 print on photo paper.',
			price: 22,
			category: categories[1],
		},
		{
			title: 'Mermaid Painting',
			image: '',
			description: '10x14 painting on canvas.',
			price: 55,
			category: categories[2],
		},
	]);

	console.log(items);

	process.exit();
})();
