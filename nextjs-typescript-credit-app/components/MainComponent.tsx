import {Component} from "react";
import styles from "./MainComponent.module.scss"

export interface MainComponentStates {
    firstName: string;
    lastName: string;
    nationalIdNo: string;
    monthlyIncome: string;
    telephoneNumber: string;
    creditResult: Object;
}

export class MainComponent extends Component<any, MainComponentStates> {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            nationalIdNo: "",
            monthlyIncome: "",
            telephoneNumber: "",
            creditResult: {responseMessage: "", creditResult: "", creditAmount: ""}
        }
    }

    onClickButton = (event) => {
        let obj = {
            nationalIdNo: this.state.nationalIdNo,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            monthlyIncome: this.state.monthlyIncome,
            telephoneNumber: this.state.telephoneNumber
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:8080/creditApplication', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({creditResult: data}));
    }

    onChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }

    onChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }

    onChangeNationalIdNo = (event) => {
        this.setState({
            nationalIdNo: event.target.value,
        })
    }

    onChangeMonthlyIncome = (event) => {
        this.setState({
            monthlyIncome: event.target.value,
        })
    }

    onChangeTelephoneNumber = (event) => {
        this.setState({
            telephoneNumber: event.target.value,
        })
    }

    render() {
        return <div className={styles.content}>
            <div className={styles.title}>
                Kredi Başvuru Uygulaması
            </div>
            <div className={styles.subtitle}>
                Gerekli alanları doldurarak kredi başvurusu yapabilir,
                kredi almaya uygun olup olmadığınızı öğrenebilirsiniz!
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.nameLabel}>TC Kimlik Numarası</label>
                <input className={styles.userInput}
                       value={this.state.nationalIdNo}
                       onChange={(event => this.onChangeNationalIdNo(event))}/>
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.nameLabel}>Ad</label>
                <input className={styles.userInput}
                       value={this.state.firstName}
                       onChange={(event => this.onChangeFirstName(event))}/>
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.nameLabel}>Soyad</label>
                <input className={styles.userInput}
                       value={this.state.lastName}
                       onChange={(event => this.onChangeLastName(event))}/>
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.nameLabel}>Aylık Gelir</label>
                <input className={styles.userInput}
                       value={this.state.monthlyIncome}
                       onChange={(event => this.onChangeMonthlyIncome(event))}/>
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.nameLabel}>GSM Numarası</label>
                <input className={styles.userInput}
                       value={this.state.telephoneNumber}
                       onChange={(event => this.onChangeTelephoneNumber(event))}/>
            </div>
            <button className={styles.buttonApp} onClick={(event => this.onClickButton(event))}>Başvur</button>
            <div className={styles.creditResult}>
                {this.state.creditResult["responseMessage"]}
            </div>
            <div className={styles.creditResult}>
                {this.state.creditResult["creditResult"]?
                    this.state.creditResult["creditResult"]=="ACCEPTED"?"KABUL":
                        this.state.creditResult["creditResult"]=="REJECTED"?"RED":""
                    :""}
            </div>
            <div className={styles.creditResult}>
                {this.state.creditResult["creditAmount"] != "" ? "Kredi Miktarı: " +
                    this.state.creditResult["creditAmount"] + "tl" : ""}
            </div>
        </div>;
    }
}