import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {HomePage} from "./pages/HomePage";

import {NotFoundPage} from "./pages/NotFoundPage";
import {MyMenu} from "./components/Navbar";

import {NftDrive} from "./pages/NftDrive"
import {TextDrive} from "./pages/TextDrive"

export default function App(){
	return(
	<BrowserRouter>	
	
	
	<MyMenu />
	<Routes>
	<Route path='/app' element={<HomePage />} />
	
	<Route path ='/textDrive' element={<TextDrive />} />

	<Route path ='/nftdrive' element={<NftDrive />} />
	
	
	<Route path='*' element={<NotFoundPage />} />
	</Routes>
		
	</BrowserRouter>
	);
}