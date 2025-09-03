
// Array of electronic device categories with related products
const categories = {
	'1': {
		id: 1,
		name: 'Smartphones',
		products: [
			{
				id: 101,
				name: 'iPhone 15',
				description: 'Apple smartphone with A16 Bionic chip and advanced camera system.',
				price: 999
			},
			{
				id: 102,
				name: 'Samsung Galaxy S24',
				description: 'Flagship Android phone with high refresh rate display and powerful processor.',
				price: 899
			},
			{
				id: 103,
				name: 'Google Pixel 8',
				description: 'Google smartphone with Tensor G3 chip and advanced AI features.',
				price: 799
			},
			{
				id: 104,
				name: 'OnePlus 12',
				description: 'High-performance Android phone with fast charging.',
				price: 749
			}
		]
	},
	'2': {
		id: 2,
		name: 'Laptops',
		products: [
			{
				id: 201,
				name: 'MacBook Pro 14',
				description: 'Apple laptop with M3 chip and Liquid Retina XDR display.',
				price: 1999
			},
			{
				id: 202,
				name: 'Dell XPS 13',
				description: 'Compact Windows laptop with InfinityEdge display and long battery life.',
				price: 1299
			},
			{
				id: 203,
				name: 'HP Spectre x360',
				description: 'Convertible laptop with touch display and long battery life.',
				price: 1399
			},
			{
				id: 204,
				name: 'Lenovo ThinkPad X1 Carbon',
				description: 'Business laptop with lightweight design and robust security.',
				price: 1599
			},
			{
				id: 205,
				name: 'Asus ROG Zephyrus G14',
				description: 'Gaming laptop with powerful GPU and compact form factor.',
				price: 1799
			}
		]
	},
	'3': {
		id: 3,
		name: 'Tablets',
		products: [
			{
				id: 301,
				name: 'iPad Pro',
				description: 'Apple tablet with M2 chip and ProMotion display.',
				price: 1099
			},
			{
				id: 302,
				name: 'Samsung Galaxy Tab S9',
				description: 'Android tablet with AMOLED display and S Pen support.',
				price: 799
			},
			{
				id: 303,
				name: 'Microsoft Surface Pro 9',
				description: 'Windows tablet with detachable keyboard and stylus support.',
				price: 1199
			}
		]
	},
	'4': {
		id: 4,
		name: 'Smartwatches',
		products: [
			{
				id: 401,
				name: 'Apple Watch Series 9',
				description: 'Smartwatch with health tracking and always-on display.',
				price: 399
			},
			{
				id: 402,
				name: 'Garmin Fenix 7',
				description: 'Rugged multisport GPS watch with long battery life.',
				price: 699
			},
			{
				id: 403,
				name: 'Samsung Galaxy Watch 6',
				description: 'Android smartwatch with fitness tracking and AMOLED display.',
				price: 349
			},
			{
				id: 404,
				name: 'Fitbit Sense 2',
				description: 'Health-focused smartwatch with stress management tools.',
				price: 299
			}
		]
	},
	'5': {
		id: 5,
		name: 'Headphones',
		products: [
			{
				id: 501,
				name: 'Sony WH-1000XM5',
				description: 'Noise-cancelling over-ear headphones with long battery life.',
				price: 399
			},
			{
				id: 502,
				name: 'Apple AirPods Pro 2',
				description: 'Wireless earbuds with active noise cancellation and spatial audio.',
				price: 249
			},
			{
				id: 503,
				name: 'Bose QuietComfort Ultra',
				description: 'Premium headphones with world-class noise cancellation.',
				price: 379
			},
			{
				id: 504,
				name: 'Sennheiser Momentum 4',
				description: 'High-fidelity wireless headphones with adaptive noise cancellation.',
				price: 349
			},
			{
				id: 505,
				name: 'Jabra Elite 7 Pro',
				description: 'True wireless earbuds with adjustable ANC and long battery life.',
				price: 199
			},
			{
				id: 506,
				name: 'Beats Studio Buds+',
				description: 'Compact wireless earbuds with powerful sound and ANC.',
				price: 169
			},
			{
				id: 507,
				name: 'Anker Soundcore Life Q35',
				description: 'Affordable over-ear headphones with hybrid ANC.',
				price: 129
			}
		]
	}
};