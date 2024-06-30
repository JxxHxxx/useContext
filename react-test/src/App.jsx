import './App.css'
import Page from './context/v1/Page'
import PageV2 from './context/v2/PageV2'
import PageV3 from './context/v3/PageV3'

function App() {

  return (
    <>
    {/* 컨텍스트 사용 기본(vlaue 넘기기) */}
      {/* <Page />  */}
      {/* 컨텍스트 사용 응용(객체를 넘기기) */}
      {/* <PageV2 /> */}
      {/* 중첩 컨텍스트 및 컨텍스트 피라미드 문제 해결 */}
      <PageV3 />
    </>
  )
}

export default App
