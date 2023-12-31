import { useLoaderData } from "react-router-dom";
import { Product } from "../models/product.model";
import DisplayProducts from "../components/products/DisplayProducts";
import { User } from "../models/user.model";

interface Types {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  user: User;
}

export default function Home({ setUser, user }: Types) {
  const { products }: any = useLoaderData();
  return (
    <>
      <DisplayProducts user={user} setUser={setUser} products={products} />
    </>
  );
}

export async function loader() {
  const response = await fetch("https://localhost:7218/api/Products");
  const products = (await response.json()) as Product[];
  return { products };
}
