import Spreadsheet from "./Spreadsheet";
import { getData } from "./data";

function App() {
    let data = getData();
    return <Spreadsheet data={data} />;
}

export default App;
