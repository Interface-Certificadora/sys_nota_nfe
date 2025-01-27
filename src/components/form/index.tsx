'use client'
import { FormComponent } from "./form";
import InputCep from "./input/inputCep";
import InputDate from "./input/inputDate";
import InputNumber from "./input/inputNumber";
import InputSelect from "./input/inputSelect";
import InputString from "./input/inputString";


export const CardForm = {
    Form : FormComponent,
    InputString: InputString,
    InputNumber: InputNumber,
    InputDate: InputDate,
    InputSelect: InputSelect,
    InputCep: InputCep
}