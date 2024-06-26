import React from "react"
import {useEthers} from "@usedapp/core";
import styles from "./styles";
import {uniswapLogo} from "./assets";
import {Exchange, Loader, WalletButton} from "./components";
import {usePools} from "./hooks";
import s from "./Tutoriat/style.module.css";


const Crypto = () => {
    const {account} = useEthers();
    const {loading, pools} = usePools();
    const poolsLoading = false;
    return(
        <div className={`font-sans p-6 ${s.App}`}>

            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <header className={styles.header}>
                        <img
                            src={uniswapLogo}
                            alt="Uniswap Logo"
                            className="w-16 h-16 object-contain"
                        />
                        <WalletButton/>
                    </header>
                    <div className={styles.exchangeContainer}>
                        <h1 className={styles.headTitle}>Uniswap 2.0</h1>
                        <p className={styles.subTitle}>Exchange tokens in seconds</p>

                        <div className={styles.exchangeBoxWrapper}>
                            <div className={styles.exchangeBox}>
                                <div className="pink_gradient"/>
                                <div className={styles.exchange}>
                                    {account ? (
                                        loading ? (
                                            <Loader title="Loading, pools please wait"/>
                                        ) : <Exchange pools ={pools}/>
                                    ) : <Loader title="please connect your wallet"/> }
                                </div>
                                <div className="pink_gradient"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crypto;