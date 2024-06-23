/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SightingCreateFormInputValues = {
    date?: string;
    time?: string;
    speciesCommonName?: string;
    speciesScienceName?: string;
    site?: string;
    latitude?: number;
    longitude?: number;
    count?: number;
    stage?: string;
    sex?: string;
    condition?: string;
    length?: number;
    width?: number;
    weight?: number;
    diskLength?: number;
    depth?: number;
    distance?: number;
    temperature?: number;
    substrate?: string;
    mediaURL?: string;
    mediaSource?: string;
    photographer?: string;
    media?: string;
};
export declare type SightingCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    speciesCommonName?: ValidationFunction<string>;
    speciesScienceName?: ValidationFunction<string>;
    site?: ValidationFunction<string>;
    latitude?: ValidationFunction<number>;
    longitude?: ValidationFunction<number>;
    count?: ValidationFunction<number>;
    stage?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    condition?: ValidationFunction<string>;
    length?: ValidationFunction<number>;
    width?: ValidationFunction<number>;
    weight?: ValidationFunction<number>;
    diskLength?: ValidationFunction<number>;
    depth?: ValidationFunction<number>;
    distance?: ValidationFunction<number>;
    temperature?: ValidationFunction<number>;
    substrate?: ValidationFunction<string>;
    mediaURL?: ValidationFunction<string>;
    mediaSource?: ValidationFunction<string>;
    photographer?: ValidationFunction<string>;
    media?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SightingCreateFormOverridesProps = {
    SightingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    speciesCommonName?: PrimitiveOverrideProps<TextFieldProps>;
    speciesScienceName?: PrimitiveOverrideProps<TextFieldProps>;
    site?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
    stage?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<TextFieldProps>;
    condition?: PrimitiveOverrideProps<TextFieldProps>;
    length?: PrimitiveOverrideProps<TextFieldProps>;
    width?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    diskLength?: PrimitiveOverrideProps<TextFieldProps>;
    depth?: PrimitiveOverrideProps<TextFieldProps>;
    distance?: PrimitiveOverrideProps<TextFieldProps>;
    temperature?: PrimitiveOverrideProps<TextFieldProps>;
    substrate?: PrimitiveOverrideProps<TextFieldProps>;
    mediaURL?: PrimitiveOverrideProps<TextFieldProps>;
    mediaSource?: PrimitiveOverrideProps<TextFieldProps>;
    photographer?: PrimitiveOverrideProps<TextFieldProps>;
    media?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SightingCreateFormProps = React.PropsWithChildren<{
    overrides?: SightingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SightingCreateFormInputValues) => SightingCreateFormInputValues;
    onSuccess?: (fields: SightingCreateFormInputValues) => void;
    onError?: (fields: SightingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SightingCreateFormInputValues) => SightingCreateFormInputValues;
    onValidate?: SightingCreateFormValidationValues;
} & React.CSSProperties>;
export default function SightingCreateForm(props: SightingCreateFormProps): React.ReactElement;
