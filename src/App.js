
import styles from './App.module.css';
import { EditorProvider } from './context/context';
import CodeBar from './components/codeBar/CodeBar';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <EditorProvider>
      <CodeBar/>

      <div className={styles.main}>
        <Header/>
        <Preview/>
      </div>
    </EditorProvider>
  );
}

export default App;
