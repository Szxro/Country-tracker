export interface RegionResponse {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Region[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Europe = "Europe",
}

export interface Currencies {
    MDL?: All;
    RSD?: All;
    BYN?: All;
    CHF?: All;
    ISK?: All;
    HRK?: All;
    EUR?: All;
    UAH?: All;
    PLN?: All;
    DKK?: All;
    GIP?: All;
    RUB?: All;
    GBP?: All;
    IMP?: All;
    RON?: All;
    BGN?: All;
    GGP?: All;
    MKD?: All;
    BAM?: BAM;
    NOK?: All;
    SEK?: All;
    FOK?: All;
    ALL?: All;
    CZK?: All;
    JEP?: All;
    HUF?: All;
}

export interface All {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    ron?: string;
    srp?: string;
    bel?: string;
    rus?: string;
    fra?: string;
    gsw?: string;
    ita?: string;
    roh?: string;
    isl?: string;
    hrv?: string;
    cnr?: string;
    ell?: string;
    deu?: string;
    lit?: string;
    ukr?: string;
    pol?: string;
    slk?: string;
    por?: string;
    dan?: string;
    eng?: string;
    swe?: string;
    tur?: string;
    ltz?: string;
    glv?: string;
    slv?: string;
    spa?: string;
    gle?: string;
    bul?: string;
    nfr?: string;
    mkd?: string;
    sqi?: string;
    bos?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    nld?: string;
    lav?: string;
    cat?: string;
    est?: string;
    fao?: string;
    lat?: string;
    mlt?: string;
    bar?: string;
    ces?: string;
    fin?: string;
    nrf?: string;
    hun?: string;
    nor?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
