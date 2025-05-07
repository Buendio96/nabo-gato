import image from '../../assets/images/menu/byDefault.png'

export const menu = [
	{
		id: 'ramen',
		title: 'Ramen ラーメン',
		subtitle: 'Japońska zupa z pszenicznym makaronem ramen i aromatycznym bulionem. Tradycyjnie podawana z dodatkami takimi jak jajko, mięso, warzywa i przyprawy.',
		slides: [
			{
				image: image,
				allergens: ['gluten', 'nuts', 'eggs', 'soya'],
				name: 'Tan Tan Men Ramen',
				price: '49,00 zł',
				description: 'gęsty, lekko pikantny bulion wołowo-drobiowy z orzechowo sezamową tare, pikantna wołowina, marynowane jajko, blanszowane pak choi, lekko pikantny bulion wołowo-drobiowy z orzechowo sezamową tare, pikantna wołowina, marynowane jajko, blanszowane pak choi lekko pikantny bulion wołowo-drobiowy z orzechowo sezamową tare, pikantna wołowina, marynowane jajko, blanszowane pak choi grillowane brązowe pieczarki, nori, olej chilli, makaron ramen',
			},
			{
				image: image,
				allergens: ['gluten', 'fish', 'eggs', 'soya', 'orange'],
				name: 'Shoyu Ramen',
				price: '49,00 zł',
				description: 'klarowny bulion wołowo-drobiowy z dodatkiem tare katsuobushi, boczek Chashu, marynowane jajko, grillowana kukurydza, narutomaki, nori, olej czosnkowy, makaron ramen',
			}
		]
	},
	{
		id: 'sushiSets',
		title: 'Zestawy Sushi 寿司セット"',
		subtitle: 'Starannie skomponowane zestawy sushi, idealne do dzielenia się lub odkrywania różnorodnych smaków Japonii — od klasycznych nigiri po uramaki i futomaki.Do każdego zestawu dokładamy komplet pałeczek, sos sojowy, wasabi i imbir.',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Hoso maki set (24szt.)',
				price: '59,00 zł',
				description: `• Hoso- maki z łososiem, serkiem, szczypiorkiem i sosem sriracha 6szt.<br>• Hoso- maki z krewetką 6szt.<br>• Hoso- maki z tykwą kanpyo i sezamem 6szt.<br>• Hoso- maki z ogórkiem i sezamem 6szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Mini set (16szt.)',
				price: '59,00 zł',
				description: `• Futo łosoś Edomae grill 6szt.<br>• California vegi tempura 4szt.<br>• Hoso maki krewetka 6szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Vegi set (18szt.)',
				price: '59,00 zł',
				description: `• Futo vegi tempura 6szt.<br>• California tofu awokado 4szt.<br>• Hoso- maki mix warzyw, serek, sezam 6szt.<br>• Nigiri awokado, kanpyo, sezam 2szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Vegan set (12szt.)',
				price: '55,00 zł',
				description: `• Futo Tofu 6szt.<br>• California awokado vegi tempura 4szt.<br>• Gunkan goma wakame 2szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Nigiri set (12szt.)',
				price: '85,00 zł',
				description: `• Tuńczyk 2szt.<br>• Łosoś 2szt.<br>• Dorada 2szt.<br>• Tamago 2szt.<br>• Krewetka 2szt.<br>• Maślana 2szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Futomaki set (24szt.)',
				price: '109,00 zł',
				description: `• Futo łosoś 6szt.<br>• Futo ebi temura 6szt.<br>• Futo maślana grill 6szt.<br>• Futo tuńczyk edomae (cała rolka w tempurze) 6szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'California set (16szt.)',
				price: '99,00 zł',
				description: `• California awokado 4szt.<br>• California Dorada grill 4szt.<br>• California łosoś edomae 4szt.<br>• California tuńczyk edomae 4szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Mix set nr. 1 (24szt.)',
				price: '125,00 zł',
				description: `• Futo ebi panko 6szt.<br>• California awokado 4szt.<br>• California łosoś nabo gato 4szt.<br>• California tuńczyk ebi tempura 4szt.<br>• Hoso- maki krewetka 6szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Mix set nr. 2 (24szt.)',
				price: '125,00 zł',
				description: `• Futo łosoś edomae grill 6szt.<br>• California awokado 4szt.<br>• California łosoś warzywa tempura 4szt.<br>• California tuńczyk ebi tempura 4szt.<br>• Hoso- maki łosoś sezam 6szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Mix set nr. 3 (24szt.) ŁOSOSIOWY',
				price: '125,00 zł',
				description: `• Futo łosoś 6szt.<br>• California łosoś nabo gato 4szt.<br>• California łosoś Edomae 4szt.<br>• California łosoś Kombu 4szt.<br>• Hoso- maki łosoś sezam 6szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Mix set XL (40szt.)',
				price: '215,00 zł',
				description: `• Futo łosos edo grill 6szt.<br>• Futo ebi tempura 6szt.<br>• California awokado 4szt.<br>• California łosoś nabo gato 4szt.<br>• Califonia tuńczyk ebi tempra 4szt.<br>• Hoso- maki tuńczyk sriracha 6szt.<br>• Nigiri: łosoś / łosoś kombu / tuńczyk / tamago / krewetka 10szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Mix set XXL (64szt.)',
				price: '325,00 zł',
				description: `• Futo łosoś edomae grill 6szt.<br>• Futo ebi tempura 6szt.<br>• Futo łosoś 6szt.<br>• California awokado 4szt.<br>• California tuńczyk ebi tempura 4szt.<br>• California łosoś grill 8szt.<br>• California vegi tempura 4szt.<br>• Hoso- maki łosoś sezam 6szt.<br>• Hoso- maki tuńczyk sriracha 6szt.<br>• Nigiri: łosoś / łosoś kombu / tuńczyk / krewetka / tamago / maślana / dorada grill 14szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Nabo gato grill set (26szt.)',
				price: '139,00 zł',
				description: `• Futo ebi panko 6szt.<br>• California łosoś grill 4szt.<br>• California węgorz grill 4szt.<br>• California dorada grill 4szt.<br>• Hoso-maki łosos edo grill 6szt.<br>• Nigiri kalmar tempura 2szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Gato grill set (12szt.)',
				price: '69,00 zł',
				description: `• Futo ebi tempura 6szt.<br>• California dorada grill 4szt.<br>• Nigiri łosoś tempra 2szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Nabo grill set (12szt.)',
				price: '69,00 zł',
				description: `• Futo ebi panko 6szt.<br>• California łosoś grill 4szt.<br>• Nigiri kalmar tempura 2szt.`,
			},
			{
				image: image,
				allergens: [],
				name: 'Pół na pół set (32szt.)',
				price: '189,00 zł',
				description: `• Futo łosoś 6szt.<br>• California łosoś kombu 4szt.<br>• California tuńczyk 4szt.<br>• Nigiri łosoś nabo gato 2szt.<br>• Futo ebi tempura 6szt.<br>• California łosoś grill 4szt.<br>• California awokado 4szt.<br>• Nigiri kalmar tempura 2szt.`,
			}
		]

	},
	{
		id: 'futomaki',
		title: 'Futomaki (6szt.) 太巻き',
		subtitle: 'Duże rolki maki sushi, każda pokrojona na 6 kawałków. W środku świeża sałata, ogórek, awokado i starannie dobrane dodatki — idealne do odkrywania różnorodnych smaków.',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Futo vegi',
				price: '22,00 zł',
				description: 'Sweet majo, oshinko, kanpyo, omlet tamago, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo vegi tempura',
				price: '24,00 zł',
				description: 'Sweet majo, warzywa w tempurze, oshinko, sos kabayaki, sezam, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo łosoś',
				price: '28,00 zł',
				description: 'Serek, łosoś, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo maślana',
				price: '27,00 zł',
				description: 'Sweet majo, grillowana maślana, oshinko, sos kabayaki, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo surimi',
				price: '23,00 zł',
				description: 'Sweet majo, paluszek krabowy, kanpyo, kawior tobiko, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo krewetka',
				price: '28,00 zł',
				description: 'Sweet majo, krewetka parzona, omlet tamago, kanpyo, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo ebi tempura',
				price: '30,00 zł',
				description: 'Sweet majo, krewetka w tempurze, kanpyo, sos kabayaki, sos sweet chili, sezam, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo ebi panko',
				price: '30,00 zł',
				description: 'Sweet majo, krewetka w panko, oshinko, sos kabayaki, sos sweet chili, sezam, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo tuńczyk Edomae',
				price: '32,00 zł',
				description: 'Serek, marynowany tuńczyk, oshinko, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo węgorz grill',
				price: '36,00 zł',
				description: 'Sweet majo, węgorz, kanpyo, płatki tempury, sos kabayaki, sezam, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo węgorz tempura',
				price: '38,00 zł',
				description: 'Sweet majo, węgorz w tempurze, brzoskwinia, sos kabayaki, sezam, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo tatar łosoś',
				price: '36,00 zł',
				description: 'Sweet majo, tatar łosoś (łosoś, kapary, szczypiorek, sos sriracha, sos sojowy, pieprz), oshinko, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo tatar tuńczyk',
				price: '38,00 zł',
				description: 'Sweet majo, tatar tuńczyk (tuńczyk, por, awokado, sos sriracha, sos sojowy, sezam, olej sezamowy), sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo kalmar tempura',
				price: '30,00 zł',
				description: 'Sweet majo, kalmar w tempurze, oshinko, sos kabayaki, sos sweet chili, sezam, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo łosoś edomae grill',
				price: '29,00 zł',
				description: 'Sweet majo, marynowany grillowany łosoś, ananas, sos kabayaki, sezam, sałata, ogórek, awokado',
			},
			{
				image: image,
				allergens: [],
				name: 'Futo łosoś tempura',
				price: '30,00 zł',
				description: 'Sweet majo, łosoś w tempurze, kanpyo, sos kabayaki, sezam, sałata, ogórek, awokado',
			}
		]
	},
	{
		id: "california",
		title: "California – maki roll (4szt.) カリフォルニア巻き",
		subtitle: "Maki – sushi zawijane w sposób kalifornijski (ryżem na zewnątrz)",
		slides: [
			{
				image: image,
				allergens: [],
				name: "California vegi tempura",
				price: "21,00 zł",
				description: "Sweet majo, warzywa w tempurze, oshinko, sos kabayaki, sos sweet chili, na wierzchu: sezam, sos kabayki, sos sweet chili",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California awokado vegi tempura",
				price: "26,00 zł",
				description: "Sweet majo, warzywa w tempurze, oshinko, na wierzchu: awokado, sos kabayaki, sezam",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California tofu awokado",
				price: "25,00 zł",
				description: "Smażone tofu, kanpyo, na wierzchu: awokado, sos mango, sezam",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California awokado",
				price: "29,00 zł",
				description: "Sweet majo, krewetka w panko, oshinko, na wierzchu: awokado, sos sweet chili i sezam",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California łosoś",
				price: "23,00 zł",
				description: "Serek śmietanowy, łosoś, awokado, ogórek, na wierzchu: sezam",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California łosoś nabo gato",
				price: "29,00 zł",
				description: "Serek śmietankowy, łosoś, awokado, ogórek, na wierzchu: łosoś, kawior tobiko",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California łosoś grill",
				price: "28,00 zł",
				description: "Serek śmietanowy, paluszek krabowy, kanpyo, na wierzchu: łosoś, dressing, sos kabayaki",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California łosoś Edomae",
				price: "30,00 zł",
				description: "Serek śmietanowy, marynowany łosoś w stylu edomae, awokado, kanpyo, na wierzchu: łosoś, sezam",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California avokado łosoś kombu",
				price: "32,00 zł",
				description: "Sweet majo, łosoś marynowany w wodorostach kombu, ogórek, oshinko, na wierzchu: awokado, sezam",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California łosoś ebi tempura",
				price: "32,00 zł",
				description: "Spicy majo, krewetka w tempurze, oshinko, awokado, na wierzchu: łosoś, spicy majo",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California węgorz grill",
				price: "36,00 zł",
				description: "Serek śmietankowy, krewetka w tempurze, kanpyo, na wierzchu: węgorz, sos kabayaki, sezam",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California dorada grill",
				price: "28,00 zł",
				description: "Serek śmietankowy, krewetka parzona, awokado, kanpyo, na wierzchu: dorada, dressing, sos kabayaki",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California tuńczyk",
				price: "32,00 zł",
				description: "Serek śmietankowy, tuńczyk, oshinko, awokado, na wierzchu: tuńczyk, sos sriracha",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California tuńczyk edomae",
				price: "35,00 zł",
				description: "Serek śmietankowy, tuńczyk tataki marynowany w stylu edomae, awokado, ogórek, na wierzchu: tuńczyk, kizami wasabi",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California tuńczyk ebi tempura",
				price: "36,00 zł",
				description: "Spicy majo, krewetka w tempurze, oshinko, awokado, na wierzchu: tuńczyk tataki, spicy majo",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California ebi tempura",
				price: "28,00 zł",
				description: "Sweet majo, krewetka w tempurze, oshinko, awokado, na wierzchu: sezam, sos kabayaki, sos sweet chili",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California ebi panko",
				price: "28,00 zł",
				description: "Sweet majo, krewetka w panko, oshinko, awokado, na wierzchu: sos kabayaki, sos sweet chili, sezam",
				link: "#"
			},
			{
				image: image,
				allergens: [],
				name: "California tatar ebi panko",
				price: "36,00 zł",
				description: "Sweet majo, krewetka w panko, oshinko, awokado, na wierzchu: tatar z łososia (łosoś, kapary, szczypiorek, sos sojowy, sriracha)",
				link: "#"
			}
		]
	},
	{
		id: 'hosomaki',
		title: 'Hoso-maki (6szt.) 細巻き',
		subtitle: 'Rolki maki-sushi z jednym składnikiem i wasabi.',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Łosoś',
				price: '20,00 zł',
				description: 'Tradycyjna rolka z łososiem i wasabi. Prosto i klasycznie.',
			},
			{
				image: image,
				allergens: [],
				name: 'Tuńczyk',
				price: '22,00 zł',
				description: 'Delikatny tuńczyk w klasycznej formie hoso-maki z dodatkiem wasabi.',
			},
			{
				image: image,
				allergens: [],
				name: 'Krewetka',
				price: '20,00 zł',
				description: 'Parzona krewetka z nutą wasabi, zawinięta w klasyczny ryż i nori.',
			},
			{
				image: image,
				allergens: [],
				name: 'Tamago',
				price: '15,00 zł',
				description: 'Słodki japoński omlet tamago – łagodna alternatywa w klasycznej formie maki.',
			},
			{
				image: image,
				allergens: [],
				name: 'Surimi',
				price: '16,00 zł',
				description: 'Paluszek krabowy (surimi) z dodatkiem wasabi, owinięty ryżem i nori.',
			},
			{
				image: image,
				allergens: ['wegetariańskie'],
				name: 'Warzywa',
				price: '16,00 zł',
				description: 'Wegetariańska propozycja z mieszanką (ogórek/kanpyo/oshinko/awokado) klasycznych japońskich warzyw i wasabi.',
			},
		]
	},
	{
		id: 'nigiri',
		title: 'Nigiri (2szt.) 握り寿司',
		subtitle: 'Ręcznie formowane kulki ryżu z plastrem ryby lub dodatkiem na wierzchu.',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Awokado, kanpyo, sezam',
				price: '15,00 zł',
				description: 'Delikatne połączenie awokado, marynowanej tykwy i sezamu – lekka, roślinna wersja nigiri.',
			},
			{
				image: image,
				allergens: [],
				name: 'Łosoś',
				price: '19,00 zł',
				description: 'Klasyczne nigiri z surowym łososiem – czysty smak świeżej ryby na lekko zaprawionym ryżu.',
			},
			{
				image: image,
				allergens: [],
				name: 'Łosoś edomae',
				price: '20,00 zł',
				description: 'Marynowany łosoś w stylu Edo – technika z Tokio wydobywająca głębię umami.',
			},
			{
				image: image,
				allergens: [],
				name: 'Łosoś kombu',
				price: '20,00 zł',
				description: 'Łosoś dojrzewający w glonach kombu – subtelny smak oceanu z aksamitną teksturą.',
			},
			{
				image: image,
				allergens: [],
				name: 'Łosoś nabogato',
				price: '21,00 zł',
				description: 'Wzbogacona wersja łososia z dodatkowymi składnikami – pełnia smaku i elegancji.',
			},
			{
				image: image,
				allergens: [],
				name: 'Tuńczyk',
				price: '23,00 zł',
				description: 'Mięsisty, lekko słodki tuńczyk – klasyczne nigiri dla miłośników głębokich smaków.',
			},
			{
				image: image,
				allergens: [],
				name: 'Tuńczyk edomae',
				price: '24,00 zł',
				description: 'Marynowany tuńczyk w stylu Edo – intensywny, pełen umami smak tradycji.',
			},
			{
				image: image,
				allergens: [],
				name: 'Węgorz',
				price: '24,00 zł',
				description: 'Grillowany węgorz z sosem kabayaki – słodko-słony japoński klasyk.',
			},
			{
				image: image,
				allergens: [],
				name: 'Krewetka',
				price: '19,00 zł',
				description: 'Delikatna, gotowana krewetka – subtelne i zrównoważone nigiri.',
			},
			{
				image: image,
				allergens: [],
				name: 'Dorada',
				price: '19,00 zł',
				description: 'Lśniąca dorada o łagodnym smaku – elegancja i świeżość w jednym.',
			},
			{
				image: image,
				allergens: [],
				name: 'Tamago',
				price: '15,00 zł',
				description: 'Słodki japoński omlet – delikatny, puszysty i aromatyczny.',
			},
			{
				image: image,
				allergens: [],
				name: 'Kalmar/krewetka w tempurze',
				price: '22,00 zł',
				description: 'Chrupiąca tempura z kalmarem lub krewetką – kontrast faktur na miękkim ryżu.',
			}
		]
	},
	{
		id: 'appetizers',
		title: 'Przystawki 前菜',
		subtitle: 'Różnorodne smaki i tekstury w jednym kęsie, idealne do rozpoczęcia kulinarnej podróży',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Pierożki gyoza z kaczką',
				price: '39,00 zł',
				description: 'Smażone pierożki z soczystym farszem z kaczki – miękkie na zewnątrz, aromatyczne w środku.',
			},
			{
				image: image,
				allergens: [],
				name: 'Pierożki gyoza z krewetkami',
				price: '35,00 zł',
				description: 'Delikatne pierożki z farszem z krewetek – lekko miękkie i pełne morskiego smaku.',
			},
			{
				image: image,
				allergens: [],
				name: 'Krewetki w tempurze/panko 5szt.',
				price: '35,00 zł',
				description: 'Chrupiące krewetki w tempurze lub panko – klasyczna japońska przystawka.',
			},
			{
				image: image,
				allergens: [],
				name: 'Krewetki w tempurze/panko 8szt.',
				price: '55,00 zł',
				description: 'Większa porcja chrupiących krewetek – idealna do dzielenia się.',
			},
			{
				image: image,
				allergens: [],
				name: 'Warzywa w tempurze',
				price: '33,00 zł',
				description: 'Sezonowe warzywa w lekkim cieście tempura – chrupkie i pełne świeżości.',
			},
			{
				image: image,
				allergens: [],
				name: 'Kimchi',
				price: '19,00 zł',
				description: 'Pikantna koreańska kiszonka z kapusty – fermentowany akcent do każdego dania.',
			},
			{
				image: image,
				allergens: [],
				name: 'Fasolki edamame',
				price: '17,00 zł',
				description: 'Gotowane, lekko solone młode soje – zdrowa, pełna białka przekąska.',
			},
			{
				image: image,
				allergens: [],
				name: 'Sałatka wakame',
				price: '25,00 zł',
				description: 'Marynowane glony wakame z sezamem – świeży, morski smak w lekko słodkiej odsłonie.',
			}
		]
	},
	{
		id: 'tartars',
		title: 'Tatary タルタル',
		subtitle: 'Świeżo siekane tatary, podawane w koszyku z awokado, z kiszonkami i chipsami krewetkowymi.',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Łosoś 120g',
				price: '50,00 zł',
				description: 'Kapary, szczypiorek, sos sojowy, sriracha, pieprz',
			},
			{
				image: image,
				allergens: [],
				name: 'Tuńczyk 120g',
				price: '60,00 zł',
				description: 'Por, awokado, sos sojowy, sriracha, sezam, olej sezamowy',
			}
		]
	},
	{
		id: 'gunkans',
		title: 'Gunkan Sushi (2szt.) 軍艦寿司',
		subtitle: 'Ręcznie formowane kulki ryżu, owinięte wodorostem nori, lub ogórkiem z nadzieniem. Kształtem przypominające łódkę.',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Łosoś tatar',
				price: '23,00 zł',
				description: 'Tatar: kapary, szczypiorek, sos sojowy, sriracha, pieprz',
			},
			{
				image: image,
				allergens: [],
				name: 'Krewetka',
				price: '23,00 zł',
				description: 'Salatka: krewetka, surimi, tobiko, awokado, sweet majo',
			},
			{
				image: image,
				allergens: [],
				name: 'Tuńczyk tatar',
				price: '25,00 zł',
				description: 'Tatar: por, awokado, sos sojowy, sriracha, sezam, olej sezamowy',
			},
			{
				image: image,
				allergens: [],
				name: 'Wodorosty goma wakame',
				price: '19,00 zł',
				description: 'Orzeźwiająca sałatka z wodorostów wakame, skropiona sezamowym dressingiem, idealna jako lekka przystawka.',
			}
		]
	},
	{
		id: 'sashimi',
		title: 'Sashimi 刺身',
		subtitle: 'Japoński sposób serwowania surowej ryby i owoców morza, z różnymi dodatkami',
		slides: [
			{
				image: image,
				allergens: [],
				name: '3 ryby 150g',
				price: '60,00 zł',
				description: 'Do wyboru: łosoś, tuńczyk, dorada, maślana – świeże, wysokiej jakości sashimi.',
			},
			{
				image: image,
				allergens: [],
				name: '5 ryb 250g',
				price: '90,00 zł',
				description: 'Do wyboru: łosoś, tuńczyk, dorada, maślana – większa porcja dla smakoszy.',
			}
		]

	},
	{
		id: 'oNigiri',
		title: 'O-nigiri (1szt.) おにぎり',
		subtitle: 'Ręcznie formowana kanapka ryżowa w kształcie kuli, z różnymi nadzieniami.',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Łosoś, awokado, sos sojowy',
				price: '24,00 zł',
				description: 'Świeży łosoś z awokado, podany z sosem sojowym – klasyczne i pyszne.',
			},
			{
				image: image,
				allergens: [],
				name: 'Łosoś tempura',
				price: '25,00 zł',
				description: 'Chrupiący łosoś w tempurze z sosem kabayaki i sezamem.',
			},
			{
				image: image,
				allergens: [],
				name: 'Tuńczyk tatar',
				price: '26,00 zł',
				description: 'Świeży tuńczyk tatar, idealnie przyprawiony – intensywny i soczysty smak.',
			},
			{
				image: image,
				allergens: [],
				name: 'Krewetka',
				price: '24,00 zł',
				description: 'Połączenie krewetek, surimi, tobiko, awokado i słodkiego majonezu – wyraziste i kremowe.',
			},
			{
				image: image,
				allergens: [],
				name: 'Wodorosty goma wakame',
				price: '20,00 zł',
				description: 'Smakowite wodorosty goma wakame – idealna wegetariańska propozycja.',
			}
		]
	},
	{
		id: 'misoSoups',
		title: 'Zupa misoshiru 味噌汁',
		subtitle: 'Zupa robiona na bazie pasty miso i bulionu rybnego „dashi”',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Miso klasyczne',
				price: '15,00 zł',
				description: 'Wodorosty wakame, tofu, grzyby shitake, szczypior, sezam – klasyczne, rozgrzewające miso.',
			},
			{
				image: image,
				allergens: [],
				name: 'Miso łosoś',
				price: '18,00 zł',
				description: 'Jak klasyczne, tylko dodatkowo łosoś – bardziej sycąca wersja klasycznej zupy.',
			},
			{
				image: image,
				allergens: [],
				name: 'Miso nabo gato',
				price: '23,00 zł',
				description: 'Jak klasyczne, tylko z łososiem, krewetką, surimi, tamago, porem i ostrą nutą srirachy – pełna kompozycja smaków.',
			},
		]
	},
	{
		id: 'sides',
		title: 'Dodatki',
		subtitle: 'Dodatki do sushi, które wzbogacą smak Twojego posiłku.',
		slides: [
			{
				image: image,
				allergens: [],
				name: 'Porcja ryżu',
				price: '10,00 zł',
				description: 'Świeżo przygotowana porcja ryżu do sushi – idealna do dań głównych.',
			},
			{
				image: image,
				allergens: [],
				name: 'Porcja imbiru',
				price: '8,00 zł',
				description: 'Zestaw marynowanego imbiru – oczyszcza podniebienie między kęsami.',
			},
			{
				image: image,
				allergens: [],
				name: 'Porcja sosu',
				price: '8,00 zł',
				description: 'Do wyboru: sojowy, sweet mayo, spicy mayo, sweet chili lub kabayaki – dobierz ulubiony smak.',
			},
			{
				image: image,
				allergens: [],
				name: 'Rolka cała w tempurze',
				price: '8,00 zł',
				description: 'Rolka sushi całkowicie pokryta chrupiącą tempurą – coś dla fanów kontrastów.',
			},
			{
				image: image,
				allergens: [],
				name: 'Wymiana nori na papier ryżowy',
				price: '8,00 zł',
				description: 'Zamień klasyczne nori na papier ryżowy – delikatniejsza alternatywa dla wrażliwych.',
			}
		]
	}
]


