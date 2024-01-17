export interface Country {
    name: {
      common: string;
    };
    capital: string;
    flags: {
      png: string;
    };
    languages: {
      [key: string]: string;
    };
}