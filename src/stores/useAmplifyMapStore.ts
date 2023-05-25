/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import { appConfig } from "@demo/core/constants";
import {
	CurrentLocationDataType,
	EsriMapEnum,
	GrabMapEnum,
	HereMapEnum,
	IStateProps,
	MapProviderEnum,
	MapUnitEnum
} from "@demo/types";

import createStore from "./createStore";

const {
	PERSIST_STORAGE_KEYS: { LOCAL_STORAGE_PREFIX, AMPLIFY_MAP_DATA }
} = appConfig;
const localStorageKey = `${LOCAL_STORAGE_PREFIX}${AMPLIFY_MAP_DATA}`;

interface AmplifyMapStoreProps {
	currentLocationData?: CurrentLocationDataType;
	isAutomaticMapUnit: boolean;
	mapUnit: MapUnitEnum;
	mapProvider: MapProviderEnum;
	mapStyle: EsriMapEnum | HereMapEnum | GrabMapEnum;
	attributionText: string;
	isCurrentLocationDisabled: boolean;
}

const initialState: IStateProps<AmplifyMapStoreProps> = {
	isAutomaticMapUnit: true,
	mapUnit: MapUnitEnum.IMPERIAL,
	mapProvider: MapProviderEnum.ESRI,
	mapStyle: EsriMapEnum.ESRI_LIGHT,
	attributionText: "Esri, HERE, Garmin, FAO, NOAA, USGS, © OpenStreetMap contributors, and the GIS User Community",
	isCurrentLocationDisabled: false
};

export default createStore<AmplifyMapStoreProps>(initialState, true, localStorageKey);
