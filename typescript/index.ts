import bcrypt from 'bcrypt';

// TS-NODE --> TS-NODE-DEV
class User {

    public name: string;
    public email: string;

    constructor(name: string, email: string, private password: string) {
        this.name = name;
        this.email = email;
        this.password = password
        this.hashPassword();
    }

    getPassword(): string {
        return this.password;
    }

    private hashPassword(): void {
        this.password = bcrypt.hashSync(this.password, 5);
    }
}

type Client = {
    name: string;
    email: string;
    birthday: Date;
    cpf?: string;
}

const jose: Client = {
    name: 'Jose',
    email: 'jose@email.com',
    birthday: new Date()
}

abstract class Animal {

    constructor(public name: string) {}



    public abstract fazerBarulho(): void;
}

class Cat extends Animal {

    constructor(name: string) {
        super(name);
    }

    public fazerBarulho(): void {
        console.log(`${this.name} faz Miau`)
    }
}


class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }

    public fazerBarulho(): void {
        console.log(`${this.name} faz Auuuu`)
    }
}

const rex = new Cat('Rex');
const jerry = new Dog('Jerry');

rex.fazerBarulho();
jerry.fazerBarulho();

type PaymentInfo = {
    cardNumber: string;
    securityCode: string;
    expirationDate: string;
}

interface PaymentGateway {
    pay(paymentInfo: PaymentInfo): void;
}

class PayPalPayment implements PaymentGateway {
    pay(paymentInfo: PaymentInfo): void {
        console.log('Pagando pelo paypal', paymentInfo)
    }
}

class StripesPaymentGateway implements PaymentGateway {
    pay(paymentInfo: PaymentInfo): void {
        console.log('Pagando pelo stripes', paymentInfo)
    }
}

class Pay {
    constructor(private readonly paymentGateway: PaymentGateway) {}

    doPay(paymentInfo: PaymentInfo) {
        this.paymentGateway.pay(paymentInfo);
    }
}

const payByPaypal = new Pay(new PayPalPayment());
const payByStripes = new Pay(new StripesPaymentGateway());

const mapa = new Map<string, number>();
mapa.set('a', 1);