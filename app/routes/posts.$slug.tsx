// Dynamic Route(segument)
// 이 페이지는 동적 세그멘트 코드입니다

import { LoaderFunctionArgs } from "@remix-run/node";

// loader
// loader는 UI가 로드 되기 전 데이터를 가져오는 역활을 합니다
export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  console.log(slug);

  // 데이터를 반환 해주어야합니다
  return slug;
}

export default function SinglePost() {
  return <div>Single Post</div>;
}
