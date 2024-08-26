import { useEffect, useRef } from "react";
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default function SpreadsheetComponent(props) {
    let container = useRef();

    useEffect(() => {
        const spreadsheet = new Spreadsheet(container.current, {});
        
        spreadsheet.parse(props.data);

        return () => {
            spreadsheet.destructor();
        }
    });

    return <div ref={container} className="widget"></div>;
}
