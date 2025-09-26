import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scene/global/sidebar";
import Topbar from "./scene/global/topbar";
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Dashboard from "./scene/dashboard";
import GeoLocaltion from "./scene/Data";
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import Detail from "./scene/dashboard/Detail";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
          
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/geolocation" element={<GeoLocaltion/>}/>
              <Route path="/edit/:id" element={<Detail />}/>
             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
//<Topbar setIsSidebar={setIsSidebar} />