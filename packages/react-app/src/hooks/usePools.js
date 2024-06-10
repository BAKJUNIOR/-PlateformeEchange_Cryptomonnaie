import Web3 from 'web3';
import { useEffect, useState } from 'react';
import { useConfig } from "@usedapp/core";
import { ROUTER_ADDRESS } from "../config";
import { getFactoryInfo, getRouterInfo } from "../utils";

export const loadPools = async (provideUrl) => {
    const provider = new Web3.providers.HttpProvider(provideUrl);
    const web3 = new Web3(provider);
    const routerInfo = await getRouterInfo(ROUTER_ADDRESS, web3);
    const factoryInfo = await getFactoryInfo(routerInfo.factory, web3);

    return factoryInfo.pairsInfo;
}

export const usePools = () => {
    const [pools, setPools] = useState({});
    const [loading, setLoading] = useState(true);
    const { readOnlyChainId, readOnlyUrls } = useConfig();

    useEffect(() => {
        // Vérifie si readOnlyUrls et readOnlyChainId sont définis
        if (readOnlyUrls && readOnlyChainId) {
            loadPools(readOnlyUrls[readOnlyChainId]).then((pools) => {
                setPools(pools);
                setLoading(false);
            }).catch(error => {
                console.error("Error loading pools:", error);
                setLoading(false); // Mettre fin au chargement en cas d'erreur
            });
        }
    }, [readOnlyUrls, readOnlyChainId])

    return [loading, pools];
}
