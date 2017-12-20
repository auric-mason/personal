import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule( {
    imports: [
        CommonModule
    ],
    declarations: []
} )
export class ParserConfigInterfaceModule { }

export interface Format {
    delimiter?: string;
    encoding?: string;
    quote?: string;
    ignoreChars?: string;
}

export interface HeaderField {
    field?: string;
}

export interface Header {
    lineCount: string;
    caseSensitive?: string;
    validateFields?: string;
    validateNumCols?: string;
    HeaderFields?: HeaderField[];
}

export interface Type {
    name: string;
    minLength?: number;
    maxLength?: number;
    requiredValue?: string;
    allowFutureDates?: string;
    pattern?: string;
    value?: string;
    notZero?: boolean;
    notNegative?: boolean;
}

export interface Converter {
    type?: string;
    locale?: string;
    formatPattern?: string;
    preserveDecimal?: number;
    default?: string;
    hasParenthesis?: boolean;
    parenthesisAreNegative?: boolean;
    absoluteValue?: boolean;
    makeNegative?: boolean;
}


export interface Attribute {
    name: string;
    location: string;
    required: boolean;
    list?: boolean;
    type?: Type;
    converter?: Converter;
}

export interface Field {
    name: string;
    location: string;
    required: boolean;
    list?: boolean;
    type?: Type;
    converter?: Converter;
    field?: Field[];
    attributes?: Attribute[];
}

export interface Address {
    name: string;
    required: boolean;
    fields?: Field[];
}

export interface ParserConfig {
    sid?: string;
    name: string;
    type?: string;
    partnerId?: string;
    format?: Format;
    header?: Header;
    fields?: Field[];
    addresses?: Address[];
}
