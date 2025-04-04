

export type TelephoneResponse = {
    is_valid: boolean;
    is_formatted_properly: boolean;
    country: string;
    location: string;
    timezones: string[];
    format_national: string;
    format_international: string;
    format_e164: string;
    country_code: number;
};

export type Telefono = {
    telefono: string;
    pais: string;
  };
  