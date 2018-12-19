export class MailClass {
  private language: string = 'english' || 'danish' || 'swedish';
  private mailDetails: {};

  constructor(public lang, public details: {}) {
    this.language = lang;
    this.mailDetails = details;
  }

  private danish =
    `Hej,
    En fotograf har delt indhold, som kan være relevant for jer.
    Klik her for at se indholdet:
    ((story headline))

    Sig endelig til, hvis der er noget, vi kan hjælpe med.

    De bedste hilsner,
    ((navn)) fra Byrd
    `;

  private swedish =
    `Hej,
    En fotograf har delat innehåll som kan vara relevant för er.
    Klicka här för att se materialet:
    ((Story headline + hyperlink))

    Säg gärna till om det är någonting vi kan hjälpa er med!

    Med vänliga hälsningar,
    ((namn)) från Byrd`;

  private english =
    `Hi there,
    A photographer shared content that might be relevant to you.

    Click to see the material:
    ((Story headline + hyperink))

    Please let us know if you need any help.

    Best regards,
    ((name)) from Byrd`;

  private set msg(msg: any) {
    this.msg = msg;
  }

  private get msg() {
    return this.msg;
  }

  async message() {
    switch (this.language) {
      case 'danish':
        return this.msg(this.danish);
      case 'swedish':
        return this.msg(this.swedish);
      case 'english':
        return this.msg(this.english);
      default:
        throw new TypeError('Invalid string value.');
    }
  }
}
