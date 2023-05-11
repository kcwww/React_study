// import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'React';
  //const name = undefined;
  // const style = {
  //   //background-color 에서 - 사라지고 카멜 표기법으로 변경
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: '48px',// font-size -> fontSize
  //   fontWeight: 'bold',
  //   padding : 16 //  단위 생략할시 px
  // }

  return (
    // 하나의 돔 트리구조로 이루어져야함 
    <>
    <div className="react">
      {name}
    </div>
    <input></input>
    </>
    // 닫는 태그를 작성해주지 않아 에러. </input> 반드시 작성
    // <div className='react'>
    //   {name}
    // </div>
    //class 는 className으로 작성    
    // <div style={style}> 위의 스타일 변수 적용
    // {name}
    // </div>
    //{name || 'React'} undefined 일때
    // {name === 'React' ? (
    //   <h1>React.</h1>
    // ) : (
    //   <h2>No React.</h2>
    // )}
    // name === 'React' && <h1>React.</h1> 과 같음

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
