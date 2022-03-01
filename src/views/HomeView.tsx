import { useRecoilState } from "recoil";
import counterState from "../stores/counter";
import HelloWorld from "@/components/HelloWorld"
import logo from '../assets/logo.svg'
import './index.css'

const HomeView = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld/>
        <p>
          <button type="button" onClick={() => setCounter((count) => count + 1)}>
            count is: {counter}
          </button>
        </p>
        <p>
          Edit <code>HomeView.tsx</code> and save to test HMR updates.
        </p>
  
      </header>
    </div>
  )
};

export default HomeView;