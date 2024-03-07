import Link from "next/link";

const page = ({ params }) => {
  return (
    <main className="product">
      <div className="container">
        <Link href="/products/list">Back to Products</Link>
        <h1>
          Product Name - <span className="product-name">{params.slug}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          assumenda hic, odit accusantium ex dignissimos, eum culpa temporibus
          magnam repellat dolores impedit beatae quia debitis perferendis sed
          itaque blanditiis unde!
        </p>
      </div>
    </main>
  );
};

export default page;
