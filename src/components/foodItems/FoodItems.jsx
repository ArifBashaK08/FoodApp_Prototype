import FoodCard from "./FoodCard"

function FoodItems() {

    const foodItems = [
        {
            id: 1,
            imgUrl: 'https://media.istockphoto.com/id/1345624358/photo/chicken-biriyani.jpg?s=2048x2048&w=is&k=20&c=-agpiZBzd6Upz99_wdcXrJRlG1EpNY6e4_Ff16HiyPc=',
            name: 'Chicken Biryani',
            price: 250,
            currency: 'INR',
            ratings: 4.5,
            description: 'Aromatic rice dish cooked with chicken and spices.',
            netQuantity: '500g',
            nutritionValues: {
                calories: 350,
                fat: 12,
                carbohydrates: 45,
                protein: 20,
            }
        },
        {
            id: 2,
            imgUrl: 'https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.jpg?s=2048x2048&w=is&k=20&c=KWdxgdyv_fRDh8i8D5LToxbKpcRrNJ0iVCmQZ8LFoAY=',
            name: 'Margherita Pizza',
            price: 300,
            currency: 'INR',
            ratings: 4.2,
            description: 'Classic pizza topped with tomato sauce, mozzarella cheese, and basil leaves.',
            netQuantity: 'Large',
            nutritionValues: {
                calories: 280,
                fat: 10,
                carbohydrates: 35,
                protein: 15,
            }
        },
        {
            id: 3,
            imgUrl: 'https://media.istockphoto.com/id/175028181/photo/fillet-of-salmon-with-vegetable.jpg?s=2048x2048&w=is&k=20&c=ynco16RV3dVAUHR6qAUDuXTQY7bPL0QTOigDSK0np5I=',
            name: 'Grilled Salmon',
            price: 450,
            currency: 'INR',
            ratings: 4.8,
            description: 'Fresh salmon fillet grilled to perfection, served with roasted vegetables.',
            netQuantity: '200g',
            nutritionValues: {
                calories: 300,
                fat: 15,
                carbohydrates: 10,
                protein: 30,
            }
        },
        {
            id: 4,
            imgUrl: 'https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=',
            name: 'Vegetable Biryani',
            price: 200,
            currency: 'INR',
            ratings: 4.3,
            description: 'Delicious rice dish cooked with mixed vegetables and aromatic spices.',
            netQuantity: '400g',
            nutritionValues: {
                calories: 280,
                fat: 8,
                carbohydrates: 40,
                protein: 12,
            }
        },
        {
            id: 5,
            imgUrl: 'https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=',
            name: 'Cheese Burger',
            price: 150,
            currency: 'INR',
            ratings: 4.6,
            description: 'Juicy beef patty topped with melted cheese, lettuce, and tomato, served in a bun.',
            netQuantity: 'Single',
            nutritionValues: {
                calories: 320,
                fat: 18,
                carbohydrates: 25,
                protein: 15,
            }
        },
        {
            id: 6,
            imgUrl: 'https://media.istockphoto.com/id/1355695225/photo/paneer-masala-a-curry-made-with-cottage-cheese-cubes-cooked-in-a-gravy-of-onions-tomatoes-and.jpg?s=612x612&w=0&k=20&c=E76hpUAiTetGNgjhD3jkKNRV9ThePlUR87fPOeHDZyY=',
            name: 'Paneer Tikka Masala',
            price: 280,
            currency: 'INR',
            ratings: 4.4,
            description: 'Creamy tomato-based curry with grilled paneer cubes, seasoned with Indian spices.',
            netQuantity: '300g',
            nutritionValues: {
                calories: 310,
                fat: 14,
                carbohydrates: 20,
                protein: 22,
            }
        },
        {
            id: 7,
            imgUrl: 'https://media.istockphoto.com/id/157619904/photo/multi-flavor-ice-cream-in-glass-bowi.jpg?s=2048x2048&w=is&k=20&c=UlidTCysvVSZscgWQf5hhxCr2hYFUkKbKJYKxz5hdXs=',
            name: 'Multi-Flavored Delight',
            price: 220,
            currency: 'INR',
            ratings: 4.9,
            description: 'Indulge in the ultimate ice cream experience with a combination of chocolate, butterscotch, and vanilla flavors, adorned with luscious strawberry and chocolate cream.',
            netQuantity: '550ml',
            nutritionValues: {
                calories: 280,
                fat: 15, // in grams
                sugar: 30, // in grams
                protein: 5, // in grams
            }
        },
        {
            id: 8,
            imgUrl: 'https://media.istockphoto.com/id/1221224008/photo/carbonara-pasta-penne-with-pancetta-egg-parmesan-cheese-and-cream-sauce.jpg?s=612x612&w=0&k=20&c=1yuTlk4bXbJU7YC-X9Ach8tT7bS1gERuLgh_BpDlHgw=',
            name: 'Pasta Carbonara',
            price: 320,
            currency: 'INR',
            ratings: 4.5,
            description: 'Spaghetti pasta tossed in a creamy sauce with crispy bacon and Parmesan cheese.',
            netQuantity: 'Large',
            nutritionValues: {
                calories: 380,
                fat: 20,
                carbohydrates: 30,
                protein: 15,
            }
        },
        {
            id: 9,
            imgUrl: 'https://media.istockphoto.com/id/155598375/photo/dessert-chocolate-cake.jpg?s=612x612&w=0&k=20&c=DbBk025te405Suf8zNBdgp67y3iJB9LsyXERPQMTAqY=',
            name: 'Chocolate Fudge',
            price: 180,
            currency: 'INR',
            ratings: 4.8,
            description: 'Rich chocolate ice cream swirled with fudge sauce and chocolate chunks.',
            netQuantity: '400ml',
            nutritionValues: {
                calories: 250,
                fat: 12, // in grams
                sugar: 25, // in grams
                protein: 5, // in grams
            }
        },
    ];


    return (
        <div className="flex flex-wrap  text-sm md:text-md md:grid lg:grid-cols-4 p-4 gap-2">
            {foodItems.map((item) => {
                return <FoodCard id={item.id} imgUrl={item.imgUrl} name={item.name} currency={item.currency} price={item.price} netQuantity={item.netQuantity} ratings={item.ratings} desc={item.description} />
            })
            }
        </div>
    )
}
export default FoodItems