const currencies = {
    AED: {currencyName: 'UAE Dirham', id: 'AED'},
    AFN: {currencyName: 'Afghan Afghani', currencySymbol: '؋', id: 'AFN'},
    ALL: {currencyName: 'Albanian Lek', currencySymbol: 'Lek', id: 'ALL'},
    AMD: {currencyName: 'Armenian Dram', id: 'AMD'},
    ANG: {currencyName: 'Netherlands Antillean Gulden', currencySymbol: 'ƒ', id: 'ANG'},
    AOA: {currencyName: 'Angolan Kwanza', id: 'AOA'},
    ARS: {currencyName: 'Argentine Peso', currencySymbol: '$', id: 'ARS'},
    AUD: {currencyName: 'Australian Dollar', currencySymbol: '$', id: 'AUD'},
    AWG: {currencyName: 'Aruban Florin', currencySymbol: 'ƒ', id: 'AWG'},
    AZN: {currencyName: 'Azerbaijani Manat', currencySymbol: 'ман', id: 'AZN'},
    BAM: {currencyName: 'Bosnia And Herzegovina Konvertibilna Marka', currencySymbol: 'KM', id: 'BAM'},
    BBD: {currencyName: 'Barbadian Dollar', currencySymbol: '$', id: 'BBD'},
    BDT: {currencyName: 'Bangladeshi Taka', id: 'BDT'},
    BGN: {currencyName: 'Bulgarian Lev', currencySymbol: 'лв', id: 'BGN'},
    BHD: {currencyName: 'Bahraini Dinar', id: 'BHD'},
    BIF: {currencyName: 'Burundi Franc', id: 'BIF'},
    BMD: {currencyName: 'Bermudan Dollar', id: 'BMD'},
    BND: {currencyName: 'Brunei Dollar', currencySymbol: '$', id: 'BND'},
    BOB: {currencyName: 'Bolivian Boliviano', currencySymbol: '$b', id: 'BOB'},
    BRL: {currencyName: 'Brazilian Real', currencySymbol: 'R$', id: 'BRL'},
    BSD: {currencyName: 'Bahamian Dollar', currencySymbol: '$', id: 'BSD'},
    BTC: {currencyName: 'Bitcoin', currencySymbol: 'BTC', id: 'BTC'},
    BTN: {currencyName: 'Bhutanese Ngultrum', id: 'BTN'},
    BWP: {currencyName: 'Botswana Pula', currencySymbol: 'P', id: 'BWP'},
    BYN: {currencyName: 'New Belarusian Ruble', currencySymbol: 'p.', id: 'BYN'},
    BYR: {currencyName: 'Belarusian Ruble', currencySymbol: 'p.', id: 'BYR'},
    BZD: {currencyName: 'Belize Dollar', currencySymbol: 'BZ$', id: 'BZD'},
    CAD: {currencyName: 'Canadian Dollar', currencySymbol: '$', id: 'CAD'},
    CDF: {currencyName: 'Congolese Franc', id: 'CDF'},
    CHF: {currencyName: 'Swiss Franc', currencySymbol: 'Fr.', id: 'CHF'},
    CLF: {currencyName: 'Chilean Unit Of Account', id: 'CLF'},
    CLP: {currencyName: 'Chilean Peso', currencySymbol: '$', id: 'CLP'},
    CNY: {currencyName: 'Chinese Yuan', currencySymbol: '¥', id: 'CNY'},
    COP: {currencyName: 'Colombian Peso', currencySymbol: '$', id: 'COP'},
    CRC: {currencyName: 'Costa Rican Colon', currencySymbol: '₡', id: 'CRC'},
    CUC: {currencyName: 'Cuban Convertible Peso', id: 'CUC'},
    CUP: {currencyName: 'Cuban Peso', currencySymbol: '$', id: 'CUP'},
    CVE: {currencyName: 'Cape Verdean Escudo', id: 'CVE'},
    CZK: {currencyName: 'Czech Koruna', currencySymbol: 'Kč', id: 'CZK'},
    DJF: {currencyName: 'Djiboutian Franc', id: 'DJF'},
    DKK: {currencyName: 'Danish Krone', currencySymbol: 'kr', id: 'DKK'},
    DOP: {currencyName: 'Dominican Peso', currencySymbol: 'RD$', id: 'DOP'},
    DZD: {currencyName: 'Algerian Dinar', id: 'DZD'},
    EGP: {currencyName: 'Egyptian Pound', currencySymbol: '£', id: 'EGP'},
    ERN: {currencyName: 'Eritrean Nakfa', id: 'ERN'},
    ETB: {currencyName: 'Ethiopian Birr', id: 'ETB'},
    EUR: {currencyName: 'Euro', currencySymbol: '€', id: 'EUR'},
    FJD: {currencyName: 'Fijian Dollar', currencySymbol: '$', id: 'FJD'},
    FKP: {currencyName: 'Falkland Islands Pound', currencySymbol: '£', id: 'FKP'},
    GBP: {currencyName: 'British Pound', currencySymbol: '£', id: 'GBP'},
    GEL: {currencyName: 'Georgian Lari', id: 'GEL'},
    GGP: {currencyName: 'Guernsey Pound', id: 'GGP'},
    GHS: {currencyName: 'Ghanaian Cedi', id: 'GHS'},
    GIP: {currencyName: 'Gibraltar Pound', currencySymbol: '£', id: 'GIP'},
    GMD: {currencyName: 'Gambian Dalasi', id: 'GMD'},
    GNF: {currencyName: 'Guinean Franc', id: 'GNF'},
    GTQ: {currencyName: 'Guatemalan Quetzal', currencySymbol: 'Q', id: 'GTQ'},
    GYD: {currencyName: 'Guyanese Dollar', currencySymbol: '$', id: 'GYD'},
    HKD: {currencyName: 'Hong Kong Dollar', currencySymbol: '$', id: 'HKD'},
    HNL: {currencyName: 'Honduran Lempira', currencySymbol: 'L', id: 'HNL'},
    HRK: {currencyName: 'Croatian Kuna', currencySymbol: 'kn', id: 'HRK'},
    HTG: {currencyName: 'Haitian Gourde', id: 'HTG'},
    HUF: {currencyName: 'Hungarian Forint', currencySymbol: 'Ft', id: 'HUF'},
    IDR: {currencyName: 'Indonesian Rupiah', currencySymbol: 'Rp', id: 'IDR'},
    ILS: {currencyName: 'Israeli New Sheqel', currencySymbol: '₪', id: 'ILS'},
    IMP: {currencyName: 'Manx pound', id: 'IMP'},
    INR: {currencyName: 'Indian Rupee', currencySymbol: '₹', id: 'INR'},
    IQD: {currencyName: 'Iraqi Dinar', id: 'IQD'},
    IRR: {currencyName: 'Iranian Rial', currencySymbol: '﷼', id: 'IRR'},
    ISK: {currencyName: 'Icelandic Króna', currencySymbol: 'kr', id: 'ISK'},
    JEP: {currencyName: 'Jersey Pound', id: 'JEP'},
    JMD: {currencyName: 'Jamaican Dollar', currencySymbol: 'J$', id: 'JMD'},
    JOD: {currencyName: 'Jordanian Dinar', id: 'JOD'},
    JPY: {currencyName: 'Japanese Yen', currencySymbol: '¥', id: 'JPY'},
    KES: {currencyName: 'Kenyan Shilling', currencySymbol: 'KSh', id: 'KES'},
    KGS: {currencyName: 'Kyrgyzstani Som', currencySymbol: 'лв', id: 'KGS'},
    KHR: {currencyName: 'Cambodian Riel', currencySymbol: '៛', id: 'KHR'},
    KMF: {currencyName: 'Comorian Franc', id: 'KMF'},
    KPW: {currencyName: 'North Korean Won', currencySymbol: '₩', id: 'KPW'},
    KRW: {currencyName: 'South Korean Won', currencySymbol: '₩', id: 'KRW'},
    KWD: {currencyName: 'Kuwaiti Dinar', id: 'KWD'},
    KYD: {currencyName: 'Cayman Islands Dollar', currencySymbol: '$', id: 'KYD'},
    KZT: {currencyName: 'Kazakhstani Tenge', currencySymbol: 'лв', id: 'KZT'},
    LAK: {currencyName: 'Lao Kip', currencySymbol: '₭', id: 'LAK'},
    LBP: {currencyName: 'Lebanese Lira', currencySymbol: '£', id: 'LBP'},
    LKR: {currencyName: 'Sri Lankan Rupee', currencySymbol: '₨', id: 'LKR'},
    LRD: {currencyName: 'Liberian Dollar', currencySymbol: '$', id: 'LRD'},
    LSL: {currencyName: 'Lesotho Loti', id: 'LSL'},
    LVL: {currencyName: 'Latvian Lats', currencySymbol: 'Ls', id: 'LVL'},
    LYD: {currencyName: 'Libyan Dinar', id: 'LYD'},
    MAD: {currencyName: 'Moroccan Dirham', id: 'MAD'},
    MDL: {currencyName: 'Moldovan Leu', id: 'MDL'},
    MGA: {currencyName: 'Malagasy Ariary', id: 'MGA'},
    MKD: {currencyName: 'Macedonian Denar', currencySymbol: 'ден', id: 'MKD'},
    MMK: {currencyName: 'Myanma Kyat', id: 'MMK'},
    MNT: {currencyName: 'Mongolian Tugrik', currencySymbol: '₮', id: 'MNT'},
    MOP: {currencyName: 'Macanese Pataca', id: 'MOP'},
    MRO: {currencyName: 'Mauritanian Ouguiya', id: 'MRO'},
    MUR: {currencyName: 'Mauritian Rupee', currencySymbol: '₨', id: 'MUR'},
    MVR: {currencyName: 'Maldivian Rufiyaa', id: 'MVR'},
    MWK: {currencyName: 'Malawian Kwacha', id: 'MWK'},
    MXN: {currencyName: 'Mexican Peso', currencySymbol: '$', id: 'MXN'},
    MYR: {currencyName: 'Malaysian Ringgit', currencySymbol: 'RM', id: 'MYR'},
    MZN: {currencyName: 'Mozambican Metical', id: 'MZN'},
    NAD: {currencyName: 'Namibian Dollar', currencySymbol: '$', id: 'NAD'},
    NGN: {currencyName: 'Nigerian Naira', currencySymbol: '₦', id: 'NGN'},
    NIO: {currencyName: 'Nicaraguan Cordoba', currencySymbol: 'C$', id: 'NIO'},
    NOK: {currencyName: 'Norwegian Krone', currencySymbol: 'kr', id: 'NOK'},
    NPR: {currencyName: 'Nepalese Rupee', currencySymbol: '₨', id: 'NPR'},
    NZD: {currencyName: 'New Zealand Dollar', currencySymbol: '$', id: 'NZD'},
    OMR: {currencyName: 'Omani Rial', currencySymbol: '﷼', id: 'OMR'},
    PAB: {currencyName: 'Panamanian Balboa', currencySymbol: 'B/.', id: 'PAB'},
    PEN: {currencyName: 'Peruvian Nuevo Sol', currencySymbol: 'S/.', id: 'PEN'},
    PGK: {currencyName: 'Papua New Guinean Kina', id: 'PGK'},
    PHP: {currencyName: 'Philippine Peso', currencySymbol: '₱', id: 'PHP'},
    PKR: {currencyName: 'Pakistani Rupee', currencySymbol: '₨', id: 'PKR'},
    PLN: {currencyName: 'Polish Zloty', currencySymbol: 'zł', id: 'PLN'},
    PYG: {currencyName: 'Paraguayan Guarani', currencySymbol: 'Gs', id: 'PYG'},
    QAR: {currencyName: 'Qatari Riyal', currencySymbol: '﷼', id: 'QAR'},
    RON: {currencyName: 'Romanian Leu', currencySymbol: 'lei', id: 'RON'},
    RSD: {currencyName: 'Serbian Dinar', currencySymbol: 'Дин.', id: 'RSD'},
    RUB: {currencyName: 'Russian Ruble', currencySymbol: 'руб', id: 'RUB'},
    RWF: {currencyName: 'Rwandan Franc', id: 'RWF'},
    SAR: {currencyName: 'Saudi Riyal', currencySymbol: '﷼', id: 'SAR'},
    SBD: {currencyName: 'Solomon Islands Dollar', currencySymbol: '$', id: 'SBD'},
    SCR: {currencyName: 'Seychellois Rupee', currencySymbol: '₨', id: 'SCR'},
    SDG: {currencyName: 'Sudanese Pound', id: 'SDG'},
    SEK: {currencyName: 'Swedish Krona', currencySymbol: 'kr', id: 'SEK'},
    SGD: {currencyName: 'Singapore Dollar', currencySymbol: '$', id: 'SGD'},
    SHP: {currencyName: 'Saint Helena Pound', currencySymbol: '£', id: 'SHP'},
    SLL: {currencyName: 'Sierra Leonean Leone', id: 'SLL'},
    SOS: {currencyName: 'Somali Shilling', currencySymbol: 'S', id: 'SOS'},
    SRD: {currencyName: 'Surinamese Dollar', currencySymbol: '$', id: 'SRD'},
    STD: {currencyName: 'Sao Tome And Principe Dobra', id: 'STD'},
    SVC: {currencyName: 'Salvadoran Colón', id: 'SVC'},
    SYP: {currencyName: 'Syrian Pound', currencySymbol: '£', id: 'SYP'},
    SZL: {currencyName: 'Swazi Lilangeni', id: 'SZL'},
    THB: {currencyName: 'Thai Baht', currencySymbol: '฿', id: 'THB'},
    TJS: {currencyName: 'Tajikistani Somoni', id: 'TJS'},
    TMT: {currencyName: 'Turkmenistan Manat', id: 'TMT'},
    TND: {currencyName: 'Tunisian Dinar', id: 'TND'},
    TOP: {currencyName: 'Paanga', id: 'TOP'},
    TRY: {currencyName: 'Turkish New Lira', id: 'TRY'},
    TTD: {currencyName: 'Trinidad and Tobago Dollar', currencySymbol: 'TT$', id: 'TTD'},
    TWD: {currencyName: 'New Taiwan Dollar', currencySymbol: 'NT$', id: 'TWD'},
    TZS: {currencyName: 'Tanzanian Shilling', currencySymbol: 'TSh', id: 'TZS'},
    UAH: {currencyName: 'Ukrainian Hryvnia', currencySymbol: '₴', id: 'UAH'},
    UGX: {currencyName: 'Ugandan Shilling', currencySymbol: 'USh', id: 'UGX'},
    USD: {currencyName: 'United States Dollar', currencySymbol: '$', id: 'USD'},
    UYU: {currencyName: 'Uruguayan Peso', currencySymbol: '$U', id: 'UYU'},
    UZS: {currencyName: 'Uzbekistani Som', currencySymbol: 'лв', id: 'UZS'},
    VEF: {currencyName: 'Venezuelan Bolivar', id: 'VEF'},
    VND: {currencyName: 'Vietnamese Dong', currencySymbol: '₫', id: 'VND'},
    VUV: {currencyName: 'Vanuatu Vatu', id: 'VUV'},
    WST: {currencyName: 'Samoan Tala', id: 'WST'},
    XAF: {currencyName: 'Central African CFA Franc', id: 'XAF'},
    XAG: {currencyName: 'Silver (troy ounce)', id: 'XAG'},
    XCD: {currencyName: 'East Caribbean Dollar', currencySymbol: '$', id: 'XCD'},
    XDR: {currencyName: 'Special Drawing Rights', id: 'XDR'},
    XOF: {currencyName: 'West African CFA Franc', id: 'XOF'},
    XPF: {currencyName: 'CFP Franc', id: 'XPF'},
    YER: {currencyName: 'Yemeni Rial', currencySymbol: '﷼', id: 'YER'},
    ZAR: {currencyName: 'South African Rand', currencySymbol: 'R', id: 'ZAR'},
    ZMK: {currencyName: 'Old Zambian Kwacha', id: 'ZMK'},
    ZMW: {currencyName: 'Zambian Kwacha', id: 'ZMW'},
    ZWL: {currencyName: 'Zimbabwean Dollar', id: 'ZWL'}
};

const tempData = {
    amount: 1,
    from: "",
    to: "",
    apiKey: "6b3694e0a3348e11baeb",

    async getApiData() {
        try {
            const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${this.from}_${this.to}&compact=ultra&apiKey=${this.apiKey}`);
            const data = await response.json();

            return data;

            // if(data.cod >= 400) {
            //     UI.showMessage(data.message);
            //     localStorage.removeItem("local_store_country");
            //     localStorage.removeItem("local_store_city");
            //     return false;
            // } else {
            //     return data;
            // }
        } catch (err) {
            UI.showMessage("Some error occured!");
        }
    }
};

const localStore = {
    amount: 1,
    from: "",
    to: "",

    setLocalData() {
        localStorage.setItem("local_amount", JSON.stringify(this.amount));
        localStorage.setItem("local_from_currency", this.from);
        localStorage.setItem("local_to_currency", this.to);
    },

    getLocalData() {
        const amount = JSON.parse(localStorage.getItem("local_amount")) || 1;
        const from = localStorage.getItem("local_from_currency") || "USD";
        const to = localStorage.getItem("local_to_currency") || "BDT";

        return {amount, from, to};
    }
};

const UI = {
    amount: 1,
    from: "",
    to: "",

    selector() {
        const fromOutputElm = document.querySelector("#fromOutput");
        const toOutputElm = document.querySelector("#toOutput");
        const amountInputElm = document.querySelector("#amountInput");
        const msgWrapperElm = document.querySelector("#messageWrapper");
        const fromInputElm = document.querySelector("#fromInput");
        const toInputElm = document.querySelector("#toInput");
        const exchangeBtnElm = document.querySelector("#exchangeBtn");

        return {fromOutputElm, toOutputElm, amountInputElm, msgWrapperElm, fromInputElm, toInputElm, exchangeBtnElm};
    },

    hideMessage() {
        setTimeout(() => {
            const msgElm = document.querySelector("#message");
            if(msgElm) {
                msgElm.remove();
            }
        }, 3000);
    },

    showMessage(msg) {
        if(!document.querySelector("#message")) {
            const {msgWrapperElm} = this.selector();
            const msgElm = document.createElement("div");
            msgElm.classList.add("alert", "alert-danger");
            msgElm.id = "message";
            msgElm.textContent = msg;
            msgWrapperElm.insertAdjacentElement("afterbegin", msgElm);

            this.hideMessage();
        }
    },

    resetInput() {
        const {amountInputElm, fromInputElm, toInputElm} = this.selector();
        amountInputElm.value = "";
        fromInputElm.value = "Choose...";
        toInputElm.value = "Choose...";
    },

    validation() {
        const {amountInputElm, fromInputElm, toInputElm} = this.selector();
        if(amountInputElm.value === "" || parseInt(amountInputElm.value) <= 0 || fromInputElm.value === "" || fromInputElm.value === "Choose..." || toInputElm.value === "" || toInputElm.value === "Choose..." || fromInputElm.value === toInputElm.value) {
            this.showMessage("Invalid inputs!");
            return false;
        }
        return true;
    },

    getInput() {
        const {amountInputElm, fromInputElm, toInputElm} = this.selector();
        const isValid = this.validation();
        if(isValid) {
            const amount = parseInt(amountInputElm.value);
            const from = fromInputElm.value;
            const to = toInputElm.value;
            return {amount, from, to};
        }
    },

    populateUI(data) {
        const {fromOutputElm, toOutputElm} = this.selector();

        const result = data[`${this.from}_${this.to}`] * this.amount;

        fromOutputElm.textContent = `${this.amount} ${currencies[this.from].currencyName} equals`;
        toOutputElm.textContent = `${result} ${currencies[this.to].currencyName}`;
    },

    async populateUIFromLocalData() {
        const {amount, from, to} = localStore.getLocalData();

        this.amount = amount;
        this.from = from;
        this.to = to;

        tempData.amount = amount;
        tempData.from = from;
        tempData.to = to;
        const data = await tempData.getApiData();

        this.populateUI(data);
    },

    init() {
        const {fromInputElm, toInputElm, exchangeBtnElm} = this.selector();

        for(obj in currencies) {
            const optionElm1 = document.createElement("option");
            optionElm1.textContent = currencies[obj].id;

            const optionElm2 = document.createElement("option");
            optionElm2.textContent = currencies[obj].id;

            fromInputElm.insertAdjacentElement("beforeend", optionElm1);
            toInputElm.insertAdjacentElement("beforeend", optionElm2);
        }

        exchangeBtnElm.addEventListener("click", async () => {
            const {amount, from, to} = this.getInput();
            this.resetInput();

            this.amount = amount;
            this.from = from;
            this.to = to;
            
            localStore.amount = amount;
            localStore.from = from;
            localStore.to = to;
            localStore.setLocalData();

            tempData.amount = amount;
            tempData.from = from;
            tempData.to = to;
            const data = await tempData.getApiData();
            this.populateUI(data);
        });

        window.addEventListener("DOMContentLoaded", this.populateUIFromLocalData.bind(this));
    }
};

UI.init();


