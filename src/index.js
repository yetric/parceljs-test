import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from "./modules/Button";
const appRoot = document.getElementById('app');

ReactDOM.render(<div className={"app"}>
    <Button>Klicka rå</Button>
</div>, appRoot);
