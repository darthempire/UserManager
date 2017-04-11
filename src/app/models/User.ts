export class User {
    private _guid: string;
    private _name: string;
    private _mark: number;


    constructor(userName: string, userMark: number) {
        this.name = userName;
        this.mark = userMark;
        this._guid = this.getguid();
    }

    public set name(n: string) {
        let lastLetter: string = n.charAt(n.length - 1).toUpperCase();
        n = n.toLowerCase().substring(0, n.length - 1);

        this._name = n + lastLetter;
    }
    public get name(): string {
        return this._name;
    }

    public set mark(m: number) {
        if (m > 10) {
            this._mark = 9;
        }
        else {
            if (m < 0)
                this._mark = 0;
            else
                this._mark = m;
        }
    }
    public get mark(): number {
        return this._mark;
    }

    public get guid(): string {
        return this._guid;
    }
    public set guid(g: string) {
        this._guid = g;
    }


    // infrastructure
    private getguid(): string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }
    private s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

}
