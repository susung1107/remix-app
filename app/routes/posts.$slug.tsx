import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  console.log(slug);

  return slug;
}

export default function SinglePost() {
  return <div>Single Post</div>;
}
