import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const { lang } = params;
  console.log(lang);

  return { lang };
}

export default function Products() {
  return <div>Products</div>;
}
