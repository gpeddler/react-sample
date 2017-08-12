import React from "react";

const styles = require("./styles.pcss");

export class Header extends React.Component {
    render() {
        return (
            <div className={ styles.wrap }>
                <h1 className={ styles.logo }>로고</h1>
                <ul className={ styles.menu }>
                    <li>
                        <button className={ styles.button }>
                            <span>세무사 소개</span>
                            <div className={ styles.innerMenu }>
                                <div>인사말</div>
                                <div>약력소개</div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className={ styles.button }>
                            <span>세무사 소개</span>
                            <div className={ styles.innerMenu }>
                                <div>인사말</div>
                                <div>약력소개</div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className={ styles.button }>
                            <span>세무사 소개</span>
                            <div className={ styles.innerMenu }>
                                <div>인사말</div>
                                <div>약력소개</div>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}
