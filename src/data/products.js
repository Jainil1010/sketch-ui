import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";

// export const products = [
//     {
//         id: 1,
//         name: "Pixel Warrior Keychain",
//         price: 399,
//         category: "Keychains",
//         image: test1,
//         description:
//             "Handmade pixel warrior keychain crafted for gaming enthusiasts.",
//         details: ['Handmade by artisans', 'Premium quality materials', 'Gaming inspired design', 'Perfect collector gift']
//     },
//     {
//         id: 2,
//         name: "Dragon Knight Figurine",
//         price: 1299,
//         category: "Figurines",
//         image: test2,
//         description: "Hand-painted dragon knight collectible figurine.",
//         details: ['Handmade by artisans', 'Premium quality materials', 'Gaming inspired design', 'Perfect collector gift']
//     },
//     {
//         id: 3,
//         name: "Retro Console Lamp",
//         price: 899,
//         category: "Accessories",
//         image: test3,
//         description: "Retro-inspired gaming lamp for your battlestation.",
//         details: ['Handmade by artisans', 'Premium quality materials', 'Gaming inspired design', 'Perfect collector gift']
//     },
//     {
//         id: 4,
//         name: "Mage Artisan Keycap",
//         price: 499,
//         category: "Keycaps",
//         image: test1,
//         description: "Handmade artisan keycap featuring a fantasy mage.",
//         details: ['Handmade by artisans', 'Premium quality materials', 'Gaming inspired design', 'Perfect collector gift']
//     },
//     {
//         id: 5,
//         name: "Pixel Ghost Sticker Pack",
//         price: 249,
//         category: "Stickers",
//         image: test2,
//         description: "Set of handcrafted gaming-inspired stickers.",
//         details: ['Handmade by artisans', 'Premium quality materials', 'Gaming inspired design', 'Perfect collector gift']
//     },
//     {
//         id: 6,
//         name: "Mini Dungeon Dice Tray",
//         price: 799,
//         category: "Accessories",
//         image: test3,
//         description: "Handmade wooden tray for dice and desk organization.",
//         details: ['Handmade by artisans', 'Premium quality materials', 'Gaming inspired design', 'Perfect collector gift']
//     },
// ];

export const products = [
    {
        id: "1",
        name: "Organic Cotton Hoodie",
        brand: "Sketch Wear",
        category: "Fashion",
        image: test1,
        images: [test1, test2, test3],
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        rating: 4.8,
        reviewCount: 238,
        stock: 12,
        deliveryDate: "Monday, 24 June",
        shortDescription:
            "Premium organic cotton hoodie designed for comfort, durability and everyday street style.",
        description:
            "Experience next-level comfort with our handcrafted organic cotton hoodie. Made with carefully selected materials, this hoodie combines softness, durability and modern aesthetics. Every stitch is designed to deliver a premium experience for daily wear, travel and casual occasions.",
        quote: "Designed with passion. Crafted to last.",
        perfectFor: ["Daily Wear", "Street Style", "Travel", "Casual Outfits"],
        colors: ["#7D8453", "#8D998B", "#929A67", "#2F2F2F"],
        sizes: ["S", "M", "L", "XL"],
        highlights: [
            "100% Organic Cotton",
            "Soft Brushed Interior",
            "Machine Wash Friendly",
            "Premium Stitching",
        ],
        features: [
            {
                icon: "eco",
                title: "Eco Friendly",
                description:
                    "Made with sustainable materials that are better for the planet.",
            },
            {
                icon: "quality",
                title: "Premium Quality",
                description:
                    "High quality fabric with durable stitching for long-term use.",
            },
            {
                icon: "breathable",
                title: "Breathable Fabric",
                description: "Keeps you comfortable throughout the day.",
            },
            {
                icon: "premium",
                title: "Luxury Finish",
                description:
                    "A premium handcrafted look with attention to every detail.",
            },
        ],
        specifications: [
            {
                icon: "material",
                label: "Material",
                value: "100% Organic Cotton",
            },
            {
                icon: "dimensions",
                label: "Dimensions",
                value: "40 x 30 x 5 cm",
            },
            {
                icon: "weight",
                label: "Weight",
                value: "850 grams",
            },
            {
                icon: "color",
                label: "Color",
                value: "Olive Green",
            },
            {
                icon: "brand",
                label: "Brand",
                value: "Sketch Wear",
            },
            {
                icon: "warranty",
                label: "Warranty",
                value: "1 Year",
            },
        ],
        reviews: [
            {
                name: "Aarav",
                rating: 5,
                verified: true,
                comment:
                    "The hoodie feels premium and the fabric quality is amazing. Definitely worth the price.",
                images: ["/reviews/user1.jpg"],
            },
            {
                name: "Riya",
                rating: 4,
                verified: true,
                comment:
                    "Very comfortable and looks exactly like the pictures.",
            },
            {
                name: "Kabir",
                rating: 5,
                verified: false,
                comment: "Loved the fit and the finishing details.",
            },
        ],
    },
    {
        id: "2",
        name: "Minimal Canvas Backpack",
        brand: "Sketch Carry",
        category: "Accessories",
        image: test1,
        images: [test1, test2, test3],
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        rating: 4.6,
        reviewCount: 126,
        stock: 20,
        deliveryDate: "Tuesday, 25 June",
        shortDescription:
            "A lightweight canvas backpack built for travel, work and everyday adventures.",
        description:
            "Designed for people who love simplicity. This canvas backpack offers smart storage, premium materials and a minimal aesthetic.",
        quote: "Carry your essentials with style.",
        perfectFor: ["Students", "Office", "Travel", "Everyday Carry"],
        colors: ["#929A67", "#2F2F2F"],
        sizes: ["Medium", "Large"],
        highlights: [
            "Water Resistant",
            "Multiple Compartments",
            "Comfort Shoulder Straps",
        ],
        features: [
            {
                icon: "quality",
                title: "Strong Build",
                description: "Durable canvas construction.",
            },
            {
                icon: "premium",
                title: "Minimal Design",
                description: "Clean aesthetic for everyday use.",
            },
        ],
        specifications: [
            {
                icon: "material",
                label: "Material",
                value: "Canvas Fabric",
            },
            {
                icon: "weight",
                label: "Weight",
                value: "600 grams",
            },
            {
                icon: "warranty",
                label: "Warranty",
                value: "6 Months",
            },
        ],
        reviews: [
            {
                name: "Neha",
                rating: 5,
                verified: true,
                comment: "Perfect everyday backpack.",
            },
        ],
    },
];
