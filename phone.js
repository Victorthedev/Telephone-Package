class Telephone {
    constructor (number, observer) {
        this.numbers = [];
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.numbers.push(number);
    }

    removePhoneNummber(number) {
        const index = this.numbers.indexOf(number);

        if (index !== -1) {
            this.numbers.splice(index, 1);
        }
        else {
            console.log('Phone Number is not in your phonebook')
        }
    }

    dialPhoneNumber(number) {
        if (this.numbers.includes(number)) {
            this.observers.forEach((observer) => observer.notify(number));
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);

        if (index !== -1) {
            this.observers.splice(index, 1);
        }
        else {
            console.log('This Observer is not listed')
        }
    }
}

class Observer {
    notify(number) {
        console.log(number);
    }
}

class DialingObserver {
    notify(number) {
        console.log(`Now Dialing ${number}`);
    }
}

const telephone = new Telephone();

telephone.addPhoneNumber('2349033733885');
telephone.addPhoneNumber('2348038353678');

const observer = new Observer();
const dialingobserver = new DialingObserver();

telephone.addObserver(observer);
telephone.addObserver(dialingobserver);

telephone.dialPhoneNumber('2348038353678');