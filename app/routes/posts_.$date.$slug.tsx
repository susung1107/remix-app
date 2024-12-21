// 이 페이지는 다중 동적 세그멘트 코드입니다

import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// loader

export async function loader({ params }: LoaderFunctionArgs) {
  const { date, slug } = params;
  console.log(date, slug);

  // 데이터를 반환 해주어야합니다
  return { date, slug };
}

export default function DateSinglePost() {
  const { date, slug } = useLoaderData<typeof loader>();
  return (
    <div>
      {date} {slug}
    </div>
  );
}
