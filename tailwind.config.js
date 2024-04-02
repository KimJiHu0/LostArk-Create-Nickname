/** @type {import('tailwindcss').Config} */
export default {
    // class : 수동으로 변경할 수 있도록 html 태그의 className 속성에 dark가 추가되었을 때, 다크모드가 적용됨.
    // media : 운영체제 설정에 따라 다크모드 스타일이 적용 됨.
    darkMode: 'class',
    // Tailwind의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가합니다.
    // src경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성 해줍니다.
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    // content: ['./src/**/*.{js,ts,jsx,tsx}'],
    // content: ['./src/assets/components/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
};
