import { createContext, useContext, useEffect, useState } from 'react';
import Touristplaces from '../mocks/Touristplaces'; // updated mock data file
import storageService from '../service/storageService';
import AuthContext from './AuthContext';

const STORAGE_KEY = 'touristPlaces';
const StorageContext = createContext();

function StorageProvider({ children }) {
	const [places, setPlaces] = useState([]);
	const { userEmail } = useContext(AuthContext);

	useEffect(() => {
		if (!storageService.hasItem(STORAGE_KEY)) {
			storageService.setItem(STORAGE_KEY, Touristplaces);
		}
		setPlaces(storageService.getItem(STORAGE_KEY) || []);
	}, []);

	function syncPlaces(newPlaces) {
		storageService.setItem(STORAGE_KEY, newPlaces);
		setPlaces(newPlaces);
	}

	function addNewPlace(newPlace) {
		if (newPlace.isPrivate) {
			newPlace['ownedBy'] = userEmail;
		}
		const newPlaces = [...places, newPlace];
		syncPlaces(newPlaces);
		console.log(newPlace);
	}

	function getAllPlaces() {
		return places;
	}

	function getPlacesByCondition(condition) {
		return places.filter(condition);
	}

	function updatePlace(index, newData) {
		const updatedPlaces = [...places];
		updatedPlaces[index] = { ...updatedPlaces[index], ...newData };
		syncPlaces(updatedPlaces);
	}

	function deletePlace(index) {
		const updatedPlaces = [...places];
		updatedPlaces.splice(index, 1);
		syncPlaces(updatedPlaces);
	}

	return (
		<StorageContext.Provider
			value={{
				addNewPlace,
				getAllPlaces,
				getPlacesByCondition,
				updatePlace,
				deletePlace,
				places,
			}}
		>
			{children}
		</StorageContext.Provider>
	);
}

export default StorageContext;
export { StorageProvider };
