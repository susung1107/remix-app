// splat 라우트
// splat 라우트는 라우트 경로에 변수를 포함하여 동적으로 라우트를 생성합니다
// 고정된 경로 이후의 모든 경로를 처리합니다
// 이 페이지는 splat 라우트 코드입니다

import { LoaderFunctionArgs } from "@remix-run/node";

export default function Category() {
  return <div>Category</div>;
}

export const loader = ({ params }: LoaderFunctionArgs) => {
  const parms = params["*"];
  console.log(parms);

  return { parms };
};
