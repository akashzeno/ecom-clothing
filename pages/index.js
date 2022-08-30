import CategoriesContainer from "../components/CategoriesContainer.js";

export default function Home() {
	// After Migrating App To Redux Somehow it's not working so I moved it to NavBar Component
	// I guess that's how it is in NextJS
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChangedListener((user) => {
	// 		if (user) {
	// 			createUserDocFromAuth(user);
	// 		}

	// 		dispatch(setCurrentUser(user));
	// 	});

	// 	return unsubscribe;
	// }, []);

	const categories = [
		{
			id: 1,
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		},
		{
			id: 2,
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		},
		{
			id: 3,
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		},
		{
			id: 4,
			title: "womens",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		},
		{
			id: 5,
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		},
	];

	return <CategoriesContainer categories={categories} />;
}
