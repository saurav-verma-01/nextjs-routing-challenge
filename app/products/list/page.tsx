import Link from "next/link";

const page = () => {
  return (
    <main className="products">
      <div className="container  ">
        <h1>Products List</h1>

        <ul className="products-list">
          <li>
            <Link href="/products/Mens">Mens</Link>
          </li>
          <li>
            <Link href="/products/Shirts">Shirts</Link>
          </li>
          <li>
            <Link href="/products/Jeans">Jeans</Link>
          </li>
          <li>
            <Link href="/products/Womens">Womens</Link>
          </li>
          <li>
            <Link href="/products/Jwellery">Jwellery</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default page;
