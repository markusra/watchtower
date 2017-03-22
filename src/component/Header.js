import React from 'react';
import Button from "./Button";

const styles = {
    header: {
        justifyContent: 'space-around',
        zIndex: 2,
        width: '100%',
        height: '3em',
        top: 0,
        left: 0,
        position: 'fixed',
        borderBottom: '2px solid #414141',
        background: '#658C98'
    },
    logo: {
        textAlign: 'left',
        color: '#fff',
        height: '3em'
    },
    menuContent: {
        width: '65%',
        margin: '0 auto'
    },
    buttons: {
        marginTop: '0.5em',
        marginRight: '0.5em',
        float: 'right'
    }

};

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {word: ""};
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        window.word = event.target.value;
        this.setState({word: event.target.value});
        if (window.word == "") {
            this.handleSubmitClick();
        }
    }

    handleSubmitClick = () => {

        const params = {
            word: window.word,
            start: window.minVal,
            end: window.maxVal
        };

        const esc = encodeURIComponent;
        const query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        const url = "http://localhost:3000/api/tweets/byword?" + query;

        fetch(url)
            .then(result => {
                result.json().then(d => {
                    window.replace_locations(d.data)
                });
            });
    };

    render() {
        return (
            <div style={styles.header}>
                <div style={styles.menuContent}>
                    <ul>
                        <li><a href="/"><img alt="Logo" className="logoIMG" style={styles.logo}
                                             src={require("../images/icon.png")}/></a></li>
                        <li><input onChange={this.handleChange} value={this.state.word} type="text" size="25"/><Button
                            onclick={this.handleSubmitClick}>Search</Button></li>
                    </ul>
                </div>
            </div>
        );
    }
}
