import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" about="About TextUtils"></Navbar>
      <div className="container my-3">
      <TextForm heading="Enter Your Text to Analyze"></TextForm>
      </div>
      

    </>
  );


}

export default App;
