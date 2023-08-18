import React from "react";
import { Suspense, lazy } from "react";



const Component1 = lazy(() => import('../src/LazyContent/myComponent1'))
const Component2 = lazy(() => import('../src/LazyContent/myComponent2'))
function App() {
  return (
    <>
      <h1> Lazy Load</h1>
      <Suspense fallback=
        {<div>Component1 are loading please wait...</div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback=
        {<div>Component2 are loading please wait...</div>}>
        <Component2 />
      </Suspense>
    </>
  );
}

export default App;
